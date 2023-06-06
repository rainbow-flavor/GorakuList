package com.rainbowflavor.gorakulist;

import lombok.Data;

@Data
public class StoreDto {
    private Long id;
    private String address;
    private String city1;
    private String city2;
    private String contact;
    private Boolean isop;
    private String latitude;
    private String longitude;
    private String name;
    private String twitter;
    private String uptime;
    private String website;
    private Boolean networkTypeK;
    private Boolean networkTypeN;
    private Boolean networkTypeS;
    private Boolean networkTypeT;
    private Boolean networkTypeA;
    private String thumbnail;
}
