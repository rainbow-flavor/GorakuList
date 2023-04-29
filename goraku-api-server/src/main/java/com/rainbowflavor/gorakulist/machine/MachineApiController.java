package com.rainbowflavor.gorakulist.machine;

import com.rainbowflavor.gorakulist.common.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/machine")
public class MachineApiController {
    private final MachineService machineService;

    @GetMapping("/category")
    public ResponseEntity<Response<List<MachineDto>>> getGameType() {
        List<MachineDto> result = machineService.getMachineParent().stream()
                .sorted(Comparator.comparing(MachineDto::getShortName))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success(result));
    }

    @GetMapping("/search")
    public ResponseEntity<Response<List<String>>> searchMachine(@RequestParam(defaultValue = "") String machineName,
                                                                @RequestParam(required = false, defaultValue = "10") Integer limit) {
        List<String> result = machineService.searchMachineByName(machineName, limit);
        return ResponseEntity.ok(new Response<>(result));
    }
}
