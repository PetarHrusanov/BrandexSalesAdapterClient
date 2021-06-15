import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandexMainComponent } from './brandex-main.component';

describe('BrandexMainComponent', () => {
  let component: BrandexMainComponent;
  let fixture: ComponentFixture<BrandexMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandexMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandexMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
