package data.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.AlarmDto;
import data.dto.ApplicantResume;
import data.mapper.ApplicantManagementMapper;
import data.service.ApplicantManagementService;
import data.service.MailService;

@RestController
@CrossOrigin
@RequestMapping("/corpManagement")
public class ApplicantManagementController {

    @Autowired
    private MailService mailService;
    
    @Autowired
    private ApplicantManagementService applicnatManagementService;
    
    @Autowired
    private ApplicantManagementMapper applicantManagementMapper;

    //이력서 가져오기
    @GetMapping("/getNewResume")
    public List<ApplicantResume> getNewResume(@RequestParam int corp_idx, @RequestParam int progress){
        Map<String, Object> map = applicnatManagementService.getNewResume(corp_idx, progress);

        return applicantManagementMapper.getNewResume(map);
    }

    //이력서 상태 변경 (0>1 또는 0>3)
    @GetMapping("/updateResumeProgress")
    public void updateResumeProgress(@RequestParam List<Integer> num, @RequestParam int corp_idx, @RequestParam int toProgress, @RequestParam(required = false, defaultValue = "false") boolean alarm){
        System.out.println("applicantResume: " + num);
        
        List<ApplicantResume> resumeList = new ArrayList<>();
        Iterator<Integer> it = num.iterator();
        while(it.hasNext()){
            ApplicantResume ar = new ApplicantResume();
            ar.setNum(it.next());
            ar.setCorp_idx(corp_idx);
            ar.setProgress(toProgress);
            resumeList.add(ar);
        }
        //메일 보내기
        // mailService.sendMail();

        applicantManagementMapper.updateProgress(resumeList);
        // if(alarm) //알람 전송
        //     applicantManagementMapper.insertAlarm(resumeList);

    }

    @PostMapping("insertAlarm")
    public void insertAlarm(@RequestBody List<AlarmDto> alarmList){
        System.out.println("alarmList: " + alarmList);

        applicantManagementMapper.insertAlarm(alarmList);
    }

    //하트 체크
    @PostMapping("/insertCheckedHeart")
    public void insertCheckedHeart(@RequestParam int corp_id, @RequestParam int apply_num){
        applicantManagementMapper.insertCheckedHeart(corp_id, apply_num);
    }

    //체크된 하트 리스트
    @GetMapping("/getCheckedHeart")
    public List<Integer> getCheckedHearts (@RequestParam int corp_id){
        return applicantManagementMapper.getCheckedHearts(corp_id);
    }

    //하트 삭제
    @DeleteMapping("/deleteCheckedHeart")
    public void deleteCheckedHeart(@RequestParam int corp_id, @RequestParam int apply_num){
        System.out.println("corp_id:"+corp_id+", apply_num:"+apply_num );
        applicantManagementMapper.deleteCheckedHeart(apply_num);
    }
    
}
