import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKTagComponent } from './tag.component';

describe('GovUKTagComponent', () => {
  let component: GovUKTagComponent;
  let fixture: ComponentFixture<GovUKTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
