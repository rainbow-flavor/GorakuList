package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.rainbowflavor.gorakulist.domain.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Set;

import static com.querydsl.jpa.JPAExpressions.select;
import static com.rainbowflavor.gorakulist.domain.QMachine.machine;
import static com.rainbowflavor.gorakulist.domain.QStore.store;
import static com.rainbowflavor.gorakulist.domain.QStoreMachine.storeMachine;

@RequiredArgsConstructor
@Repository
public class StoreRepositorySupportImpl implements StoreRepositorySupport {
    private final JPAQueryFactory jpaQueryFactory;

    public List<Store> findWithTargetMachines(String city1, String city2, Set<Long> machineTypes, String condition) {
        return jpaQueryFactory
                .selectFrom(store)
                .join(store.machines, storeMachine)
                .fetchJoin()
                .join(storeMachine.machine, machine)
                .fetchJoin()
                .leftJoin(machine.parent, machine)
                .fetchJoin()
                .where(
                        byCity1(city1),
                        byCity2(city2),
                        byMachineIdList(machineTypes, condition),
                        byAndMachineType(machineTypes, condition))
                .orderBy(store.id.asc(), machine.id.asc())
                .distinct()
                .fetch();
    }


    public List<Store> findWithAllMachines(String city1, String city2, Set<Long> machineTypes, String condition) {
        return jpaQueryFactory
                .selectFrom(store)
                .join(store.machines, storeMachine)
                .fetchJoin()
                .join(storeMachine.machine, machine)
                .fetchJoin()
                .where(
                        byCity1(city1),
                        byCity2(city2),
                        byOrMachineType(machineTypes, condition),
                        byAndMachineType(machineTypes, condition))
                .distinct()
                .fetch();
    }

    private BooleanExpression byMachineIdList(Set<Long> machineTypes, String condition) {
        if(!machineTypes.isEmpty() && condition.equals("or")){
            return machine.parent.id.in(machineTypes);
        }
        return null;
    }

    private BooleanExpression byCity1(String city1) {
        return StringUtils.hasText(city1) ? store.city1.eq(city1) : null;
    }

    private BooleanExpression byCity2(String city2) {
        return StringUtils.hasText(city2) ? store.city2.eq(city2) : null;
    }

    private BooleanExpression byOrMachineType(Set<Long> machineTypes, String condition) {
        if (!machineTypes.isEmpty() && condition.equals("or")) {
            return store.id.eqAny(
                    select(store.id)
                            .from(store)
                            .join(store.machines, storeMachine)
                            .join(storeMachine.machine, machine)
                            .where(machine.parent.id.in(machineTypes)));
        } else {
            return null;
        }
    }

    private BooleanExpression byAndMachineType(Set<Long> machineTypes, String condition) {
        if (!machineTypes.isEmpty() && condition.equals("and")) {
            return store.id.in(
                    select(store.id)
                            .from(store)
                            .join(store.machines, storeMachine)
                            .join(storeMachine.machine, machine)
                            .where(machine.parent.id.in(machineTypes))
                            .groupBy(store.id)
                            .having(machine.id.countDistinct().eq((long) machineTypes.size())));
        } else {
            return null;
        }
    }
}
