import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexComponent } from './adminindex.component';

describe('AdminindexComponent', () => {
  let component: AdminindexComponent;
  let fixture: ComponentFixture<AdminindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminindexComponent]
    });
    fixture = TestBed.createComponent(AdminindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
