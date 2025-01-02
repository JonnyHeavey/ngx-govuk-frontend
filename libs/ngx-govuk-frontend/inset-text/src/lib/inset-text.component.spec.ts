import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKInsetTextComponent } from './inset-text.component';

describe('InsetTextComponent', () => {
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

  it('should render inset text with default class', () => {
    const insetTextElement = fixture.nativeElement.querySelector('.govuk-inset-text');
    expect(insetTextElement).toBeTruthy();
    expect(insetTextElement.classList.contains('govuk-inset-text')).toBeTruthy();
  });

  it('should render content inside inset text', () => {
    const testContent = 'Test inset text content';
    const element = fixture.nativeElement.querySelector('.govuk-inset-text');
    element.textContent = testContent;
    fixture.detectChanges();
    
    expect(element.textContent).toBe(testContent);
  });
});
