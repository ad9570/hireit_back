package data.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.InsContentDto;
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

    @GetMapping("/searchCorp")
    public List<Map<String, Object>> getQCorp(@RequestParam String q){
        return mainService.getQueryCorp(q);
    }

    @GetMapping("/searchJob")
    public List<Map<String, Object>> getQJob(@RequestParam String q){
        return mainService.getQueryJob(q);
    }
    
}
