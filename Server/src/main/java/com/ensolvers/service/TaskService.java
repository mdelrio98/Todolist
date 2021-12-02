package com.ensolvers.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensolvers.Model.Task;
import com.ensolvers.repository.TaskRepository;

import java.util.List;
import java.util.Optional;


@Service
public class TaskService {

	@Autowired
	private TaskRepository Taskrepository;
	
	public void guardar(Task task) {
		Taskrepository.save(task);
	}
	public List<Task> obtenerTodos() {
		return Taskrepository.findAll();
	}
	/*
	public Optional<Task> obtenerTask(Long id) {
		return Taskrepository.findById(id).get();
	}*/
	
	public void actualizar(Task task) {
		Taskrepository.save(task);
	}
	public void eliminar(Long id) {
		Taskrepository.deleteById(id);
	}
	
}
