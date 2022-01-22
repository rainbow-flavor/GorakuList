package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.config.AppProperties;
import com.rainbowflavor.gorakulist.webhook.DiscordWebhookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Slf4j
@RequiredArgsConstructor
@Service
public class CsService {
    private final AppProperties appProperties;
    private final RestTemplate restTemplate;
    private final DiscordWebhookService discordWebhookService;

    public ResponseEntity<String> sendRequestToImgur(String image) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", appProperties.getImgur().getKey());
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body= new LinkedMultiValueMap<>();
        body.add("image", image);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

        ResponseEntity<String> stringResponseEntity = restTemplate.postForEntity("https://api.imgur.com/3/upload", request, String.class);
        log.info("test={}",stringResponseEntity);
        return stringResponseEntity;
    }
}
