import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisrComponent } from './regisr.component';

describe('RegisrComponent', () => {
  let component: RegisrComponent;
  let fixture: ComponentFixture<RegisrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
