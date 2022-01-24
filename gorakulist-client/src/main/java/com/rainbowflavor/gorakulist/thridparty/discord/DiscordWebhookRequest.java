package com.rainbowflavor.gorakulist.thridparty.discord;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.*;

@Data
public class DiscordWebhookRequest {
    private String username = "CS Webhook";
    private List<Embeds> embeds = new ArrayList<>();

    @Data
    public static class Embeds {
        private final String title = "New CS Posted!";
        private final int color = 9633791;
        private List<Field> fields = new ArrayList<>();
        private final Footer footer;
        private final Image image;

        public Embeds(List<Field> fields, Footer footer, Image image) {
            this.fields = fields;
            this.footer = footer;
            this.image = image;
        }
    }

    @Data
    @RequiredArgsConstructor
    public static class Image{
        private final String url;
    }

    @Data
    public static class Field {
        private final String name;
        private final String value;

        public static List<Field> createNewFields(Map<String, String> map){
            List<Field> fields = new ArrayList<>();
            map.forEach((key, value) -> fields.add(new Field(key, value)));
            return fields;
        }
    }

    @Data
    @RequiredArgsConstructor
    public static class Footer {
        private final String text;
    }

    public DiscordWebhookRequest(List<Embeds> embeds) {
        this.embeds = embeds;
    }

    public static DiscordWebhookRequest createDiscordWebhookRequest(Map<String, String> fieldContent, String footer, String imgurImageLink){
        List<Field> fields = Field.createNewFields(fieldContent);
        Footer newFooter = new Footer(footer);
        Image image = new Image(imgurImageLink);
        Embeds embeds = new Embeds(fields, newFooter, image);
        return new DiscordWebhookRequest(Arrays.asList(embeds));
    }
}

