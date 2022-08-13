package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("user")
public class MemberDto {
	
	private int user_id; //user_num
   	private int activated;
   	private String nickname;
   	private String password;
   	private String username; //user_id
   	private String role;
   	private String name; //user_name
   	private String user_hp;
	private String user_photo;
   	private String user_addr; //희망근무지
	private String job_type; //희망직종
   	private String addr; //거주지
   	private String addr_detail; //거주지 상세주소
   	private String user_birth;
   	private String user_email;
   	private String user_gender;
   	private String corp_number;
   	private int social;
   	private String com_liked;
   	private String job_scrap;
   	
}
