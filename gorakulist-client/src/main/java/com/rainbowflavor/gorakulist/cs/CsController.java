package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.cs.message.request.CsRequest;
import com.rainbowflavor.gorakulist.webhook.DiscordWebhookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/cs")
public class CsController {
    private final DiscordWebhookService discordWebhookService;
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
    public ResponseEntity doCsRequest(@ModelAttribute CsRequest csRequest, @RequestParam String image) throws IOException {
        ResponseEntity<String> stringResponseEntity = csService.sendRequestToImgur(image);
        log.info("response = {}", stringResponseEntity);
        return ResponseEntity.ok().build();
    }
}
