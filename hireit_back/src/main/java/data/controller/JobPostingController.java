package data.controller;


import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import data.dto.ApplyDto;
import data.dto.JobPostingDto;
import data.dto.MemberDto;
import data.service.JobPostingService;
import util.FileUtil;

@RestController
@CrossOrigin
@RequestMapping("/jobposting")
public class JobPostingController {
	
	@Autowired
	private JobPostingService jobpostingService;
	
	String photoName; //리액트에서 업로드한 이미지명 (변경된 이미지명일수도)
	
	@PostMapping("/upload")
	public String fileUpload(@RequestParam MultipartFile uploadFile,
			HttpServletRequest request) {
		
		//파일명
		String fileName=uploadFile.getOriginalFilename();
		
		//업로드할 폴더위치
		String path=request.getServletContext().getRealPath("/save");
		System.out.println(path);
		
		//직전에 업로드한 이미지 삭제하기
		File file=new File(path+"/"+photoName);
		
		//만약 존재할 경우
		if(file.exists())
			file.delete();

		//파일명 변경
		FileUtil fileUtil=new FileUtil();
		photoName=fileUtil.changeFileName(fileName);
		
		//save폴더에 업로드
		try {
			uploadFile.transferTo(new File(path+"/"+photoName));
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return photoName;
	}
	
	@PostMapping("/insert")
	public void insertJob(@RequestBody JobPostingDto dto) {
		//업로드한 사진명
//		dto.setJob_posting_photo(photoName);
		jobpostingService.insertJob(dto);
		photoName=null;
	}
	
	@PostMapping("/update")
	public void update(@RequestBody JobPostingDto dto) //json으로 받을때 requestbody
	{
		System.out.println(photoName);
		//사진이 있을경우 이미지명 넣기
		dto.setJob_posting_photo(photoName);
		jobpostingService.updateJob(dto);
		photoName=null; //photoName 초기화 
	}
	
	@GetMapping("/getnum")
	public JobPostingDto getNum(@RequestParam String corp_id) {
		return jobpostingService.getNum(corp_id);
	}
	
	@GetMapping("/detail")
	public JobPostingDto jobDetail(@RequestParam int num) {
		return jobpostingService.jobDetail(num);
	}
	
	@GetMapping("/userinfo")
	public MemberDto corpUserInfo(@RequestParam String username) {
		return jobpostingService.corpUserInfo(username);
	}
	
	@DeleteMapping("/delete")
	public void deleteJob(@RequestParam String corp_id) {
		jobpostingService.deleteJob(corp_id);
	}
	
	@GetMapping("/updateliked")
	public void updateLiked(@RequestParam String username,
							@RequestParam String com_liked) {
		jobpostingService.updateLiked(username, com_liked);
	}
	
	@GetMapping("/unlike")
	public void unlike(@RequestParam String username,
					   @RequestParam String corp_name) {
		String com_liked=jobpostingService.unlike(username); //none,test,test,주식회사 지마켓
		com_liked=com_liked.replace(","+corp_name, "");	
		jobpostingService.merge(username, com_liked);
	}
	
	@GetMapping("/updatescrap")
	public void updateScrap(@RequestParam String username,
							@RequestParam String job_scrap) {
		jobpostingService.updateScrap(username, job_scrap);
	}
	
	@GetMapping("/unscrap")
	public void unscrap(@RequestParam String username,
					   @RequestParam int num) {
		String job_scrap=jobpostingService.unscrap(username); //none,test,test,주식회사 지마켓
		job_scrap=job_scrap.replace(","+num, "");	
		jobpostingService.mergeScrap(username, job_scrap);
	}
	
	@PostMapping("/insertapply")
	public void insertApply(@RequestBody ApplyDto dto) {
		jobpostingService.insertApply(dto);
	}
	
}
