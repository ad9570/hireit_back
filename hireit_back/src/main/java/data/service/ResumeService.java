package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.MemberDto;
import data.dto.ResumeDto;
import data.dto.ResumeSaveDto;
import data.mapper.ResumeMapper;

@Service
public class ResumeService implements ResumeServiceInter {

	@Autowired
	private ResumeMapper resumeMapper;
	
	@Override
	public void insertResume(ResumeDto dto) {
		resumeMapper.insertResume(dto);
	}

	@Override
	public ResumeSaveDto resumeSaveDetail(String username, int resume_idx) {
		Map<String, Object> map=new HashMap<>();
		map.put("username", username);
		map.put("resume_idx", resume_idx);
		
		return resumeMapper.resumeSaveDetail(map);
	}

	@Override
	public void saveResume(ResumeSaveDto dto) {
		resumeMapper.saveResume(dto);
	}

	@Override
	public MemberDto resumeUserInfo(String username) {
		return resumeMapper.resumeUserInfo(username);
	}

	@Override
	public ResumeSaveDto getIdx(String username) {
		return resumeMapper.getIdx(username);
	}

	@Override
	public void deleteResume(int resume_idx) {
		resumeMapper.deleteResume(resume_idx);		
	}

	@Override
	public void updateSaveResume(ResumeSaveDto dto) {
		resumeMapper.updateSaveResume(dto);
	}

	@Override
	public ResumeDto resumeDetail(int resume_idx) {
		return resumeMapper.resumeDetail(resume_idx);
	}

	@Override
	public ResumeDto getDetailIdx(String username) {
		return resumeMapper.getDetailIdx(username);
	}

	@Override
	public void updateResume(ResumeDto dto) {
		resumeMapper.updateResume(dto);
	}

	@Override
	public List<ResumeDto> resumeList(String username) {
		return resumeMapper.resumeList(username);
	}
}
