package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Alias("alarm")
public class AlarmDto {
	
    private int num;
    private int apply_num;
    private String user_id;
    private int corp_idx;
    private int is_new;
    private String title;
    @JsonFormat(pattern = "yyyy년 MM월 dd일 HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp writeday;
    private String content;
    
}
