package com.rainbowflavor.gorakulist.store.dto;

import com.rainbowflavor.gorakulist.domain.NetworkType;
import com.rainbowflavor.gorakulist.domain.Store;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
public class SearchStoreDto {
    private Long id;

    private String city1;

    private String city2;

    private String name;

    private String address;

    private String uptime;

    private Boolean isop;

    private String contact;

    private String twitter;

    private String website;

    private NetworkType networkType;

    private List<MachineInfo> machines = new ArrayList<>();

    public SearchStoreDto(Store store) {
        this.id = store.getId();
        this.city1 = store.getCity1();
        this.city2 = store.getCity2();
        this.name = store.getName();
        this.address = store.getAddress();
        this.uptime = store.getUptime();
        this.isop = store.getIsop();
        this.contact = store.getContact();
        this.twitter = store.getTwitter();
        this.website = store.getWebsite();
        this.networkType=store.getNetworkType();
        store.getMachines().forEach(t-> this.machines.add(new MachineInfo(
                t.getMachineCount(),
                t.getMachine().getKoName(),
                t.getMachine().getShortName(),
                t.getMachine().getDescription(),
                t.getMachine().getId(),
                t.getMachine().getParent().getId()
        )));
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    private static class MachineInfo{
        private Integer count;

        private String machineName;

        private String shortName;

        private String description;

        private Long id;

        private Long parentId;
    }
}
