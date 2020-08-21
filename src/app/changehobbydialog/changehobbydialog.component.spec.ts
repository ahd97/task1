import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangehobbydialogComponent } from './changehobbydialog.component';

describe('ChangehobbydialogComponent', () => {
  let component: ChangehobbydialogComponent;
  let fixture: ComponentFixture<ChangehobbydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangehobbydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangehobbydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
