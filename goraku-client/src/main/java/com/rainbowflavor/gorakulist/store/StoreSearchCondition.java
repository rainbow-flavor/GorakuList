package com.rainbowflavor.gorakulist.store;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class StoreSearchCondition {
    private String city1;
    private String city2;
    private Set<Long> gameCheckBox = new HashSet<>();
    private String condition = "or";
}
