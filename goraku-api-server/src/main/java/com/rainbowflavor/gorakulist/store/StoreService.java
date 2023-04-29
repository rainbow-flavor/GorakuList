package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StoreService {

    private final StoreRepository storeRepository;

    public List<StoreDto> searchStore(StoreSearchCondition storeSearchCondition){
        List<Store> stores = storeRepository.findWithTargetMachines(
                storeSearchCondition.getCity1(),
                storeSearchCondition.getCity2(),
                storeSearchCondition.getGameCheckBox(),
                storeSearchCondition.getCondition());
        stores.forEach(this::sortStoreMachine);
        return stores.stream()
                .map(StoreDto::new).collect(Collectors.toList());
    }

    public StoreDto getStoreDetail(Long id) {
        Store store = storeRepository.findAllRelationById(id)
                .orElseThrow(StoreNotFoundException::new);
        sortStoreMachine(store);
        return new StoreDto(store);
    }

    public StoreDto getStoreRandom() {
        Store store = storeRepository.findRandom()
                .orElseThrow(StoreNotFoundException::new);
        sortStoreMachine(store);
        return new StoreDto(store);
    }

    private void sortStoreMachine(Store store) {
        store.getMachines().sort(Comparator.comparing(sm -> sm.getMachine().getCategory()));
    }
}
