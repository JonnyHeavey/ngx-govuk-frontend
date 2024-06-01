import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKInsetTextComponent } from './inset-text.component';

describe('GovUKInsetTextComponent', () => {
  let component: GovUKInsetTextComponent;
  let fixture: ComponentFixture<GovUKInsetTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKInsetTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKInsetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
