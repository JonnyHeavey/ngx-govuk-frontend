import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKTabComponent } from '../tab/tab.component';
import { GovUKTabsComponent } from './tabs.component';

interface GovUKTab {
  id: string;
  title: string;
  content: string;
}

@Component({
  template: `
    <ngx-govuk-tabs>
      @for (tab of tabs; track tab.id) {
        <ngx-govuk-tab [id]="tab.id" [title]="tab.title">
          {{ tab.content }}
        </ngx-govuk-tab>
      }
    </ngx-govuk-tabs>
  `,
  imports: [GovUKTabsComponent, GovUKTabComponent],
})
class TestHostComponent {
  tabs: GovUKTab[] = [
    { id: 'tab1', title: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', title: 'Tab 2', content: 'Content 2' },
  ];
  component = viewChild.required(GovUKTabsComponent);
}

describe('GovUKTabsComponent', () => {
  let component: GovUKTabsComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance.component();
    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should render tab list with correct titles', () => {
    TestBed.runInInjectionContext(() => {
      const tabtitles =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__tab');
      expect(tabtitles.length).toBe(2);
      expect(tabtitles[0].textContent.trim()).toBe('Tab 1');
      expect(tabtitles[1].textContent.trim()).toBe('Tab 2');
    });
  });

  it('should render tab panels with correct content', () => {
    TestBed.runInInjectionContext(() => {
      const tabPanels =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__panel');
      expect(tabPanels.length).toBe(2);
      expect(tabPanels[0].textContent.trim()).toBe('Content 1');
      expect(tabPanels[1].textContent.trim()).toBe('Content 2');
    });
  });

  it('should show first tab panel by default', () => {
    TestBed.runInInjectionContext(() => {
      const tabPanels =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__panel');
      expect(
        tabPanels[0].classList.contains('govuk-tabs__panel--hidden'),
      ).toBeFalsy();
      expect(
        tabPanels[1].classList.contains('govuk-tabs__panel--hidden'),
      ).toBeTruthy();
    });
  });

  it('should switch active tab when clicking tab button', () => {
    TestBed.runInInjectionContext(() => {
      const tabButtons =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__tab');
      tabButtons[1].click();
      fixture.detectChanges();

      const tabPanels =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__panel');
      expect(
        tabPanels[0].classList.contains('govuk-tabs__panel--hidden'),
      ).toBeTruthy();
      expect(
        tabPanels[1].classList.contains('govuk-tabs__panel--hidden'),
      ).toBeFalsy();
    });
  });

  it('should add active class to selected tab', () => {
    TestBed.runInInjectionContext(() => {
      const tabButtons =
        fixture.nativeElement.querySelectorAll('.govuk-tabs__tab');

      const tabItems = fixture.nativeElement.querySelectorAll(
        '.govuk-tabs__list-item',
      );

      tabButtons[1].click();
      fixture.detectChanges();

      expect(
        tabItems[0].classList.contains('govuk-tabs__list-item--selected'),
      ).toBeFalsy();
      expect(
        tabItems[1].classList.contains('govuk-tabs__list-item--selected'),
      ).toBeTruthy();
    });
  });
});
