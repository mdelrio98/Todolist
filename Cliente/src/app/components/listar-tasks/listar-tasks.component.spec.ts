import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartasksComponent } from './listar-tasks.component';

describe('ListarTasksComponent', () => {
  let component: ListartasksComponent;
  let fixture: ComponentFixture<ListartasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
