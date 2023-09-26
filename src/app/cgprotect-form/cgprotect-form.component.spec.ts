import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgprotectFormComponent } from './cgprotect-form.component';

describe('CgprotectFormComponent', () => {
  let component: CgprotectFormComponent;
  let fixture: ComponentFixture<CgprotectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgprotectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgprotectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
