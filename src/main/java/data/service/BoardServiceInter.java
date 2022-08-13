package data.service;

import java.util.List;

import data.dto.BoardDto;
import data.dto.MemberDto;


public interface BoardServiceInter {
	
	public void insertBoard(BoardDto dto);
	public int getTotalCount();
	public List<BoardDto> getPagingList(int start, int perpage);
	public List<BoardDto> getAllDatas(String category_name);
	public BoardDto getData(int board_id);
	public void updateHit(int board_id, int hit);
	public void updateHeart(int heart,int board_id);
	public void deleteBoard(int board_id);
	public void updateBoard(BoardDto dto);
    public MemberDto selectNickname(String username);
    public void updateNickname(String username, String nickname);
	
}
