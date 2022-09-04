package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.rainbowflavor.gorakulist.domain.Store;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface StoreRepositorySupport {
    List<Store> findWithTargetMachines(String city1, String city2, Set<Long> machineTypes, String condition);
    Optional<Store> findRandom();
}
