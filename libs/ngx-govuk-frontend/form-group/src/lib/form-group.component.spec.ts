import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKFormGroupComponent } from './form-group.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <ngx-govuk-form-group
      [label]="label"
      [labelFor]="labelFor"
      [hint]="hint"
      [isPageTitle]="isPageTitle"
    >
      <input type="text" id="test-input">
    </ngx-govuk-form-group>
  `,
  standalone: true,
  imports: [GovUKFormGroupComponent],
})
class TestHostComponent {
  label = '';
  labelFor = '';
  hint = '';
  isPageTitle = false;
}

describe('GovUKFormGroupComponent', () => {
  let component: GovUKFormGroupComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      sel => sel.componentInstance instanceof GovUKFormGroupComponent
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label in DOM when label is set', () => {
    hostComponent.label = 'Test Label';
    fixture.detectChanges();

    const labelElement = fixture.nativeElement.querySelector('.govuk-label');
    expect(labelElement.textContent.trim()).toBe('Test Label');
  });

  it('should not render label in DOM when label is not set', () => {
    hostComponent.label = '';
    fixture.detectChanges();

    const labelElement = fixture.nativeElement.querySelector('.govuk-label');
    expect(labelElement).toBeFalsy();
  });

  it('should render labelFor attribute in DOM when labelFor is set', () => {
    hostComponent.label = 'Label';
    hostComponent.labelFor = 'test-input';
    fixture.detectChanges();

    const labelElement = fixture.nativeElement.querySelector('.govuk-label');
    expect(labelElement.getAttribute('for')).toBe('test-input');
  });

  it('should render hint in DOM when hint is set', () => {
    hostComponent.label = 'Label';
    hostComponent.hint = 'Test hint text';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement.textContent.trim()).toBe('Test hint text');
  });

  it('should not render hint in DOM when hint is not set', () => {
    hostComponent.label = 'Label';
    hostComponent.hint = '';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeFalsy();
  });

  it('should render label as h1 when isPageTitle is true', () => {
    hostComponent.isPageTitle = true;
    hostComponent.label = 'Page Title';
    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector('h1.govuk-label-wrapper');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent.trim()).toBe('Page Title');
  });

  it('should not render label as h1 when isPageTitle is false', () => {
    hostComponent.isPageTitle = false;
    hostComponent.label = 'Regular Label';
    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector('h1.govuk-label-wrapper');
    expect(h1Element).toBeFalsy();

    const labelElement = fixture.nativeElement.querySelector('.govuk-label');
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent.trim()).toBe('Regular Label');
  });
});