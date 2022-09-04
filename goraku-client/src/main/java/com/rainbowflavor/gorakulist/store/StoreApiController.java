package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.store.dto.StoreDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/store")
public class StoreApiController {
    private final StoreService storeService;

    @GetMapping
    public ResponseEntity<List<StoreDto>> search(@RequestParam(required = false, defaultValue = "") String city1,
                                                @RequestParam(required = false, defaultValue = "") String city2,
                                                @RequestParam(required = false, defaultValue = "") Set<Long> gameCheckBox,
                                                @RequestParam(defaultValue = "or") String condition){
        List<StoreDto> storeDtos = storeService.searchStore(city1, city2, gameCheckBox, condition);
        return ResponseEntity.ok(storeDtos);
    }

    @GetMapping("/random")
    public ResponseEntity<StoreDto> getRandom() {
        StoreDto storeRandom = storeService.getStoreRandom();
        return ResponseEntity.ok(storeRandom);
    }

    @GetMapping("/detail")
    public ResponseEntity<StoreDto> detail(@RequestParam Long storeId){
        StoreDto storeDetail = storeService.getStoreDetail(storeId);
        return ResponseEntity.ok(storeDetail);
    }
}
