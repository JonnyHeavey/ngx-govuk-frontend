import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKButtonGroupComponent } from './button-group.component';

describe('ButtonGroupComponent', () => {
  let component: GovUKButtonGroupComponent;
  let fixture: ComponentFixture<GovUKButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button group with default class', () => {
    const buttonGroupElement = fixture.nativeElement.querySelector('div');
    expect(buttonGroupElement).toBeTruthy();
    expect(buttonGroupElement.classList.contains('govuk-button-group')).toBeTruthy();
  });

  it('should project content correctly', () => {
    const testContent = '<button>Test Button</button>';
    fixture.nativeElement.innerHTML = testContent;
    fixture.detectChanges();
    
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toBe('Test Button');
  });
});
