package com.gorakulist.gorakulistserver.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
public class SearchMachine {

    @NotBlank
    private String city1;
    @NotBlank
    private String city2;
    @NotEmpty
    private String game;
}
