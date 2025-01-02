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
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render warning text with default class', () => {
    fixture.detectChanges();
    const warningElement = fixture.nativeElement.querySelector('.govuk-warning-text');
    expect(warningElement).toBeTruthy();
  });

  it('should render warning text content', () => {
    const content = 'Test Warning Content';
    const element = fixture.nativeElement.querySelector('.govuk-warning-text__text');
    element.textContent = content;
    fixture.detectChanges();

    expect(element.textContent).toBe(content);
  });

});
