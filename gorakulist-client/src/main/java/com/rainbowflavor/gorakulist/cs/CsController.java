package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.webhook.DiscordWebhookRequest;
import com.rainbowflavor.gorakulist.webhook.DiscordWebhookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/cs")
public class CsController {
    private final DiscordWebhookService discordWebhookService;

    @GetMapping
    public String csView(){
        return "content/cs/cs";
    }

    @PostMapping
    public ResponseEntity doCsRequest(@RequestBody DiscordWebhookRequest discordWebhookRequest){
        return discordWebhookService.send(discordWebhookRequest);
    }
}
