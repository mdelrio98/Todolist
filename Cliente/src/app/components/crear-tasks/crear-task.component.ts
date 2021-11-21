import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-crear-task',
  templateUrl: './crear-task.component.html',
  styleUrls: ['./crear-task.component.css']
})
export class CreartaskComponent implements OnInit {
  taskForm: FormGroup;
  titulo = 'Crear task';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _taskService: TaskService,
              private aRouter: ActivatedRoute) { 
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregartask() {

    const task: Task = {
      nombre: this.taskForm.get('task')?.value,
      descripcion: this.taskForm.get('descripcion')?.value,
    }

    console.log(task);
    this._taskService.guardarTask(task).subscribe(data => {
      this.toastr.success('La task fue registrado con exito!', 'task Registrada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.taskForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar task';
      this._taskService.obtenerTask(this.id).subscribe(data => {
        this.taskForm.setValue({
          task: data.nombre,
          categoria: data.categoria,
        })
      })
    }
  }

}
