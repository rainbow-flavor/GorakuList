package com.rainbowflavor.gorakulist;

import com.rainbowflavor.gorakulist.domain.Machine;
import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Controller
@RequestMapping("/v1/admin/management")
public class ManagementController {
    private final MachineRepository machineRepository;
    private final StoreRepository storeRepository;

    @GetMapping("/store")
    public String getStoreManagementView(Model model) {
        List<Store> stores = storeRepository.findAll().stream()
                .sorted(Comparator.comparing(Store::getId))
                .collect(Collectors.toList());
        model.addAttribute("stores", stores);
        return "store-management";
    }

    @GetMapping("/machine")
    public String getMachineManagementView(Model model) {
        List<Machine> machines = machineRepository.findAll().stream()
                .sorted(Comparator.comparing(Machine::getId))
                .collect(Collectors.toList());
        model.addAttribute("machines", machines);
        return "machine-management";
    }
}
