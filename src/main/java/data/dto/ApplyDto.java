package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("apply")
@Data
public class ApplyDto {
	
	private int num;
	private int resume_idx;
	private String indiv_id;
	private int corp_idx;
	private int job_posting_idx;
	private String job_position;
	private String job_group;
	private String progress;
    @JsonFormat (pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    private Timestamp applyday;
    
}
