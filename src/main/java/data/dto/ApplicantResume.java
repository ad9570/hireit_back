package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Alias("applicantResume")
public class ApplicantResume {
	
    private String user_id;
    private int num;
    private String user_name;
    private String user_photo;
    // private int user_idx;
    private String user_email;
    private String job_position;
    private String tech_tags;
    private int progress;
    private int corp_idx;
    //추가
    private String corp_name;
    //
    private String title;
    private String content;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    private Timestamp applyday;
    
}