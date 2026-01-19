import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCards } from './solution-cards';

describe('SolutionCards', () => {
  let component: SolutionCards;
  let fixture: ComponentFixture<SolutionCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
