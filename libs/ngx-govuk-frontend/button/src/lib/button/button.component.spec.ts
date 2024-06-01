import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKButtonComponent } from './button.component';

describe('GovUKButtonComponent', () => {
  let component: GovUKButtonComponent;
  let fixture: ComponentFixture<GovUKButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
