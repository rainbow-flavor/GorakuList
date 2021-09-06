package com.gorakulist.gorakulistserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class Shop {
    private Long id;
    private String city1;
    private String city2;
    private String name;
    private String branch;
    private String address;
    private String uptime;
    private Boolean isop;
    private List<SearchMachine> machine;
    private String contact;
    private String twitter;
    private String website;
    private String knsta;
}
