package com.rainbowflavor.gorakulist.repository;

import com.rainbowflavor.gorakulist.domain.Machine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface MachineRepository extends JpaRepository<Machine, Long> {
    List<Machine> findAllByParentIsNull();
}
