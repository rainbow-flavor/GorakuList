package com.rainbowflavor.gorakulist.webhook;

import com.rainbowflavor.gorakulist.config.AppProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Slf4j
@RequiredArgsConstructor
@Service
public class DiscordWebhookService {
    private final RestTemplate restTemplate;
    private final AppProperties appProperties;

    public ResponseEntity<Object> send(DiscordWebhookRequest discordWebhookRequest) {
        log.info("[DiscordWebhookService] {}", discordWebhookRequest);
        RequestEntity<DiscordWebhookRequest> request = RequestEntity
                .method(HttpMethod.POST, appProperties.getDiscord().getUrl())
                .contentType(MediaType.APPLICATION_JSON)
                .body(discordWebhookRequest);
        return restTemplate.exchange(request, Object.class);
    }
}