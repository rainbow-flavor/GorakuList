package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.NetworkType;
import com.rainbowflavor.gorakulist.domain.Store;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoreDto {
    private Long id;

    private String city1;

    private String city2;

    private String name;

    private String address;

    private String uptime;

    private Boolean isop;

    private String latitude;

    private String longitude;

    private String contact;

    private String twitter;

    private String website;

    private NetworkType networkType;

    private List<StoreMachineDto> storeMachines = new ArrayList<>();

    public StoreDto(Store store, boolean withStoreMachine) {
        this.id = store.getId();
        this.city1 = store.getCity1();
        this.city2 = store.getCity2();
        this.name = store.getName();
        this.address = store.getAddress();
        this.uptime = store.getUptime();
        this.isop = store.getIsop();
        this.latitude = store.getLatitude();
        this.longitude = store.getLongitude();
        this.contact = store.getContact();
        this.twitter = store.getTwitter();
        this.website = store.getWebsite();
        this.networkType = store.getNetworkType();
        if (withStoreMachine) {
            this.storeMachines = store.getMachines().stream()
                    .map(StoreMachineDto::new)
                    .collect(Collectors.toList());
        }
    }
}
