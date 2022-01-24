package com.rainbowflavor.gorakulist.thridparty.discord;

import com.rainbowflavor.gorakulist.config.AppProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class DiscordService {
    private final RestTemplate restTemplate;
    private final AppProperties appProperties;

    public HttpStatus sendWebhookMessage(String email, String content, String cstype, String footer, String imgurImageLink){
        log.info("[DiscordService.sendWebhookMessage] email={}, content={}, cstype={}, footer={}, imgurImageLink={}", email, content, cstype, footer, imgurImageLink);
        DiscordWebhookRequest discordWebhookRequest = getDiscordWebhookRequest(email, content, cstype, footer, imgurImageLink);
        RequestEntity<DiscordWebhookRequest> request = RequestEntity
                .method(HttpMethod.POST, appProperties.getDiscord().getUrl())
                .contentType(MediaType.APPLICATION_JSON)
                .body(discordWebhookRequest);
        ResponseEntity<String> exchange = restTemplate.exchange(request, String.class);
        return exchange.getStatusCode();
    }

    private DiscordWebhookRequest getDiscordWebhookRequest(String email, String content, String cstype, String footer, String imgurImageLink) {
        Map<String, String> embed = new HashMap<>();
        embed.put("email", email);
        embed.put("content", content);
        embed.put("cstype", cstype);
        DiscordWebhookRequest discordWebhookRequest = DiscordWebhookRequest.createDiscordWebhookRequest(embed, footer, imgurImageLink);
        return discordWebhookRequest;
    }
}