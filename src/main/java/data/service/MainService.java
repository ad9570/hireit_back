package data.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.mapper.MainMapper;

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
	public List<Map<String, Object>> getQueryCorp(String keyword) {
		if(keyword == ""){
            return null;
        }
        return mainMapper.getQueryCorp(keyword);
	}

	@Override
	public List<Map<String, Object>> getQueryJob(String keyword) {
		if(keyword == ""){
            return null;
        }
        return mainMapper.getQueryJob(keyword);
	}

}
