package com.ensolvers.controllers;

import java.util.List;
import java.net.URI;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ensolvers.Model.Task;
import com.ensolvers.service.TaskService;

import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class TaskController {
	
	@Autowired
	private TaskService  taskservice;
	
	private final AtomicLong counter = new AtomicLong();
	
	@GetMapping(path = "tasks")
	public ResponseEntity<List<Task>> getAllTasks(){
		List<Task> ltasks = new ArrayList<>();
		Task t1 = new Task(counter.incrementAndGet(),"Tarea"+counter,"Esta es la tarea "+counter);
		Task t2 = new Task(counter.incrementAndGet(),"Tarea"+counter,"Esta es la tarea "+counter);
		Task t3 = new Task(counter.incrementAndGet(),"Tarea"+counter,"Esta es la tarea "+counter);
	
		ltasks.add(t1);
		ltasks.add(t2);		
		ltasks.add(t3);	
		
		return ResponseEntity.ok(ltasks);
	}
	
	@PostMapping(path = "tasks")
	public Task saveTask(@RequestBody Task task) {
		System.out.println(task);
		Task newtask = new Task(counter.incrementAndGet(),task.getNombre(),task.getDescripcion());
		taskservice.guardar(newtask);
		return task;
	}
	
	/*
	@GetMapping(path = "/api/tasks/{id}")
	public Task obtenerTask(@PathVariable("id") Long id ) {
		return taskservice.obtenerTask(id);
	}
	
	@GetMapping(path = "tasks")
	public List<Task> obtener(){
		return taskservice.obtenerTodos();
	}*/
	
	@PutMapping(path = "tasks")
	public void actulizarTask(@RequestBody Task task){
		taskservice.actualizar(task);
	}
	
	@DeleteMapping(path = "tasks/{id}")
	public void eliminarTask(@PathVariable("id") Long id){
		taskservice.eliminar(id);
	}
}
