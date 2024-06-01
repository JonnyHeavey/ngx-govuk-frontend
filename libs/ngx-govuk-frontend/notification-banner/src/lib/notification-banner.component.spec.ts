import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKNotificationBannerComponent } from './notification-banner.component';

describe('NotificationBannerComponent', () => {
  let component: GovUKNotificationBannerComponent;
  let fixture: ComponentFixture<GovUKNotificationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKNotificationBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKNotificationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
