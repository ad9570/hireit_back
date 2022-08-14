package data.service;

import java.util.Map;

public interface ApplicantManagementServiceInter {
	
    public Map<String,Object> getNewResume(int corp_id, int apply_num);
    
}
