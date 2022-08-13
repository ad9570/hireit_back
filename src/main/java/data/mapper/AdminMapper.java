package data.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.MemberDto;

@Mapper
public interface AdminMapper {

	public Map<String, Integer> getMemberCount();
	public MemberDto getMemberList();
	public double getEmpRate();
	public int getEmpCount();
	public int getResumeCount();
	public int getJobPostingCount();
	
}
