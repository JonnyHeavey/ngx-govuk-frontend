import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningTextComponent } from './warning-text.component';

describe('WarningTextComponent', () => {
  let component: WarningTextComponent;
  let fixture: ComponentFixture<WarningTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
