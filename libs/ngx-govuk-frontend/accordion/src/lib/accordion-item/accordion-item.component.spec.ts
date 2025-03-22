import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKAccordionComponent } from '../accordion/accordion.component';
import { GovUKAccordionItemComponent } from './accordion-item.component';

@Component({
  template: `
    <ngx-govuk-accordion id="test-accordion">
      <ngx-govuk-accordion-item
        itemId="test-item"
        heading="Test Heading"
        summary="Test Summary"
      >
        <p>Test Content</p>
      </ngx-govuk-accordion-item>
    </ngx-govuk-accordion>
  `,
  standalone: true,
  imports: [GovUKAccordionComponent, GovUKAccordionItemComponent],
})
class TestComponent {}

describe('GovUKAccordionItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    accordionElement = fixture.nativeElement.querySelector('.govuk-accordion');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct inputs', () => {
    const accordionItemComponent =
      fixture.debugElement.children[0].componentInstance.items()[0];
    expect(accordionItemComponent.itemId()).toBe('test-item');
    expect(accordionItemComponent.heading()).toBe('Test Heading');
    expect(accordionItemComponent.summary()).toBe('Test Summary');
  });

  it('should project content', () => {
    // Toggle the accordion item to make the content visible
    const buttonElement = accordionElement.querySelector(
      '.govuk-accordion__section-button',
    ) as HTMLButtonElement;
    buttonElement.click();
    fixture.detectChanges();

    // Now check the content
    const content = accordionElement.querySelector(
      '.govuk-accordion__section-content p',
    );
    expect(content).toBeTruthy();
    expect(content?.textContent).toBe('Test Content');
  });
});
