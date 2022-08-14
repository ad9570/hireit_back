package data.service;

import java.util.List;
import java.util.Map;

public interface MainServiceInter {
	
    public List<Map<String,Object>> getQueryAboutCorp(String keyword);
    public List<Map<String,Object>> getQueryAboutJob(String keyword);
    public List<Map<String,Object>> getQueryCorp(String q);
    public List<Map<String,Object>> getQueryJob(String q);
    
}
