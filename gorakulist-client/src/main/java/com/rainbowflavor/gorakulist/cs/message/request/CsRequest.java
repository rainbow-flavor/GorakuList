package com.rainbowflavor.gorakulist.cs.message.request;

import lombok.Data;

@Data
public class CsRequest {
    private String email;
    private String cstype;
    private String content;
    private String footer;
}
