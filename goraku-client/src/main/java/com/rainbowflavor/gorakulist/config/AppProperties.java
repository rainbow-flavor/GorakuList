package com.rainbowflavor.gorakulist.config;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter @Setter
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private Discord discord;
    private Imgur imgur;

    @Data
    public static class Discord {
        String url;
    }

    @Data
    public static class Imgur {
        String url;
        String clientId;
        String accessToken;
        String refreshToken;
        String accountId;
    }
}
