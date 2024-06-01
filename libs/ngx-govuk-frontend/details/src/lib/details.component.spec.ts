import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKDetailsComponent } from './details.component';

describe('GovUKDetailsComponent', () => {
  let component: GovUKDetailsComponent;
  let fixture: ComponentFixture<GovUKDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
