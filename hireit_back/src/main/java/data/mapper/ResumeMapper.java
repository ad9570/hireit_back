package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.RequestParam;

import data.dto.MemberDto;
import data.dto.ResumeDto;
import data.dto.ResumeSaveDto;

@Mapper
public interface ResumeMapper {
	public void insertResume(ResumeDto dto);
	public MemberDto resumeUserInfo(String username);
	public ResumeSaveDto resumeSaveDetail(Map<String, Object> map);
	public void saveResume(ResumeSaveDto dto);
	public ResumeSaveDto getIdx(String username);
	public void deleteResume(int resume_idx);
	public void updateSaveResume(ResumeSaveDto dto);
	public ResumeDto resumeDetail(int resume_idx);
	public ResumeDto getDetailIdx(String username);
	public void updateResume(ResumeDto dto);
	public List<ResumeDto> resumeList(String username);
}
