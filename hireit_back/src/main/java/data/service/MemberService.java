package data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.mapper.MemberMapper;

@Service
public class MemberService implements MemberServiceInter {

	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public int idCheck(String username) {
		return memberMapper.idCheck(username);
	}

}
