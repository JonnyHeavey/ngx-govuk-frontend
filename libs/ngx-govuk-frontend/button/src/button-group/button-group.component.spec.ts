import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKButtonGroupComponent } from './button-group.component';

describe('GovUKButtonGroupComponent', () => {
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
});
