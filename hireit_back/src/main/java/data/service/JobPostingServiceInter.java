package data.service;

import data.dto.ApplyDto;
import data.dto.JobPostingDto;
import data.dto.MemberDto;

public interface JobPostingServiceInter {
	
	public void insertJob(JobPostingDto dto);
	public JobPostingDto getNum(String corp_id);
	public JobPostingDto jobDetail(int num);
	public void updateJob(JobPostingDto dto);
	public MemberDto corpUserInfo(String username);
	public void deleteJob(String corp_id);
	public void updateLiked(String username, String com_liked);
	public String unlike(String username);
	public void merge(String username, String com_liked);
	public void updateScrap(String username, String job_scrap);
	public String unscrap(String username);
	public void mergeScrap(String username, String job_scrap);
	public void insertApply(ApplyDto dto);
	
}
