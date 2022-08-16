package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;


@Service
public class ApplicnatManagementService implements ApplicantManagementServiceInter{

    @Override
    public Map<String,Object> getNewResume(String corp_idx, int progress) {
        Map<String,Object> map = new HashMap<>();
        map.put("corp_idx", corp_idx);
        map.put("progress", progress);
        return map;
    }
    
}
