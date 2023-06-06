package com.rainbowflavor.gorakulist.machine;

import com.rainbowflavor.gorakulist.domain.Machine;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
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

//    @Cacheable(value = "machineStrList",unless="#result == null or #result.size() == 0")
    public List<String> searchMachineByName(String machineName, Integer limit) {
        return machineRepository.findAllByMachineName(machineName).stream()
                .map(Machine::getKoName)
                .limit(limit)
                .collect(Collectors.toList());
    }
}
