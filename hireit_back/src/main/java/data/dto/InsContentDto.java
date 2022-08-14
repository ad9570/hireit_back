package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("insightContent")
public class InsContentDto {
	
    private int idx;
    private int tag;
    private String url;
    private String title;
    private String description;
    private String platform;
    private String profile_img;
    private String name;
    
}
