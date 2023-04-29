package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.common.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/store")
public class StoreApiController {
    private final StoreService storeService;

    @GetMapping("/search")
    public ResponseEntity<Response<List<StoreDto>>> search(@ModelAttribute StoreSearchCondition condition){
        List<StoreDto> storeDtos = storeService.searchStore(condition);
        return ResponseEntity.ok(new Response<>(storeDtos));
    }

    @GetMapping("/random")
    public ResponseEntity<Response<StoreDto>> getRandom() {
        StoreDto storeRandom = storeService.getStoreRandom();
        return ResponseEntity.ok(new Response<>(storeRandom));
    }

    @GetMapping("/detail")
    public ResponseEntity<Response<StoreDto>> detail(@RequestParam Long storeId){
        StoreDto storeDetail = storeService.getStoreDetail(storeId);
        return ResponseEntity.ok(new Response<>(storeDetail));
    }
}
