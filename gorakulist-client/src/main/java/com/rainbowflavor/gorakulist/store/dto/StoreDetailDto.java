package com.rainbowflavor.gorakulist.store.dto;

import com.rainbowflavor.gorakulist.domain.NetworkType;
import com.rainbowflavor.gorakulist.domain.Store;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoreDetailDto {
    private String name;
    private String address;
    private String uptime;
    private String latitude;
    private String longitude;
    private String contact;
    private String twitter;
    private NetworkType networkType;
    private List<MachineDetailDto> machineDetailDtos = new ArrayList<>();

    public StoreDetailDto(Store store) {
        this.name = store.getName();
        this.address = store.getAddress();
        this.uptime = store.getUptime();
        this.latitude = store.getLatitude();
        this.longitude = store.getLongitude();
        this.contact = store.getContact();
        this.twitter = store.getTwitter();
        this.networkType = store.getNetworkType();
        this.machineDetailDtos = store.getMachines()
                .stream()
                .map(storeMachine ->
                        new MachineDetailDto(storeMachine.getMachine()))
                .collect(Collectors.toList());
    }
}
