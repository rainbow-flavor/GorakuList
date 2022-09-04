package com.rainbowflavor.gorakulist.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@AllArgsConstructor @NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Machine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String koName;

    private String shortName;

    private String enName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    private String company;

    private String description;

    @OneToMany(mappedBy = "machine", fetch = FetchType.LAZY)
    private List<StoreMachine> stores = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    private Machine parent;

    @OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
    private Set<Machine> childMachine = new HashSet<>();

    @Override
    public String toString() {
        return "Machine{" +
                "id=" + id +
                ", koName='" + koName + '\'' +
                ", shortName='" + shortName + '\'' +
                ", category=" + category +
                '}';
    }
}