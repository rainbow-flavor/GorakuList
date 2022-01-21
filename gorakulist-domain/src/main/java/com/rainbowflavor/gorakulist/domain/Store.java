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

    @Embedded
    private NetworkType networkType;

    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    private List<StoreMachine> machines = new ArrayList<>();

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