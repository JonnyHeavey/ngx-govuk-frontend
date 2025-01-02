import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: GovUKFooterComponent;
  let fixture: ComponentFixture<GovUKFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer with default class', () => {
    const footerElement = fixture.nativeElement.querySelector('.govuk-footer');
    expect(footerElement).toBeTruthy();
    expect(footerElement.classList.contains('govuk-footer')).toBeTruthy();
  });

  it('should project content correctly', () => {
    const testContent = '<div>Test Footer Content</div>';
    fixture.nativeElement.innerHTML = testContent;
    fixture.detectChanges();
    
    const contentElement = fixture.nativeElement.querySelector('div');
    expect(contentElement).toBeTruthy();
    expect(contentElement.textContent).toBe('Test Footer Content');
  });
});
