package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("jobposting")
@Data
public class JobPostingDto {
	
	private int num;
	private String corp_id;
	private int corp_idx;
	private String corp_name;
	private String title;
	private String job_exp;
	private int experience;
	private String education;
	private String salary;
	private String position;
	private String job_type;
	private String hire_type;
	private int hire_num;
	private String preferred_tech;
	private String main_work;
	private String com_addr;
    private String end_date;
    private String job_posting_photo;
    private int tag_job_corp;
    private int tag_tech_corp;
    @JsonFormat (pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    private Timestamp writeday;
    
}
