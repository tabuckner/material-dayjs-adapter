import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDayjsAdapterComponent } from './material-dayjs-adapter.component';

describe('MaterialDayjsAdapterComponent', () => {
  let component: MaterialDayjsAdapterComponent;
  let fixture: ComponentFixture<MaterialDayjsAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDayjsAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDayjsAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
