import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKCookieConfirmationComponent } from './cookie-confirmation.component';

describe('GovUKCookieConfirmationComponent', () => {
  let component: GovUKCookieConfirmationComponent;
  let fixture: ComponentFixture<GovUKCookieConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKCookieConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKCookieConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
