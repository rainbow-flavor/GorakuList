package com.gorakulist.gorakulistserver.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gorakulist.gorakulistserver.model.SearchMachine;
import com.gorakulist.gorakulistserver.model.Shop;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
public class TestController {

    @GetMapping("/search")
    public ResponseEntity<Shop> sampleMappingMethod(String city1, String city2, String game) {
        List<SearchMachine> searchMachineList = new ArrayList<>();
        searchMachineList.add(new SearchMachine());

        Shop shop = new Shop(0L, city1, city2, "가게이름", "프랜차이즈명", "바람개비공영주차장", "1000h",
                true, searchMachineList, "phone", "twitter", "site url", "ksnsta");

        log.info("city1={},city2={},game={}", city1, city2, game);
        return new ResponseEntity<>(shop, HttpStatus.OK);
    }
}
