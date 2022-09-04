package com.rainbowflavor.gorakulist.main;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthCheckApiController {
    @GetMapping
    public ResponseEntity<?> getHealth() {
        return ResponseEntity.ok().build();
    }
}
