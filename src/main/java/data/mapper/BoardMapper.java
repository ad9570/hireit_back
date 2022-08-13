package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.BoardDto;
import data.dto.MemberDto;


@Mapper
public interface BoardMapper {
	
	public void insertBoard(BoardDto dto);
	public int getTotalCount();
	public List<BoardDto> getPagingList(Map<String, Integer> map);
	public List<BoardDto> getAllDatas(String category_name);
	public BoardDto getData(int board_id);
	public void updateHit(Map<String, Integer> map);
	public void updateHeart(Map<String, Integer> map);
	public void deleteBoard(int board_id);
	public void updateBoard(BoardDto dto);
	public MemberDto selectNickname(String username);
	public void updateNickname(Map<String, String> map);
	
}
