package com.rainbowflavor.gorakulist.machine;

import com.rainbowflavor.gorakulist.domain.Category;
import com.rainbowflavor.gorakulist.domain.Machine;
import lombok.Data;

@Data
public class MachineDto {
    private Long id;
    private String koName;
    private String enName;
    private String shortName;
    private Category category;
    private String company;
    private String description;
    private MachineDto parent;

    public MachineDto(Machine machine) {
        this.id = machine.getId();
        this.koName = machine.getKoName();
        this.enName = machine.getEnName();
        this.shortName = machine.getShortName();
        this.category = machine.getCategory();
        this.company = machine.getCompany();
        this.description = machine.getDescription();
        if (machine.getParent() != null) {
            this.parent = new MachineDto(machine.getParent());
        }
    }
}
