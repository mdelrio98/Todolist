package com.ensolvers.controllers;

import java.util.List;
import java.net.URI;
import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ensolvers.Model.Task;


import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class TaskController {
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
	/*
	@DeleteMapping(value = "/{taskid}/delete")
	public ResponseEntity<Object> deleteTask(@PathVariable int taskid) {
		
		return ResponseEntity.ok(boolean.TRUE);
	}*/
	
}
