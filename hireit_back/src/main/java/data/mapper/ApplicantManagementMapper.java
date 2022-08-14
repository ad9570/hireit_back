package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.AlarmDto;
import data.dto.ApplicantResume;

@Mapper
public interface ApplicantManagementMapper {
	
    public List<ApplicantResume> getNewResume(Map<String,Object> map);
    public void updateProgress(List<ApplicantResume> resumeList);
    //알람
    public void insertAlarm(List<AlarmDto> alarmList);
    //좋아요
    public void insertCheckedHeart(int corp_id, int apply_num);
    public List<Integer> getCheckedHearts(int corp_id);
    public void deleteCheckedHeart(int apply_num);
    
}

