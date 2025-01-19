import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { GovUKBackLinkDirective } from './back-link.directive';

@Component({
  template: `
    <a ngxGovUkBackLink routerLink="/back" [inverse]="isInverse">Back</a>
  `,
  standalone: true,
  imports: [GovUKBackLinkDirective],
})
class TestHostComponent {
  isInverse = false;
}

describe('GovUKBackLinkDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add govuk-back-link class to host element', () => {
    const backLink = fixture.debugElement.query(
      By.directive(GovUKBackLinkDirective),
    );
    expect(
      backLink.nativeElement.classList.contains('govuk-back-link'),
    ).toBeTruthy();
  });

  it('should not have inverse class by default', () => {
    const backLink = fixture.debugElement.query(
      By.directive(GovUKBackLinkDirective),
    );
    expect(
      backLink.nativeElement.classList.contains('govuk-back-link--inverse'),
    ).toBeFalsy();
  });

  it('should add inverse class when inverse input is true', () => {
    component.isInverse = true;
    fixture.detectChanges();

    const backLink = fixture.debugElement.query(
      By.directive(GovUKBackLinkDirective),
    );
    expect(
      backLink.nativeElement.classList.contains('govuk-back-link--inverse'),
    ).toBeTruthy();
  });

  it('should have routerLink attribute', () => {
    const backLink = fixture.debugElement.query(
      By.directive(GovUKBackLinkDirective),
    );
    expect(backLink.attributes['ng-reflect-router-link']).toBe('/back');
  });
});
