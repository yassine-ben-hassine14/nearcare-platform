import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCeo } from './about-ceo';

describe('AboutCeo', () => {
  let component: AboutCeo;
  let fixture: ComponentFixture<AboutCeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCeo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCeo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
