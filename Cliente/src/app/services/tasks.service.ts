import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:8080/api/tasks/';

  constructor(private http: HttpClient) { }

  obtenerTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  eliminarTask(id: any): Observable<any> {
    return this.http.delete(this.url + id);
  }

  crearTask(task: Task): Observable<any> {
    return this.http.post(this.url, task);
  }

  guardarTask(task: Task): Observable<any> {
    return this.http.put(this.url, task);
  }

  obtenerTask(id: any): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }
}
