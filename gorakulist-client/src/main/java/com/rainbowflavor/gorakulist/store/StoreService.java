package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import com.rainbowflavor.gorakulist.repository.queryrepository.StoreRepositorySupport;
import com.rainbowflavor.gorakulist.store.dto.MachineDto;
import com.rainbowflavor.gorakulist.store.dto.StoreDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotEmpty;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StoreService {
    private final MachineRepository machineRepository;
    private final StoreRepositorySupport storeRepositorySupport;
    private final StoreRepository storeRepository;

    public List<MachineDto> getMachineParent(){
        return machineRepository.findAllByParentIsNull()
                .stream().map(MachineDto::new).collect(Collectors.toList());
    }

    public List<StoreDto> searchStore(@NotEmpty String city1, String city2, Set<Long> machineParents, @NotEmpty String searchCondition){
        List<Store> stores = storeRepositorySupport.findWithTargetMachines(city1, city2, machineParents, searchCondition);
        stores.forEach(store->sortStoreMachine(store));
        return stores.stream().map(StoreDto::new).collect(Collectors.toList());
    }

    public StoreDto getStoreDetail(Long id) {
        Store store = storeRepository.findAllRelationById(id).orElseThrow(StoreNotFoundException::new);
        sortStoreMachine(store);
        return new StoreDto(store);
    }

    public StoreDto getStoreRandom() {
        Store store = storeRepositorySupport.findRandom();
        sortStoreMachine(store);
        return new StoreDto(store);
    }

    private void sortStoreMachine(Store store) {
        store.getMachines().sort(Comparator.comparing(sm -> sm.getMachine().getCategory()));
    }
}
