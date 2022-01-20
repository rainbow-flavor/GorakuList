package com.rainbowflavor.gorakulist.repository;

import com.rainbowflavor.gorakulist.domain.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface StoreRepository extends JpaRepository<Store, Long> {
    @Query("select s from Store s join fetch s.machines sm join fetch sm.machine m left join fetch m.parent where s.id=:id order by s.id asc, m.id asc")
    Optional<Store> findAllRelationById(@Param("id") Long id);
}
