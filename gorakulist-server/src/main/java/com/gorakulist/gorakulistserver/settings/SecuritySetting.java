package com.gorakulist.gorakulistserver.settings;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecuritySetting implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:8080",
                        "http://gorakulist.herokuapp.com",
                        "http://www.gorakulist.kro.kr",

                        "https://localhost:8080",
                        "https://gorakulist.herokuapp.com",
                        "https://www.gorakulist.kro.kr");
    }
}
