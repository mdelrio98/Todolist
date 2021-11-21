import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-listar-tasks',
  templateUrl: './listar-tasks.component.html',
  styleUrls: ['./listar-tasks.component.css']
})
export class ListartasksComponent implements OnInit {
  listTasks: Task[] = [];
  
  constructor(private _taskService: TaskService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTasks();
  }

  obtenerTasks() {
    this._taskService.obtenerTasks().subscribe(data => {
      console.log("Estas son las tareas");
      console.log(data);
      this.listTasks = data; 
    }, error => {
      console.log(error);
    })
  }
  
  eliminarTask(id: any) {
    this._taskService.eliminarTask(id).subscribe(data => {
      this.toastr.error('La tarea fue eliminada con exito' ,'Tarea Eliminada');
      this.obtenerTasks();
      this.listTasks = data; 
    }, error => {
      console.log(error);
    })
  }

}
