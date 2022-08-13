package data.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.ApplyDto;
import data.dto.JobPostingDto;
import data.dto.MemberDto;
import data.mapper.JobPostingMapper;

@Service
public class JobPostingService implements JobPostingServiceInter {
	
	@Autowired
	private JobPostingMapper jobpostingMapper;
	
	@Override
	public void insertJob(JobPostingDto dto) {
		jobpostingMapper.insertJob(dto);
	}

	@Override
	public JobPostingDto getNum(String corp_id) {
		return jobpostingMapper.getNum(corp_id);
	}

	@Override
	public JobPostingDto jobDetail(int num) {
		return jobpostingMapper.jobDetail(num);
	}

	@Override
	public void updateJob(JobPostingDto dto) {
		jobpostingMapper.updateJob(dto);
		
	}

	@Override
	public MemberDto corpUserInfo(String username) {
		return jobpostingMapper.corpUserInfo(username);
	}

	@Override
	public void deleteJob(String corp_id) {
		jobpostingMapper.deleteJob(corp_id);	
	}


	@Override
	public void updateLiked(String username, String com_liked) {
		Map<String, String> map = new HashMap<>();
		map.put("username", username);
		map.put("com_liked", com_liked);
		jobpostingMapper.updateLiked(map);
	}

	@Override
	public String unlike(String username) {
		return jobpostingMapper.unlike(username);
	}

	@Override
	public void merge(String username, String com_liked) {
		Map<String, String> map = new HashMap<>();
		map.put("username", username);
		map.put("com_liked", com_liked);
		jobpostingMapper.merge(map);
	}

	@Override
	public void updateScrap(String username, String job_scrap) {
		Map<String, String> map = new HashMap<>();
		map.put("username", username);
		map.put("job_scrap", job_scrap);
		jobpostingMapper.updateScrap(map);
	}

	@Override
	public String unscrap(String username) {
		return jobpostingMapper.unscrap(username);
	}

	@Override
	public void mergeScrap(String username, String job_scrap) {
		Map<String, String> map = new HashMap<>();
		map.put("username", username);
		map.put("job_scrap", job_scrap);
		jobpostingMapper.mergeScrap(map);	
	}

	@Override
	public void insertApply(ApplyDto dto) {
		jobpostingMapper.insertApply(dto);
	}
	
}
