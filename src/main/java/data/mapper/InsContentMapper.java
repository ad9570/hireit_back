package data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import data.dto.InsContentDto;

@Mapper
public interface InsContentMapper {
	
    public List<InsContentDto> getInsContents(int tag);
    
}
