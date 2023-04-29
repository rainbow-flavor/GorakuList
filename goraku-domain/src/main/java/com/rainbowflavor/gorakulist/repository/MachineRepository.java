package com.rainbowflavor.gorakulist.repository;

import com.rainbowflavor.gorakulist.domain.Machine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface MachineRepository extends JpaRepository<Machine, Long> {
    List<Machine> findAllByParentIsNull();

    @Query("select m " +
            "from Machine m " +
            "where m.parent is not null and (" +
            "m.enName like %:machineName% or " +
            "m.koName like %:machineName% or " +
            "m.shortName like %:machineName%)")
    List<Machine> findAllByMachineName(String machineName);
}
