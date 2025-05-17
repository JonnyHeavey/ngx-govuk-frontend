import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GovUKBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';
import { GovUKBreadcrumbsComponent } from './breadcrumbs.component';

@Component({
  template: `
    <ngx-govuk-breadcrumbs>
      @for (item of breadcrumbs; track item.text) {
        <ngx-govuk-breadcrumb [link]="item.link" [label]="item.text" />
      }
    </ngx-govuk-breadcrumbs>
  `,
  imports: [
    GovUKBreadcrumbsComponent,
    GovUKBreadcrumbDirective,
    RouterTestingModule,
  ],
})
class TestHostComponent {
  breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Section', link: '/section' },
    { text: 'Current Page', link: '/section/page' },
  ];
  component = viewChild.required(GovUKBreadcrumbsComponent);
}

describe('GovUKBreadcrumbsComponent', () => {
  let component: GovUKBreadcrumbsComponent;
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

  it('should render all breadcrumb items', () => {
    TestBed.runInInjectionContext(() => {
      const breadcrumbItems = fixture.nativeElement.querySelectorAll(
        'ngx-govuk-breadcrumb',
      );
      expect(breadcrumbItems.length).toBe(3);
    });
  });

  it('should display correct text for each breadcrumb', () => {
    TestBed.runInInjectionContext(() => {
      const breadcrumbItems = fixture.nativeElement.querySelectorAll(
        '.govuk-breadcrumbs__link',
      );
      expect(breadcrumbItems[0].textContent.trim()).toBe('Home');
      expect(breadcrumbItems[1].textContent.trim()).toBe('Section');
      expect(breadcrumbItems[2].textContent.trim()).toBe('Current Page');
    });
  });

  it('should have correct router links', () => {
    TestBed.runInInjectionContext(() => {
      const breadcrumbItems = fixture.nativeElement.querySelectorAll(
        '.govuk-breadcrumbs__link',
      );
      expect(breadcrumbItems[0].getAttribute('href')).toBe('/');
      expect(breadcrumbItems[1].getAttribute('href')).toBe('/section');
      expect(breadcrumbItems[2].getAttribute('href')).toBe('/section/page');
    });
  });
});
