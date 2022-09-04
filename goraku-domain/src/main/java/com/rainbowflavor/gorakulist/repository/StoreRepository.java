package com.rainbowflavor.gorakulist.repository;

import com.rainbowflavor.gorakulist.domain.Store;
import com.rainbowflavor.gorakulist.repository.queryrepository.StoreRepositorySupport;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
public interface StoreRepository extends JpaRepository<Store, Long>, StoreRepositorySupport {
    @Query("select s from Store s where s.id=:id")
    @EntityGraph(attributePaths = {"machines","machines.machine"})
    Optional<Store> findAllRelationById(@Param("id") Long id);
}
