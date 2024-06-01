import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKFooterComponent } from './footer.component';

describe('GovUKFooterComponent', () => {
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
});
