import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';
import { GovUKSummaryListActionsComponent } from './summary-list-actions.component';
import { GovUKSummaryListItemComponent } from './summary-list-item.component';
import { GovUKSummaryListValueDirective } from './summary-list-value.directive';
import { GovUKSummaryListComponent } from './summary-list.component';

// Test host component
@Component({
  standalone: true,
  imports: [
    GovUKSummaryListComponent,
    GovUKSummaryListItemComponent,
    GovUKSummaryListActionsComponent,
    GovUKSummaryListActionComponent,
    GovUKSummaryListValueDirective,
  ],
  template: `
    <ngx-govuk-summary-list>
      <ngx-govuk-summary-list-item key="Name" value="Sarah Philips">
        <ngx-govuk-summary-list-actions>
          <ngx-govuk-summary-list-action href="#" visuallyHiddenText="name">
            Change
          </ngx-govuk-summary-list-action>
        </ngx-govuk-summary-list-actions>
      </ngx-govuk-summary-list-item>
      <ngx-govuk-summary-list-item key="Address">
        <ng-template ngxGovUkSummaryListValue>
          72 Guild Street<br />London<br />SE23 6FH
        </ng-template>
        <ngx-govuk-summary-list-actions>
          <ngx-govuk-summary-list-action href="#" visuallyHiddenText="address">
            Change
          </ngx-govuk-summary-list-action>
        </ngx-govuk-summary-list-actions>
      </ngx-govuk-summary-list-item>
      <ngx-govuk-summary-list-item
        key="Contact details"
        value="email@example.com"
      >
      </ngx-govuk-summary-list-item>
    </ngx-govuk-summary-list>

    <ngx-govuk-summary-list [noBorder]="true">
      <ngx-govuk-summary-list-item key="Status" value="Complete">
      </ngx-govuk-summary-list-item>
    </ngx-govuk-summary-list>
  `,
})
class TestHostComponent {}

describe('GovUKSummaryListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the summary list', () => {
    expect(component).toBeTruthy();
    const summaryLists = fixture.debugElement.queryAll(
      By.css('dl.govuk-summary-list'),
    );
    expect(summaryLists.length).toBe(2);
  });

  it('should render summary list items correctly', () => {
    const summaryListRows = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__row'),
    );
    expect(summaryListRows.length).toBe(4);
  });

  it('should display key elements correctly', () => {
    const keys = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__key'),
    );
    expect(keys.length).toBe(4);
    expect(keys[0].nativeElement.textContent.trim()).toBe('Name');
    expect(keys[1].nativeElement.textContent.trim()).toBe('Address');
    expect(keys[2].nativeElement.textContent.trim()).toBe('Contact details');
  });

  it('should display value elements correctly', () => {
    const values = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__value'),
    );
    expect(values.length).toBe(4);
    expect(values[0].nativeElement.textContent.trim()).toBe('Sarah Philips');
    expect(values[2].nativeElement.textContent.trim()).toBe(
      'email@example.com',
    );
  });

  it('should render complex HTML in value when using template', () => {
    const addressValue = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__value'),
    )[1];

    expect(addressValue.nativeElement.innerHTML).toContain(
      '72 Guild Street<br>London<br>SE23 6FH',
    );
  });

  it('should render actions correctly', () => {
    const actionCells = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__actions'),
    );
    expect(actionCells.length).toBe(2);

    const actionLinks = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__actions a.govuk-link'),
    );
    expect(actionLinks.length).toBe(2);
  });

  it('should apply no-border class when noBorder is true', () => {
    const summaryLists = fixture.debugElement.queryAll(
      By.css('dl.govuk-summary-list'),
    );
    expect(summaryLists[1].nativeElement.classList).toContain(
      'govuk-summary-list--no-border',
    );
    expect(summaryLists[0].nativeElement.classList).not.toContain(
      'govuk-summary-list--no-border',
    );
  });

  it('should apply no-actions class to rows without actions', () => {
    const rows = fixture.debugElement.queryAll(
      By.css('.govuk-summary-list__row'),
    );
    expect(rows[2].nativeElement.classList).toContain(
      'govuk-summary-list__row--no-actions',
    );
    expect(rows[0].nativeElement.classList).not.toContain(
      'govuk-summary-list__row--no-actions',
    );
  });
});
