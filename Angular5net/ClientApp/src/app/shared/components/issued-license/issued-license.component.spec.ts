import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedLicenseComponent } from './issued-license.component';

describe('IssuedLicenseComponent', () => {
  let component: IssuedLicenseComponent;
  let fixture: ComponentFixture<IssuedLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
