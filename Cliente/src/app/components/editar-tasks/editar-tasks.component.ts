import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-editar-tasks',
  templateUrl: './editar-tasks.component.html',
  styleUrls: ['./editar-tasks.component.css']
})
export class EditarTasksComponent implements OnInit {

  taskForm: FormGroup;
  titulo = 'Editar task';
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
    this.editarTask();
  }


  editarTask():void{

    if(this.id !== null) {
      this.titulo = 'Editar task';
      this._taskService.obtenerTask(this.id).subscribe(data => {
        this.taskForm.setValue({
          task: data.nombre,
          descripcion: data.descripcion,
        })
      })
    }
  }
}
