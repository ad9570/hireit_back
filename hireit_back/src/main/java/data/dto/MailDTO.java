package data.dto;

import lombok.Data;

@Data
public class MailDTO {

    private String address;
    // private String title;
    private String message;
    private String corpName;
    private String position;
    /*
    getter, setter 생략
    */
}