package com.rainbowflavor.gorakulist.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String city1;

    @Column(nullable = false)
    private String city2;

    private String name;

    private String address;

    private String uptime;

    @Column(nullable = false)
    private Boolean isop;

    private String latitude;

    private String longitude;

    private String contact;

    private String twitter;

    private String website;

    private String thumbnail;

    @Embedded
    private NetworkType networkType;

    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    private List<StoreMachine> machines = new ArrayList<>();

    public boolean isSetCoordinates() {
        if (latitude != null && longitude != null) {
            return true;
        }
        return false;
    }


    public void updateChangeableData(String city1, String city2, String name, String address, String uptime, Boolean isop, String latitude, String longitude, String contact, String twitter, String website, String thumbnail, Boolean k, Boolean n, Boolean s, Boolean t, Boolean a) {
        this.city1=city1;
        this.city2=city2;
        this.name=name;
        this.address=address;
        this.uptime=uptime;
        this. isop= isop;
        this.latitude=latitude;
        this.longitude=longitude;
        this.contact=contact;
        this.twitter=twitter;
        this.website=website;
        this.thumbnail=thumbnail;

        if (k != null || n != null || s != null || t != null || a != null) {
            this.networkType = new NetworkType(k, n, s, t, a);
        }
    }

    @Override
    public String toString() {
        return "Store{" +
                "id=" + id +
                ", city1='" + city1 + '\'' +
                ", city2='" + city2 + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}