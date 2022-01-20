package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.webhook.DiscordWebhookRequest;
import com.rainbowflavor.gorakulist.webhook.DiscordWebhookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequiredArgsConstructor
@RequestMapping("/cs")
public class CsController {
    private final DiscordWebhookService discordWebhookService;

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
    public ResponseEntity doCsRequest(@RequestBody DiscordWebhookRequest discordWebhookRequest){
        return discordWebhookService.send(discordWebhookRequest);
    }
}
