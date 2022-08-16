package data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import data.dto.AlarmDto;
import data.dto.MailDTO;


@Component
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(List<AlarmDto> mailList) {
        SimpleMailMessage message = new SimpleMailMessage();

        for(AlarmDto mail:mailList){
            message.setTo(mail.getAddress());
            //message.setFrom(""); from 값을 설정하지 않으면 application.yml의 username값이 설정됨
            message.setSubject("[Hireit]" + mail.getCorpName() + " " + mail.getPosition() + "에 지원하신 결과를 확인하세요!");
            message.setText(mail.getContent()); 

            mailSender.send(message);
            System.out.println("Service address" + mail.getAddress());
        }
        
    }

}