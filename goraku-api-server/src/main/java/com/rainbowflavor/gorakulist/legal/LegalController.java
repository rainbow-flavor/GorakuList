package com.rainbowflavor.gorakulist.legal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Deprecated
//@Controller
@RequestMapping("/legal")
public class LegalController {

    @GetMapping("/toc")
    public String toc(){
        return "content/legal/toc";
    }

    @GetMapping("/privacy")
    public String privacy(){
        return "content/legal/privacy";
    }
}
