package com.rainbowflavor.gorakulist.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@AllArgsConstructor @NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class StoreMachine {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Machine machine;

    @ManyToOne(fetch = FetchType.LAZY)
    private Store store;

    private Integer machineCount;

    private String description;

    @Override
    public String toString() {
        return "StoreMachine{" +
                "id=" + id +
                ", machineCount=" + machineCount +
                '}';
    }
}
