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

  obtenerTasks(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarTask(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarTask(task: Task): Observable<any> {
    return this.http.post(this.url, task);
  }
  obtenerTask(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
