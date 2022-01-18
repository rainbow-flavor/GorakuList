package com.rainbowflavor.gorakulist.store.dto;

import com.rainbowflavor.gorakulist.domain.Machine;
import lombok.Data;

@Data
public class MachineDetailDto {
    private Long machineId;
    private String name;

    public MachineDetailDto(Machine machine) {
        this.machineId = machineId;
        this.name = machine.getKoName();
    }
}
