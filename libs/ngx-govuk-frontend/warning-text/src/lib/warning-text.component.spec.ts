import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKWarningTextComponent } from './warning-text.component';

describe('GovUKWarningTextComponent', () => {
  let component: GovUKWarningTextComponent;
  let fixture: ComponentFixture<GovUKWarningTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKWarningTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKWarningTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
