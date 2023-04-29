package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.cs.message.request.CsRequest;
import com.rainbowflavor.gorakulist.thridparty.imgur.ImgurImagePostResponse;
import com.rainbowflavor.gorakulist.thridparty.discord.DiscordService;
import com.rainbowflavor.gorakulist.thridparty.imgur.ImgurService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;


@Slf4j
@RequiredArgsConstructor
@Service
public class CsService {
    private final ImgurService imgurService;
    private final DiscordService discordService;

    public HttpStatus sendCsRequest(CsRequest csRequest, byte[] image){
        String imgurImageLink = null;
        if(image != null){
            ImgurImagePostResponse imgurImageResponse =
                    imgurService.sendImagePostRequest(image).getBody();
            imgurImageLink = imgurImageResponse.getData().getLink();
        }

        HttpStatus httpStatus = discordService.sendWebhookMessage(
                csRequest.getEmail(),
                csRequest.getContent(),
                csRequest.getCstype(),
                csRequest.getFooter(),
                imgurImageLink);

        if(httpStatus.is2xxSuccessful()){
            return HttpStatus.OK;
        }

        return httpStatus;
    }
}
