package com.rainbowflavor.gorakulist.webhook;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DiscordWebhookRequest {
    private String username = "CS Webhook";
    private List<Embeds> embeds;

    @Data
    static class Embeds {
        private String title = "New CS Posted!";
        private int color = 9633791;
        private List<Fields> fields = new ArrayList<>();
        private Footer footer;
    }

    @Data
    static class Fields {
        private String name;
        private String value;
    }

    @Data
    static class Footer {
        private String text;
    }
}

