package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.rainbowflavor.gorakulist.domain.NetworkType;
import com.rainbowflavor.gorakulist.domain.QMachine;
import com.rainbowflavor.gorakulist.domain.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.querydsl.jpa.JPAExpressions.select;
import static com.rainbowflavor.gorakulist.domain.QMachine.machine;
import static com.rainbowflavor.gorakulist.domain.QStore.store;
import static com.rainbowflavor.gorakulist.domain.QStoreMachine.storeMachine;

@RequiredArgsConstructor
public class StoreRepositorySupportImpl implements StoreRepositorySupport {
    private final JPAQueryFactory jpaQueryFactory;

    public List<Store> findWithTargetMachines(String city1, String city2, Set<Long> machineTypes, String condition) {
        QMachine parent = new QMachine("parent");
        QMachine origin = new QMachine("origin");
        return jpaQueryFactory
                .selectFrom(store)
                .join(store.machines, storeMachine)
                .fetchJoin()
                .join(storeMachine.machine, origin)
                .fetchJoin()
                .leftJoin(origin.parent, parent)
                .fetchJoin()
                .where(
                        byCity1(city1),
                        byCity2(city2),
                        byMachineIdList(origin, machineTypes, condition),
                        byAndMachineType(machineTypes, condition))
                .distinct()
                .orderBy(store.id.asc())
                .fetch();
    }

    public List<Store> findByAddressOrCard(String machineName,
                                           String city1, String city2,
                                           Boolean cardK, Boolean cardN, Boolean cardS, Boolean cardT, Boolean cardA) {
        return jpaQueryFactory.selectFrom(store)
                .join(store.machines, storeMachine)
                .join(storeMachine.machine, machine)
                .where(
                        byMachineName(machineName),
                        byCity1(city1), byCity2(city2),
                        byCard(cardK, cardN, cardS, cardT, cardA))
                .fetch();
    }

    private Predicate byMachineName(String machineName) {
        if (!StringUtils.hasText(machineName)) {
            return null;
        }

        return new BooleanBuilder()
                .or(machine.enName.like(machineName))
                .or(machine.koName.like(machineName))
                .or(machine.shortName.like(machineName));
    }

    private Predicate byCard(Boolean cardK, Boolean cardN, Boolean cardS, Boolean cardT, Boolean cardA) {
        BooleanBuilder bb = new BooleanBuilder();
        if (cardK != null) {
            bb.or(store.networkType.k.eq(cardK)).or(store.networkType.k.isNull());
        }
        if (cardN != null) {
            bb.or(store.networkType.n.eq(cardN)).or(store.networkType.n.isNull());
        }
        if (cardS != null) {
            bb.or(store.networkType.s.eq(cardS)).or(store.networkType.s.isNull());
        }
        if (cardT != null) {
            bb.or(store.networkType.t.eq(cardT)).or(store.networkType.t.isNull());
        }
        if (cardA != null) {
            bb.or(store.networkType.a.eq(cardA)).or(store.networkType.a.isNull());
        }
        return bb;
    }

    private BooleanExpression byMachineIdList(QMachine origin, Set<Long> machineTypes, String condition) {
        if (!machineTypes.isEmpty() && condition.equals("or")) {
            return origin.parent.id.in(machineTypes);
        }
        return null;
    }

    private BooleanExpression byCity1(String city1) {
        return StringUtils.hasText(city1) ? store.city1.eq(city1) : null;
    }

    private BooleanExpression byCity2(String city2) {
        return StringUtils.hasText(city2) ? store.city2.eq(city2) : null;
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

    public Optional<Store> findRandom() {
        QMachine parent = new QMachine("parent");
        QMachine origin = new QMachine("origin");
        Store result = jpaQueryFactory
                .selectFrom(store)
                .join(store.machines, storeMachine)
                .fetchJoin()
                .join(storeMachine.machine, origin)
                .fetchJoin()
                .leftJoin(origin.parent, parent)
                .fetchJoin()
                .orderBy(NumberExpression.random().asc())
                .limit(1)
                .fetchOne();
        return Optional.ofNullable(result);
    }
}
