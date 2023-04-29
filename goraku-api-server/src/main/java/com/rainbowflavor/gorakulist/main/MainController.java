package com.rainbowflavor.gorakulist.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Deprecated
//@Controller
@RequestMapping("/")
public class MainController {
    @GetMapping
    public String index(){
        return "index";
    }
}
