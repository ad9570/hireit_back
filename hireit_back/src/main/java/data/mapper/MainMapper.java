package data.mapper;

import java.util.List;
import java.util.Map;
import data.dto.JobPostingDto;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MainMapper {
	
    public List<Map<String,Object>> getQueryAboutCorp(String keyword);
    public List<Map<String,Object>> getQueryAboutJob(String keyword);
    // public List<Map<String,Object>> getQueryCorp(String keyword);
    // public List<Map<String,Object>> getQueryJob(String keyword);
    public List<Map<String,Object>> getQueryCorp(Map<String, Object>map);
    public List<Map<String,Object>> getQueryJob(Map<String, Object>map);
    public int getTotalCount (String keyword);
    public int getTotalCount2 (String keyword);

}
