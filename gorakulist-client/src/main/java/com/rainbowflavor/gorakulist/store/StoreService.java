package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import com.rainbowflavor.gorakulist.repository.queryrepository.StoreRepositorySupport;
import com.rainbowflavor.gorakulist.store.dto.MachineDto;
import com.rainbowflavor.gorakulist.store.dto.SearchStoreDto;
import com.rainbowflavor.gorakulist.store.dto.StoreDetailDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotEmpty;
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

    public List<SearchStoreDto> searchStore(@NotEmpty String city1, String city2, Set<Long> machineParents, @NotEmpty String searchCondition){
        return storeRepositorySupport.findWithTargetMachines(city1, city2, machineParents, searchCondition)
                .stream().map(SearchStoreDto::new).collect(Collectors.toList());
    }

    public StoreDetailDto getStoreDetail(Long id) {
        Store store = storeRepository.findAllRelationById(id).orElseThrow(StoreNotFoundException::new);
        return new StoreDetailDto(store);
    }
}
