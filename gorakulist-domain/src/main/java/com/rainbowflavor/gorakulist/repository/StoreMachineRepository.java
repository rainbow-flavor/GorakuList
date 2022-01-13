package com.rainbowflavor.gorakulist.repository;

import com.rainbowflavor.gorakulist.domain.StoreMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface StoreMachineRepository extends JpaRepository<StoreMachine, Long> {
}
