package data.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.ApplyDto;
import data.dto.JobPostingDto;
import data.dto.MemberDto;

@Mapper
public interface JobPostingMapper {
	
	public void insertJob(JobPostingDto dto);
	public JobPostingDto getNum(String corp_id);
	public JobPostingDto jobDetail(int num);
	public void updateJob(JobPostingDto dto);	
	public MemberDto corpUserInfo(String username);
	public void deleteJob(String corp_id);
	public void updateLiked(Map<String, String> map);
	public String unlike(String username);
	public void merge(Map<String, String> map);
	public void updateScrap(Map<String, String> map);
	public String unscrap(String username);
	public void mergeScrap(Map<String, String> map);
	public void insertApply(ApplyDto dto);
	
}
