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
  task:Task = new Task();

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
  
  eliminarTask(task: Task) {
    this._taskService.eliminarTask(task.id).subscribe(data => {
      this.toastr.error('La tarea fue eliminada con exito' ,'Tarea Eliminada');
      this.obtenerTasks();
      this.listTasks = data; 
    }, error => {
      console.log(error);
    })
  }

  crearTask():void{    
    console.log(this.task);
    this._taskService.crearTask(this.task).subscribe(res=> {
      this.toastr.success('Se registro la task con exito','Tarea registrada');
      this.obtenerTasks();
      this.listTasks = res; 
    }, error => {
      console.log(error);
    });
  }

  /*
  agregartask() {

    const task: Task = {
      nombre: this.taskForm.get('task')?.value,
      descripcion: this.taskForm.get('descripcion')?.value,
    }

    console.log(task);
    this._taskService.guardarTask(task).subscribe(data => {
      this.toastr.success('La task fue registrada con exito!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.taskForm.reset();
    })  
  }
  */

}
