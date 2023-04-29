package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.StoreMachine;
import com.rainbowflavor.gorakulist.machine.MachineDto;
import lombok.Data;

@Data
public class StoreMachineDto {
    private Long id;
    private Integer machineCount;
    private String description;
    private MachineDto machine;

    public StoreMachineDto(StoreMachine storeMachine) {
        this.id = storeMachine.getId();
        this.machineCount = storeMachine.getMachineCount();
        this.description = storeMachine.getDescription();
        this.machine = new MachineDto(storeMachine.getMachine());
    }
}
