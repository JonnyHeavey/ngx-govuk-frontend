import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKTextInputComponent } from './text-input.component';

describe('GovUKTextInputComponent', () => {
  let component: GovUKTextInputComponent;
  let fixture: ComponentFixture<GovUKTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKTextInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
