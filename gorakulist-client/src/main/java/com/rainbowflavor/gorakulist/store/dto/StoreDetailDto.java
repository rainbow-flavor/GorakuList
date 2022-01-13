package com.rainbowflavor.gorakulist.store.dto;

import com.rainbowflavor.gorakulist.domain.NetworkType;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class StoreDetailDto {
    private String name;
    private String address;
    private String uptime;
    private String latitude;
    private String longitude;
    private String contact;
    private NetworkType networkType;
    private List<MachineDetailDto> machineDetailDtos = new ArrayList<>();
}
