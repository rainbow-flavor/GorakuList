package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.rainbowflavor.gorakulist.domain.Store;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Transactional(readOnly = true)
public interface StoreRepositorySupport {
    List<Store> findWithAllMachines(String city1, String city2, Set<Long> machineTypes, String condition);
    List<Store> findWithTargetMachines(String city1, String city2, Set<Long> machineTypes, String condition);
}
