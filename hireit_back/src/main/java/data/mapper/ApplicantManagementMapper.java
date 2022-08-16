package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.AlarmDto;
import data.dto.ApplicantResume;
import data.dto.FavoriteDto;
import data.dto.InsContentDto;
import data.dto.MailDTO;

@Mapper
public interface ApplicantManagementMapper {
    public List<ApplicantResume> getNewResume(Map<String,Object> map);
    public void updateProgress(List<ApplicantResume> resumeList);
    //알람
    public void insertAlarm(List<AlarmDto> alarmList);
    //메일
    // public List<MailDTO> getMailData(List<>)
    //좋아요
    public void insertCheckedHeart(String corp_id, int apply_num);
    public List<Integer> getCheckedHearts(String corp_id);
    public void deleteCheckedHeart(int apply_num);
    //idx
    public int getCorpIdx(String corp_name);
}

