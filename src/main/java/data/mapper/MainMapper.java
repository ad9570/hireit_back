package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MainMapper {
	
    public List<Map<String,Object>> getQueryAboutCorp(String keyword);
    public List<Map<String,Object>> getQueryAboutJob(String keyword);
    public List<Map<String,Object>> getQueryCorp(String keyword);
    public List<Map<String,Object>> getQueryJob(String keyword);
    
}
