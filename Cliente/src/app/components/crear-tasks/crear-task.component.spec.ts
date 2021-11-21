import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartaskComponent } from './crear-task.component';

describe('CrearTaskComponent', () => {
  let component: CreartaskComponent;
  let fixture: ComponentFixture<CreartaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreartaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
