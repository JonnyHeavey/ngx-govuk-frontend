import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKCookieBannerComponent } from './cookie-banner.component';

describe('GovUKCookieBannerComponent', () => {
  let component: GovUKCookieBannerComponent;
  let fixture: ComponentFixture<GovUKCookieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKCookieBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKCookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
