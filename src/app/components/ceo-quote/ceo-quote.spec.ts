import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoQuote } from './ceo-quote';

describe('CeoQuote', () => {
  let component: CeoQuote;
  let fixture: ComponentFixture<CeoQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeoQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoQuote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
