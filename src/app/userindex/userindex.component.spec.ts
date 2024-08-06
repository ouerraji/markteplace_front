import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexComponent } from './userindex.component';

describe('UserindexComponent', () => {
  let component: UserindexComponent;
  let fixture: ComponentFixture<UserindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserindexComponent]
    });
    fixture = TestBed.createComponent(UserindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
