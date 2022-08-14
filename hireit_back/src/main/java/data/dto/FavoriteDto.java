package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("favorite")
public class FavoriteDto {
	
    private int num;
    private int corp_id;
    private int apply_num;
    
}
