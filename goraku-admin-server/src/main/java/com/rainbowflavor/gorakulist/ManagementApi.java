package com.rainbowflavor.gorakulist;

import com.rainbowflavor.gorakulist.domain.Machine;
import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/admin/management")
public class ManagementApi {
    private final StoreRepository storeRepository;
    private final MachineRepository machineRepository;
    private final ModelMapper modelMapper;

    @Transactional
    @PostMapping("/store")
    public StoreDto updateStoreInfo(@RequestBody StoreDto storeDto) {
        Store store = storeRepository.findById(storeDto.getId()).orElseThrow();
        store.updateChangeableData(
                storeDto.getCity1(),
                storeDto.getCity2(),
                storeDto.getName(),
                storeDto.getAddress(),
                storeDto.getUptime(),
                storeDto.getIsop(),
                storeDto.getLatitude(),
                storeDto.getLongitude(),
                storeDto.getContact(),
                storeDto.getTwitter(),
                storeDto.getWebsite(),
                storeDto.getThumbnail(),
                storeDto.getNetworkTypeK(),
                storeDto.getNetworkTypeN(),
                storeDto.getNetworkTypeS(),
                storeDto.getNetworkTypeT(),
                storeDto.getNetworkTypeA()
        );
        return modelMapper.map(store, StoreDto.class);
    }

    @Transactional
    @PostMapping("/machine")
    public MachineDto updateMachineInfo(@RequestBody MachineDto machineDto) {
        Machine machine = machineRepository.findById(machineDto.getId()).orElseThrow();
        machine.updateChangeableData(machineDto.getCategory(), machineDto.getCompany(), machineDto.getDescription(), machineDto.getEnName(), machineDto.getKoName(), machineDto.getShortName());
        return modelMapper.map(machine, MachineDto.class);
    }
}
