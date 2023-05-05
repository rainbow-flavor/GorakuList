package com.rainbowflavor.gorakulist.store;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class StoreSearchCondition {
    private String city1;
    private String city2;
    private Boolean cardK;
    private Boolean cardN;
    private Boolean cardS;
    private Boolean cardT;
    private Boolean cardA;
    private Boolean isOp = true;
    private Integer limit = 30;
}
