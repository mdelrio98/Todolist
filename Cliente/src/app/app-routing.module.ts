import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// componentes
import { ListartasksComponent } from './components/listar-tasks/listar-tasks.component';
import { EditarTasksComponent } from './components/editar-tasks/editar-tasks.component';

const routes: Routes = [
  { path: '', component: ListartasksComponent },
  { path: 'editar-task/:id', component: EditarTasksComponent },
  { path: 'eliminar-task/:id', component: ListartasksComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
