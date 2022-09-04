package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.cs.message.request.CsRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

//@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/cs")
public class CsController {
    private final CsService csService;
    @GetMapping
    public String csView(){
        return "content/cs/cs";
    }

    @GetMapping("/incorrect")
    public String inCorrectCsView(@RequestParam String storeName, RedirectAttributes redirectAttributes){
        redirectAttributes.addFlashAttribute("incorrect",true);
        redirectAttributes.addFlashAttribute("storeName", storeName);
        return "redirect:/cs";
    }

    @PostMapping
    public ResponseEntity doCsRequest(@ModelAttribute CsRequest csRequest, @RequestParam("image") @Nullable MultipartFile multipartFile) throws IOException {
        HttpStatus httpStatus = multipartFile != null ?
                csService.sendCsRequest(csRequest, multipartFile.getBytes()) :
                csService.sendCsRequest(csRequest, null);
        return ResponseEntity.status(httpStatus).build();
    }
}
