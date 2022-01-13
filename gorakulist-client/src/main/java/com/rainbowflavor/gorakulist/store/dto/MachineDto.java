package com.rainbowflavor.gorakulist.store.dto;

import com.rainbowflavor.gorakulist.domain.Category;
import com.rainbowflavor.gorakulist.domain.Machine;
import lombok.Data;

@Data
public class MachineDto {
    private Long id;
    private String koName;
    private String shortName;
    private Category category;

    public MachineDto(Machine machine){
        this.id= machine.getId();
        this.koName = machine.getKoName();
        this.shortName = machine.getShortName();
        this.category = machine.getCategory();
    }
}
