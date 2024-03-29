package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.common.PagingResponse;
import com.rainbowflavor.gorakulist.common.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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
    public ResponseEntity<PagingResponse<List<StoreDto>>> search(@ModelAttribute StoreSearchCondition condition){
        Page<StoreDto> storeDtos = storeService.searchStore(condition);
        return ResponseEntity.ok(PagingResponse.success(storeDtos));
    }

    @GetMapping("/integration-search")
    public ResponseEntity<PagingResponse<List<StoreDto>>> integrationSearch(@ModelAttribute StoreSearchCondition condition){
        Page<StoreDto> storeDtos = storeService.integrationSearchStore(condition);
        return ResponseEntity.ok(PagingResponse.success(storeDtos));
    }

    @GetMapping("/random")
    public ResponseEntity<Response<StoreDto>> getRandom() {
        StoreDto storeRandom = storeService.getStoreRandom();
        return ResponseEntity.ok(Response.success(storeRandom));
    }

    @GetMapping("/detail")
    public ResponseEntity<Response<StoreDto>> detail(@RequestParam Long storeId){
        StoreDto storeDetail = storeService.getStoreDetail(storeId);
        return ResponseEntity.ok(Response.success(storeDetail));
    }
}
