import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddhttpdataComponent } from './addhttpdata.component';
describe('AddhttpdataComponent', () => {
  let component: AddhttpdataComponent;
  let fixture: ComponentFixture<AddhttpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhttpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhttpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
