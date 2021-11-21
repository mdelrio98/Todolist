import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreartaskComponent } from './components/crear-tasks/crear-task.component';

// componentes
import { ListartasksComponent } from './components/listar-tasks/listar-tasks.component';

const routes: Routes = [
  { path: '', component: ListartasksComponent },
  { path: 'crear-task', component: CreartaskComponent },
  { path: 'editar-task/:id', component: CreartaskComponent },
  { path: 'eliminar-task/:id', component: ListartasksComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
