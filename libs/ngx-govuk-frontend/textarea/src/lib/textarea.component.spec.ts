import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GovUKTextareaComponent } from './textarea.component';

describe('GovUKTextareaComponent', () => {
  let component: GovUKTextareaComponent;
  let fixture: ComponentFixture<GovUKTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKTextareaComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
