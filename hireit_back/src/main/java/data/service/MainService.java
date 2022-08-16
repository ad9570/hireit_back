package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.mapper.MainMapper;
import data.dto.JobPostingDto;

@Service
public class MainService implements MainServiceInter {
	
    @Autowired
    private MainMapper mainMapper;
    
    @Override
    public List<Map<String, Object>> getQueryAboutCorp(String keyword){
        if(keyword == ""){
            return null;
        }
        return mainMapper.getQueryAboutCorp(keyword);
    }

    @Override
    public List<Map<String, Object>> getQueryAboutJob(String keyword) {
        if(keyword == ""){
            return null;
        }
        return mainMapper.getQueryAboutJob(keyword);
    }

    @Override
    public List<Map<String, Object>> getQueryCorp(String keyword, int start, int perpage) {
       // TODO Auto-generated method stub
       
        if(keyword == ""){
             return null;
         }
       Map<String, Object> map = new HashMap<>();
        map.put("start", start);
        map.put("perpage", perpage);
        map.put("keyword", keyword);
        return mainMapper.getQueryCorp(map);
    }
    
    @Override
    public List<Map<String,Object>> getQueryJob(String keyword, int start, int perpage) {
       
        if(keyword == ""){
             return null;
         }
       Map<String, Object> map = new HashMap<>();
        map.put("start", start);
        map.put("perpage", perpage);
        map.put("keyword",keyword );
         return mainMapper.getQueryJob(map);
    }

    @Override
    public int getTotalCount(String keyword) {
       // TODO Auto-generated method stub
       return mainMapper.getTotalCount(keyword);
    }
 
    @Override
    public int getTotalCount2(String keyword) {
       // TODO Auto-generated method stub
       return mainMapper.getTotalCount2(keyword);
    }
 
}
