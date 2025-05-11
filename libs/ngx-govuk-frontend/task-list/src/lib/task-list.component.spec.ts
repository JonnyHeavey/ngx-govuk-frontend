import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovUKTaskListItemDirective } from './task-list-item.directive';
import { GovUKTaskListComponent } from './task-list.component';

// Test host component
@Component({
  standalone: true,
  imports: [GovUKTaskListComponent, GovUKTaskListItemDirective],
  template: `
    <ngx-govuk-task-list>
      <ngx-govuk-task-list-item
        [title]="'Test task'"
        [href]="'#'"
        [hint]="'Test hint'"
        [statusText]="'Completed'"
      ></ngx-govuk-task-list-item>
      <ngx-govuk-task-list-item
        [title]="'Test task 2'"
        [href]="'#'"
        [statusText]="'Incomplete'"
        [tagColor]="'blue'"
      ></ngx-govuk-task-list-item>
      <ngx-govuk-task-list-item
        [title]="'Test task 3'"
        [statusText]="'Not started'"
        [noLink]="true"
      ></ngx-govuk-task-list-item>
      <ngx-govuk-task-list-item
        [title]="'Test task with noLink'"
        [href]="'#'"
        [noLink]="true"
        [statusText]="'Cannot start yet'"
        [tagColor]="'grey'"
      ></ngx-govuk-task-list-item>
    </ngx-govuk-task-list>
  `,
})
class TestHostComponent {}

describe('GovUKTaskListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the task list', () => {
    expect(component).toBeTruthy();
    const taskList = fixture.debugElement.query(By.css('ul.govuk-task-list'));
    expect(taskList).toBeTruthy();
  });

  it('should render task items correctly', () => {
    const taskItems = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__item'),
    );
    expect(taskItems.length).toBe(4);
  });

  it('should render links for tasks with href and without noLink', () => {
    const taskLinks = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__link'),
    );
    expect(taskLinks.length).toBe(2); // Two tasks have href without noLink
  });

  it('should display hint text when provided', () => {
    const hint = fixture.debugElement.query(By.css('.govuk-task-list__hint'));
    expect(hint).toBeTruthy();
    expect(hint.nativeElement.textContent.trim()).toBe('Test hint');
  });

  it('should display text status correctly', () => {
    const firstTaskStatus = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__status'),
    )[0];
    expect(firstTaskStatus.nativeElement.textContent.trim()).toBe('Completed');
  });

  it('should display tag status correctly when tagColor is provided', () => {
    const secondTaskStatus = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__status'),
    )[1];
    const tag = secondTaskStatus.query(By.css('ngx-govuk-tag'));
    expect(tag).toBeTruthy();
    expect(secondTaskStatus.nativeElement.textContent.trim()).toBe(
      'Incomplete',
    );
  });

  it('should render tasks without href as spans', () => {
    const thirdTaskNameContainer = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__name-and-hint'),
    )[2];
    const link = thirdTaskNameContainer.query(By.css('a'));
    const span = thirdTaskNameContainer.query(By.css('span'));

    expect(link).toBeNull();
    expect(span).toBeTruthy();
    expect(span.nativeElement.textContent.trim()).toBe('Test task 3');
  });

  it('should render tasks with noLink as spans even if href is provided', () => {
    const fourthTaskNameContainer = fixture.debugElement.queryAll(
      By.css('.govuk-task-list__name-and-hint'),
    )[3];
    const link = fourthTaskNameContainer.query(By.css('a'));
    const span = fourthTaskNameContainer.query(By.css('span'));

    expect(link).toBeNull();
    expect(span).toBeTruthy();
    expect(span.nativeElement.textContent.trim()).toBe('Test task with noLink');
  });
});
