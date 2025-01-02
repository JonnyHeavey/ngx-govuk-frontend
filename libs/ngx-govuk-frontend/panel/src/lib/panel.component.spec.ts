import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKPanelComponent } from './panel.component';

describe('GovUKPanelComponent', () => {
  let component: GovUKPanelComponent;
  let fixture: ComponentFixture<GovUKPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should throw error when title is not provided', () => {
    expect(() => {
      fixture.detectChanges();
    }).toThrow();
  });

  it('should render panel with title', () => {
    const testTitle = 'Application complete';
    fixture.componentRef.setInput('title', testTitle);
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.govuk-panel__title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent.trim()).toBe(testTitle);
  });

  it('should render panel with default class', () => {
    fixture.componentRef.setInput('title', 'Test title');
    fixture.detectChanges();

    const panelElement = fixture.nativeElement.querySelector('.govuk-panel');
    expect(panelElement).toBeTruthy();
    expect(panelElement.classList.contains('govuk-panel--confirmation')).toBeTruthy();
  });

  it('should update title when input changes', () => {
    const initialTitle = 'Initial title';
    const updatedTitle = 'Updated title';
    
    fixture.componentRef.setInput('title', initialTitle);
    fixture.detectChanges();
    
    let titleElement = fixture.nativeElement.querySelector('.govuk-panel__title');
    expect(titleElement.textContent.trim()).toBe(initialTitle);

    fixture.componentRef.setInput('title', updatedTitle);
    fixture.detectChanges();
    
    titleElement = fixture.nativeElement.querySelector('.govuk-panel__title');
    expect(titleElement.textContent.trim()).toBe(updatedTitle);
  });
});
