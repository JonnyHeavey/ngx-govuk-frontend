import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKBackLinkComponent } from './back-link.component';

describe('BackLinkComponent', () => {
  let component: GovUKBackLinkComponent;
  let fixture: ComponentFixture<GovUKBackLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKBackLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKBackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
