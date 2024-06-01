import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKHeaderComponent } from './header.component';

describe('GovUKHeaderComponent', () => {
  let component: GovUKHeaderComponent;
  let fixture: ComponentFixture<GovUKHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
