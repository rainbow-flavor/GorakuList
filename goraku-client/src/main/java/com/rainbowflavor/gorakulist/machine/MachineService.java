package com.rainbowflavor.gorakulist.machine;

import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.store.dto.MachineDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MachineService {
    private final MachineRepository machineRepository;

    public List<MachineDto> getMachineParent(){
        return machineRepository.findAllByParentIsNull().stream()
                .map(MachineDto::new)
                .collect(Collectors.toList());
    }
}
