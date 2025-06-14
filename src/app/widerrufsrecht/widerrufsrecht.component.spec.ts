import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiderrufsrechtComponent } from './widerrufsrecht.component';

describe('WiderrufsrechtComponent', () => {
  let component: WiderrufsrechtComponent;
  let fixture: ComponentFixture<WiderrufsrechtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiderrufsrechtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiderrufsrechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
