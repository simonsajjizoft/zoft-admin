import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingpageComponent } from './editingpage.component';

describe('EditingpageComponent', () => {
  let component: EditingpageComponent;
  let fixture: ComponentFixture<EditingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
