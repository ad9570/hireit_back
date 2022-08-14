package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.BoardDto;
import data.dto.MemberDto;
import data.mapper.BoardMapper;

@Service
public class BoardService implements BoardServiceInter {

   @Autowired
   private BoardMapper boardMapper;
   
   @Override
   public void insertBoard(BoardDto dto) {
      // TODO Auto-generated method stub
      boardMapper.insertBoard(dto);
   }
   
   @Override
   public void deleteBoard(int board_id){
	   
		boardMapper.deleteBoard(board_id);
	}
	
   @Override
	public void updateBoard(BoardDto dto){
	   
		boardMapper.updateBoard(dto);
	}
   

   @Override
   public int getTotalCount() {
      // TODO Auto-generated method stub
      return boardMapper.getTotalCount();
   }

   @Override
   public List<BoardDto> getPagingList(int start, int perpage) {
      // TODO Auto-generated method stub
      Map<String, Integer> map=new HashMap<>();
      map.put("start", start);
      map.put("perpage", perpage);
         
      return boardMapper.getPagingList(map);
   }

   @Override
   public List<BoardDto> getAllDatas(String category_name) {
      // TODO Auto-generated method stub
      return boardMapper.getAllDatas(category_name);
   }

   @Override
   public BoardDto getData(int board_id) {
      // TODO Auto-generated method stub
      return boardMapper.getData(board_id);
   }

   @Override
   public void updateHit(int board_id, int hit) {
      // TODO Auto-generated method stub
	  Map<String, Integer> map = new HashMap<>();
	  map.put("board_id", board_id);
	  map.put("hit", hit);
      boardMapper.updateHit(map);
   }
   
   @Override
	public void updateHeart(int heart, int board_id) {
		
		Map<String, Integer> map=new HashMap<>();
		map.put("heart", heart);
		map.put("board_id", board_id);
		boardMapper.updateHeart(map);
	}

	@Override
	public MemberDto selectNickname(String username) {
		return boardMapper.selectNickname(username);
	}
	
	@Override
	public void updateNickname(String username, String nickname) {
		Map<String, String> map=new HashMap<>();
		map.put("username", username);
		map.put("nickname", nickname);
		boardMapper.updateNickname(map);
	}

}