package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.rainbowflavor.gorakulist.config.QuerydslConfig;
import com.rainbowflavor.gorakulist.domain.*;
import com.rainbowflavor.gorakulist.repository.MachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreMachineRepository;
import com.rainbowflavor.gorakulist.repository.StoreRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@Import(QuerydslConfig.class)
class StoreRepositorySupportTest {
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    StoreMachineRepository storeMachineRepository;

    @Autowired
    MachineRepository machineRepository;

    @BeforeEach
    void init() {
        initStoreData();
    }

    @Transactional
    void initStoreData() {
        List<Machine> machines = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Machine machine = new Machine(
                    null,
                    "머신" + i,
                    "머" + i,
                    null,
                    Category.ACTION,
                    null,
                    null,
                    new ArrayList<>(),
                    null,
                    null
            );
            machines.add(machine);
        }
        Store store = new Store(
                null,
                "city1",
                "city2",
                "testStore",
                "testAddress",
                null,
                false,
                null,
                null,
                null,
                null,
                null,
                null,
                new NetworkType(true, false, false, true, false),
                new ArrayList<>());

        StoreMachine storeMachine = new StoreMachine(null,machines.get(0),store, 3, null);
        machines.get(0).getStores().add(storeMachine);
        store.getMachines().add(storeMachine);

        machineRepository.saveAll(machines);
        storeRepository.save(store);
        storeMachineRepository.save(storeMachine);
    }

    @Test
    @DisplayName("랜덤 스토어 가져오기 테스트")
    void 랜덤스토어() {
        Optional<Store> random = storeRepository.findRandom();
        assertTrue(random.isPresent());
    }
}