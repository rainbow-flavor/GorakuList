package com.rainbowflavor.gorakulist.thridparty.imgur;

import com.rainbowflavor.gorakulist.config.AppProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@Slf4j
@RequiredArgsConstructor
@Service
public class ImgurService {
    private final RestTemplate restTemplate;
    private final AppProperties appProperties;
    public ResponseEntity<ImgurImagePostResponse> sendImagePostRequest(byte[] image){
        log.info("[ImgurService.sendImagePostRequest] has image={}", image != null);
        RequestEntity<String> request = createImagePostRequest(imageToBase64(image));
        return restTemplate.exchange(request, ImgurImagePostResponse.class);
    }
    public RequestEntity<String> createImagePostRequest(String base64Image) {
        return RequestEntity
                .post(appProperties.getImgur().getUrl())
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .header("Authorization", appProperties.getImgur().getAccessToken())
                .accept(MediaType.APPLICATION_JSON)
                .body(base64Image, String.class);
    }

    private String imageToBase64(byte[] image) {
        String base64Image = Base64.getEncoder().encodeToString(image);
        return base64Image;
    }
}
