import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GovUKServiceNavigationItemDirective } from './item/navigation-item.directive';
import { GovUKServiceNavigationComponent } from './navigation.component';

@Component({
  template: `
    <ngx-govuk-service-navigation>
      @for (item of navigationItems; track item.text) {
        <ngx-govuk-service-navigaiton-item
          [link]="item.link"
          [label]="item.text"
        />
      }
    </ngx-govuk-service-navigation>
  `,
  standalone: true,
  imports: [
    GovUKServiceNavigationComponent,
    GovUKServiceNavigationItemDirective,
    RouterTestingModule,
  ],
})
class TestHostComponent {
  navigationItems = [
    { text: 'Item 1', link: '/item1' },
    { text: 'Item 2', link: '/item2' },
    { text: 'Item 3', link: '/item3' },
  ];
  component = viewChild.required(GovUKServiceNavigationComponent);
}

describe('GovUKServiceNavigationComponent', () => {
  let component: GovUKServiceNavigationComponent;
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

  it('should render all navigation items', () => {
    TestBed.runInInjectionContext(() => {
      const navItems = fixture.nativeElement.querySelectorAll('a');
      expect(navItems.length).toBe(3);
    });
  });

  it('should display correct text for each navigation item', () => {
    TestBed.runInInjectionContext(() => {
      const navItems = fixture.nativeElement.querySelectorAll('a');
      expect(navItems[0].textContent.trim()).toBe('Item 1');
      expect(navItems[1].textContent.trim()).toBe('Item 2');
      expect(navItems[2].textContent.trim()).toBe('Item 3');
    });
  });

  it('should have correct href attributes', () => {
    TestBed.runInInjectionContext(() => {
      const navItems = fixture.nativeElement.querySelectorAll('a');
      expect(navItems[0].getAttribute('href')).toBe('/item1');
      expect(navItems[1].getAttribute('href')).toBe('/item2');
      expect(navItems[2].getAttribute('href')).toBe('/item3');
    });
  });
});
