package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("board")
@Data
public class BoardDto {
	
	private int board_id;
	private String writer;
	private String title;
	private String content;
	@JsonFormat(pattern = "yyyy-MM-dd:mm",timezone = "Asia/seoul")
	private Timestamp writedate;
	private String photo;
	private int hit;
	private int heart;
	private int totalheart;
	private String nikname;
	private String category_name;
	
}
