package data.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

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

import data.dto.MemberDto;
import data.dto.ResumeDto;
import data.dto.ResumeSaveDto;
import data.mapper.ResumeMapper;
import data.service.ResumeService;
import util.FileUtil;

@RestController
@CrossOrigin
@RequestMapping("resume")
public class ResumeController {
	
	@Autowired
	private ResumeService resumeService;
	
	String fileName; //리액트에서 업로드한 이미지명 (변경된 이미지명일수도)
	
	@PostMapping("/upload")
	public String fileUpload(@RequestParam MultipartFile uploadFile,
			HttpServletRequest request) {
		
		//파일명
		fileName=uploadFile.getOriginalFilename();
		
		//업로드할 폴더위치
		String path=request.getServletContext().getRealPath("/save");
		System.out.println(path);
		
		//직전에 업로드한 이미지 삭제하기
		File file=new File(path+"/"+fileName);
		
		//만약 존재할 경우
		if(file.exists())
			file.delete();

		//파일명 변경
		FileUtil fileUtil=new FileUtil();
		fileName=fileUtil.changeFileName(fileName);
		
		//save폴더에 업로드
		try {
			uploadFile.transferTo(new File(path+"/"+fileName));
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return fileName;
	}
	
	@PostMapping("/insert")
	public void insertResume(@RequestBody ResumeDto dto) {
		//업로드한 사진명
//		dto.setPot_file(fileName);
		resumeService.insertResume(dto);
		fileName=null;
		System.out.println(dto);
	}
	
	@GetMapping("/userinfo")
	public MemberDto resumeUserInfo(@RequestParam String username) {
		return resumeService.resumeUserInfo(username);
	}
	
	@GetMapping("/getidx")
	public ResumeSaveDto getIdx(@RequestParam String username) {
		return resumeService.getIdx(username);
	}

	@GetMapping("/savedetail")
	public ResumeSaveDto resumeSaveDetail(@RequestParam String username, 
								      @RequestParam int resume_idx) 
	{
		return resumeService.resumeSaveDetail(username, resume_idx);
	}
	
	@PostMapping("/saveresume")
	public void saveResume(@RequestBody ResumeSaveDto dto) {
		resumeService.saveResume(dto);
	}
	
	@DeleteMapping("/savedelete")
	public void deleteResume(@RequestParam int resume_idx)
	{
		resumeService.deleteResume(resume_idx);
	}
	
	@PostMapping("/updatesaveresume")
	public void updateSaveResume(@RequestBody ResumeSaveDto dto) {
		resumeService.updateSaveResume(dto);
	}
	
	@GetMapping("/detail")
	public ResumeDto resumeDetail(@RequestParam int resume_idx) 
	{
		return resumeService.resumeDetail(resume_idx);
	}
	
	@GetMapping("/getdetailidx")
	public ResumeDto getDetailIdx(@RequestParam String username) {
		return resumeService.getDetailIdx(username);
	}
	
	@PostMapping("/updateresume")
	public void updateResume(@RequestBody ResumeDto dto) {
		resumeService.updateResume(dto);
	}
	
	@GetMapping("/resumelist")
	public List<ResumeDto> resumeList(@RequestParam String username) {
		return resumeService.resumeList(username);
	}
}
