package com.rainbowflavor.gorakulist.repository.queryrepository;

import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.rainbowflavor.gorakulist.domain.QMachine;
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

//    private Long count(){
//        return jpaQueryFactory
//                .select(store)
//                .join(store.machines, storeMachine)
//                .fetchJoin()
//                .join(storeMachine.machine, machine);
//    }

    private BooleanExpression k(){
        return store.networkType.k;
    }
    private BooleanExpression n(){
        return store.networkType.n;
    }
    private BooleanExpression s(){
        return store.networkType.s;
    }
    private BooleanExpression t(){
        return store.networkType.t;
    }
    private BooleanExpression a(){
        return store.networkType.a;
    }

    private BooleanExpression byMachineIdList(QMachine origin, Set<Long> machineTypes, String condition) {
        if(!machineTypes.isEmpty() && condition.equals("or")){
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

    public Store findRandom() {
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
                .orderBy(NumberExpression.random().asc())
                .limit(1)
                .fetchOne();
    }
}
