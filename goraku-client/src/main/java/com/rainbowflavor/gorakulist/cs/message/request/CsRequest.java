package com.rainbowflavor.gorakulist.cs.message.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CsRequest {
    private String email;
    private String cstype;
    private String content;
    private String footer;
}
