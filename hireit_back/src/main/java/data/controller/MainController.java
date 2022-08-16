package data.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.InsContentDto;
import data.dto.JobPostingDto;
import data.mapper.InsContentMapper;
import data.mapper.MainMapper;
import data.service.MainService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class MainController {

    @Autowired
    private MainMapper mainMapper;

    @Autowired
    private MainService mainService;
    
    @Autowired
    private InsContentMapper insContentMapper;

    @GetMapping("/getICList")
    public List<InsContentDto> getInsContents(@RequestParam int tag){
        System.out.println("tag입니다tag?tag입니다tag?tag입니다.tag>>>>>>>>>>>"+tag);
        return insContentMapper.getInsContents(tag);
    }

    @GetMapping("/queryAboutCorp")
    public List<Map<String, Object>> getQueryCorp(@RequestParam String keyword){
        return mainService.getQueryAboutCorp(keyword);
    }

    @GetMapping("/queryAboutJob")
    public List<Map<String, Object>> getQueryJob(@RequestParam String keyword){
        return mainService.getQueryAboutJob(keyword);
    }

    // @GetMapping("/searchCorp")
    // public List<Map<String, Object>> getQCorp(@RequestParam String q){
    //     return mainService.getQueryCorp(q);
    // }

    // @GetMapping("/searchJob")
    // public List<Map<String, Object>> getQJob(@RequestParam String q){
    //     return mainService.getQueryJob(q);
    // }

    @GetMapping("/searchCorp")
    public Map<String, Object> getQCorp(@RequestParam String q,
          @RequestParam(defaultValue = "1")int currentPage){
       int totalCount;//총갯수
      int perPage=5;//한 페이지당 보여질 글의 갯수
      int perBlock=5;//한(밑에 페이지 숫자)블럭당 보여질 페이지수
      int totalPage; //총페이지수
      int startNum;//한페이지에서 보여질 시작 글번호
      int startPage;//한블럭에서 보여질 시작 페이지 번호
      int endPage;//한블럭에서 보여질 끝 페이지 번호
      int no;//각페이지당 보여질 시작번호
      
      totalCount=mainService.getTotalCount(q);
      totalPage=totalCount/perPage+(totalCount%perPage==0?0:1);
      startPage=(currentPage-1)/perBlock*perBlock+1;
            
      endPage=startPage+perBlock-1;
      if(totalPage<endPage) {
         endPage=totalPage;
      }
      startNum=(currentPage-1)*perPage;
      no=totalCount-(currentPage-1)*perPage;
      List<Map<String, Object>> list= mainService.getQueryCorp(q,startNum, perPage);
      System.out.println("list : "+list);
      System.out.println("list mapper : "+mainService.getQueryCorp(q,startNum, perPage));
      

      System.out.println("keyword:" + q);
      
      List<Integer> parr=new ArrayList<>();
      for(int pp=startPage;pp<=endPage;pp++) {
         parr.add(pp);
      }
      
      
      System.out.println(no+"no");
      Map<String, Object> map=new HashMap<>();
      map.put("list", list);
      map.put("parr", parr);
      map.put("totalPage", totalPage);
      map.put("totalCount", totalCount);
      map.put("startPage", startPage);
      map.put("endPage", endPage);
      map.put("no", no);
      
      return map;
   }

    @GetMapping("/searchJob")
    public Map<String, Object> getQJob(@RequestParam String q,
       @RequestParam(defaultValue = "1")int currentPage){
   int totalCount;//총갯수
   int perPage=5;//한 페이지당 보여질 글의 갯수
   int perBlock=5;//한(밑에 페이지 숫자)블럭당 보여질 페이지수
   int totalPage; //총페이지수
   int startNum;//한페이지에서 보여질 시작 글번호
   int startPage;//한블럭에서 보여질 시작 페이지 번호
   int endPage;//한블럭에서 보여질 끝 페이지 번호
   int no;//각페이지당 보여질 시작번호
   
   totalCount=mainService.getTotalCount2(q);
   totalPage=totalCount/perPage+(totalCount%perPage==0?0:1);
   //totalPage=(int)Math.ceil((double)totalCount/perPage);//무조건올림
   
   startPage=(currentPage-1)/perBlock*perBlock+1;
         
   endPage=startPage+perBlock-1;
   if(totalPage<endPage) {
      endPage=totalPage;
   
      
   }
   startNum=(currentPage-1)*perPage;
   no=totalCount-(currentPage-1)*perPage;
   List<Map<String,Object>> list= mainService.getQueryJob(q,startNum, perPage);
   System.out.println("list : "+list);
   
   ArrayList<Integer> parr=new ArrayList<>();
   for(int pp=startPage;pp<=endPage;pp++) {
      parr.add(pp);
   }
   
   
   System.out.println(no+"jobno");
   Map<String, Object> map=new HashMap<>();
   map.put("list", list);
   map.put("parr", parr);
   map.put("totalPage", totalPage);
   map.put("totalCount", totalCount);
   map.put("startPage", startPage);
   map.put("endPage", endPage);
   map.put("no", no);
   
   return map;
    }

    
}
