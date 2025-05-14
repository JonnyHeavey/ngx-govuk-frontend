import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKFieldsetComponent } from './fieldset.component';

@Component({
  template: `
    <ngx-govuk-fieldset
      [legend]="legend"
      [hint]="hint"
      [isPageTitle]="isPageTitle"
      [errorMessage]="errorMessage"
    >
      <input type="text" id="test-input" />
    </ngx-govuk-fieldset>
  `,
  imports: [GovUKFieldsetComponent],
})
class TestHostComponent {
  legend = '';
  hint = '';
  isPageTitle = false;
  errorMessage = '';
}

describe('GovUKFieldsetComponent', () => {
  let component: GovUKFieldsetComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      (sel) => sel.componentInstance instanceof GovUKFieldsetComponent,
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render legend in DOM when legend is set', () => {
    hostComponent.legend = 'Test legend';
    fixture.detectChanges();

    const legendElement = fixture.nativeElement.querySelector(
      '.govuk-fieldset__legend',
    );
    expect(legendElement.textContent.trim()).toBe('Test legend');
  });

  it('should render hint in DOM when hint is set', () => {
    hostComponent.legend = 'legend';
    hostComponent.hint = 'Test hint text';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement.textContent.trim()).toBe('Test hint text');
  });

  it('should not render hint in DOM when hint is not set', () => {
    hostComponent.legend = 'legend';
    hostComponent.hint = '';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeFalsy();
  });

  it('should render legend as h1 when isPageTitle is true', () => {
    hostComponent.isPageTitle = true;
    hostComponent.legend = 'Page Title';
    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector(
      'h1.govuk-fieldset__heading',
    );
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent.trim()).toBe('Page Title');
  });

  it('should not render legend as h1 when isPageTitle is false', () => {
    hostComponent.isPageTitle = false;
    hostComponent.legend = 'Regular legend';
    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector(
      'h1.govuk-fieldset__heading',
    );
    expect(h1Element).toBeFalsy();

    const legendElement = fixture.nativeElement.querySelector(
      '.govuk-fieldset__legend',
    );
    expect(legendElement).toBeTruthy();
    expect(legendElement.textContent.trim()).toBe('Regular legend');
  });

  it('should render error message and error class when errorMessage is set', () => {
    hostComponent.legend = 'legend';
    hostComponent.errorMessage = 'Test error message';
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector(
      '.govuk-error-message',
    );
    const formGroupElement =
      fixture.nativeElement.querySelector('.govuk-form-group');

    expect(errorElement.textContent.trim()).toContain('Test error message');
    expect(formGroupElement.classList.contains('govuk-form-group--error')).toBe(
      true,
    );
  });

  it('should not render error message when errorMessage is not set', () => {
    hostComponent.legend = 'legend';
    hostComponent.errorMessage = '';
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector(
      '.govuk-error-message',
    );
    const formGroupElement =
      fixture.nativeElement.querySelector('.govuk-form-group');

    expect(errorElement).toBeFalsy();
    expect(formGroupElement.classList.contains('govuk-form-group--error')).toBe(
      false,
    );
  });
});
