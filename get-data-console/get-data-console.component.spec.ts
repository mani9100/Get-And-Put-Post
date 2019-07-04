import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataConsoleComponent } from './get-data-console.component';

describe('GetDataConsoleComponent', () => {
  let component: GetDataConsoleComponent;
  let fixture: ComponentFixture<GetDataConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDataConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
