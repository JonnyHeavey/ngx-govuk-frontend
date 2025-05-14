import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { GovUKAccordionComponent } from './accordion.component';

@Component({
  template: `
    <ngx-govuk-accordion id="test-accordion">
      <ngx-govuk-accordion-item itemId="1" heading="Section 1">
        <p>Content 1</p>
      </ngx-govuk-accordion-item>
      <ngx-govuk-accordion-item itemId="2" heading="Section 2">
        <p>Content 2</p>
      </ngx-govuk-accordion-item>
    </ngx-govuk-accordion>
  `,
  imports: [GovUKAccordionComponent, GovUKAccordionItemComponent],
})
class TestComponent {}

describe('GovUKAccordionComponent', () => {
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

  it('should render the accordion with the correct ID', () => {
    expect(accordionElement.id).toBe('test-accordion');
  });

  it('should render the accordion items', () => {
    const sectionElements = accordionElement.querySelectorAll(
      '.govuk-accordion__section',
    );
    expect(sectionElements.length).toBe(2);
  });

  it('should render the accordion item headings', () => {
    const headingElements = accordionElement.querySelectorAll(
      '.govuk-accordion__section-heading',
    );
    expect(headingElements.length).toBe(2);
    expect(headingElements[0].textContent?.trim()).toContain('Section 1');
    expect(headingElements[1].textContent?.trim()).toContain('Section 2');
  });

  it('should toggle the accordion item when clicked', () => {
    const buttonElement = accordionElement.querySelector(
      '.govuk-accordion__section-button',
    ) as HTMLButtonElement;
    const sectionElement = accordionElement.querySelector(
      '.govuk-accordion__section',
    ) as HTMLElement;

    expect(
      sectionElement.classList.contains('govuk-accordion__section--expanded'),
    ).toBe(false);

    buttonElement.click();
    fixture.detectChanges();

    expect(
      sectionElement.classList.contains('govuk-accordion__section--expanded'),
    ).toBe(true);

    buttonElement.click();
    fixture.detectChanges();

    expect(
      sectionElement.classList.contains('govuk-accordion__section--expanded'),
    ).toBe(false);
  });

  it('should render the show/hide all control', () => {
    const showAllButton = accordionElement.querySelector(
      '.govuk-accordion__show-all',
    ) as HTMLButtonElement;

    expect(showAllButton).toBeTruthy();
    expect(showAllButton.getAttribute('aria-expanded')).toBe('false');
    expect(showAllButton.textContent?.trim()).toContain('Show all sections');
  });

  it('should expand all sections when show all is clicked', () => {
    const showAllButton = accordionElement.querySelector(
      '.govuk-accordion__show-all',
    ) as HTMLButtonElement;
    const sectionElements = accordionElement.querySelectorAll(
      '.govuk-accordion__section',
    );

    // Initially all sections should be collapsed
    sectionElements.forEach((section) => {
      expect(
        section.classList.contains('govuk-accordion__section--expanded'),
      ).toBe(false);
    });

    // Click show all button
    showAllButton.click();
    fixture.detectChanges();

    // Now all sections should be expanded
    sectionElements.forEach((section) => {
      expect(
        section.classList.contains('govuk-accordion__section--expanded'),
      ).toBe(true);
    });

    // Button text should change to "Hide all sections"
    expect(showAllButton.getAttribute('aria-expanded')).toBe('true');
    expect(showAllButton.textContent?.trim()).toContain('Hide all sections');
  });

  it('should collapse all sections when hide all is clicked', () => {
    const showAllButton = accordionElement.querySelector(
      '.govuk-accordion__show-all',
    ) as HTMLButtonElement;
    const sectionElements = accordionElement.querySelectorAll(
      '.govuk-accordion__section',
    );

    // First expand all sections
    showAllButton.click();
    fixture.detectChanges();

    // Click hide all button (same button, now in "hide" state)
    showAllButton.click();
    fixture.detectChanges();

    // Now all sections should be collapsed again
    sectionElements.forEach((section) => {
      expect(
        section.classList.contains('govuk-accordion__section--expanded'),
      ).toBe(false);
    });

    // Button text should change back to "Show all sections"
    expect(showAllButton.getAttribute('aria-expanded')).toBe('false');
    expect(showAllButton.textContent?.trim()).toContain('Show all sections');
  });

  it('should update show/hide all button state when individual sections are toggled', () => {
    const showAllButton = accordionElement.querySelector(
      '.govuk-accordion__show-all',
    ) as HTMLButtonElement;
    const sectionButtons = accordionElement.querySelectorAll(
      '.govuk-accordion__section-button',
    ) as NodeListOf<HTMLButtonElement>;

    // Expand all sections individually
    sectionButtons.forEach((button) => {
      button.click();
      fixture.detectChanges();
    });

    // Show all button should now be in "hide all" state
    expect(showAllButton.getAttribute('aria-expanded')).toBe('true');
    expect(showAllButton.textContent?.trim()).toContain('Hide all sections');

    // Collapse one section
    sectionButtons[0].click();
    fixture.detectChanges();

    // Show all button should now be in "show all" state
    expect(showAllButton.getAttribute('aria-expanded')).toBe('false');
    expect(showAllButton.textContent?.trim()).toContain('Show all sections');
  });
});
