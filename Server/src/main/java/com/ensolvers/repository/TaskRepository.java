package com.ensolvers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensolvers.Model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{

}
