package data.service;

import java.util.List;

import data.dto.MemberDto;
import data.dto.ResumeDto;
import data.dto.ResumeSaveDto;

public interface ResumeServiceInter {
	
	public void insertResume(ResumeDto dto);
	public MemberDto resumeUserInfo(String username);
	public ResumeSaveDto resumeSaveDetail(String id, int resume_idx);
	public void saveResume(ResumeSaveDto dto);
	public ResumeSaveDto getIdx(String username);
	public void deleteResume(int resume_idx);
	public void updateSaveResume(ResumeSaveDto dto);
	public ResumeDto resumeDetail(int resume_idx);
	public ResumeDto getDetailIdx(String username);
	public void updateResume(ResumeDto dto);
	public List<ResumeDto> resumeList(String username);
	
}
