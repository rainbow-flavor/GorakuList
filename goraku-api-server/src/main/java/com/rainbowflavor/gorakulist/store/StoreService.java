package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Comparator;

@Service
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;

    public Page<StoreDto> searchStore(StoreSearchCondition storeSearchCondition){
        Page<StoreDto> result = storeRepository.findByAddressOrCard(
                        PageRequest.of(storeSearchCondition.getPage(), storeSearchCondition.getLimit()),
                        storeSearchCondition.getMachineName(),
                        storeSearchCondition.getCity1(), storeSearchCondition.getCity2(),
                        storeSearchCondition.getCardK(), storeSearchCondition.getCardN(), storeSearchCondition.getCardS(), storeSearchCondition.getCardT(), storeSearchCondition.getCardA(),
                        storeSearchCondition.getIsOp(), storeSearchCondition.getLatitude(), storeSearchCondition.getLongitude())
                .map(s -> new StoreDto(s, false));
        return result;
    }

    public StoreDto getStoreDetail(Long id) {
        Store store = storeRepository.findAllRelationById(id)
                .orElseThrow(StoreNotFoundException::new);
        sortStoreMachine(store);
        return new StoreDto(store, true);
    }

    public StoreDto getStoreRandom() {
        Store store = storeRepository.findRandom()
                .orElseThrow(StoreNotFoundException::new);
        sortStoreMachine(store);
        return new StoreDto(store, true);
    }

    private void sortStoreMachine(Store store) {
        store.getMachines().sort(Comparator.comparing(sm -> sm.getMachine().getCategory()));
    }
}
