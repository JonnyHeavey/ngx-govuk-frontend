import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovUKTableColumn, GovUKTableComponent } from './table.component';

describe('GovUKTableComponent', () => {
  let component: GovUKTableComponent;
  let fixture: ComponentFixture<GovUKTableComponent>;

  const mockColumns: GovUKTableColumn[] = [
    { header: 'Name', key: 'name', isRowHeader: true },
    { header: 'Age', key: 'age', isNumeric: true },
    { header: 'Role', key: 'role', customClass: 'custom-header' },
  ];

  const mockData = [
    { name: 'John', age: 30, role: 'Developer' },
    { name: 'Jane', age: 25, role: 'Designer' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('table structure', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('columns', mockColumns);
      fixture.componentRef.setInput('dataSource', mockData);
      fixture.detectChanges();
    });

    it('should render table with correct structure', () => {
      const table = fixture.debugElement.query(By.css('.govuk-table'));
      expect(table).toBeTruthy();
    });

    it('should render header row with correct columns', () => {
      const headers = fixture.debugElement.queryAll(
        By.css('.govuk-table__header[scope="col"]'),
      );
      expect(headers.length).toBe(3);
      expect(headers[0].nativeElement.textContent.trim()).toBe('Name');
      expect(headers[1].nativeElement.textContent.trim()).toBe('Age');
      expect(headers[2].nativeElement.textContent.trim()).toBe('Role');
    });

    it('should render correct number of data rows', () => {
      const rows = fixture.debugElement.queryAll(By.css('tr.govuk-table__row'));
      expect(rows.length).toBe(3); // header row + 2 data rows
    });
  });

  describe('GovUKTableColumn properties', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('columns', mockColumns);
      fixture.componentRef.setInput('dataSource', mockData);
      fixture.detectChanges();
    });

    it('should render row headers when isRowHeader is true', () => {
      const rowHeader = fixture.debugElement.query(By.css('th[scope="row"]'));
      expect(rowHeader).toBeTruthy();
      expect(rowHeader.nativeElement.textContent.trim()).toBe('John');
    });

    it('should add numeric class when isNumeric is true', () => {
      const numericHeaders = fixture.debugElement.queryAll(
        By.css('.govuk-table__header--numeric'),
      );
      const numericCells = fixture.debugElement.queryAll(
        By.css('.govuk-table__cell--numeric'),
      );

      expect(numericHeaders.length).toBe(1);
      expect(numericCells.length).toBe(2);
      expect(numericCells[0].nativeElement.textContent.trim()).toBe('30');
    });

    it('should apply custom classes to headers', () => {
      const customHeader = fixture.debugElement.query(By.css('.custom-header'));
      expect(customHeader).toBeTruthy();
      expect(customHeader.nativeElement.textContent.trim()).toBe('Role');
    });
  });

  describe('optional inputs', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('columns', mockColumns);
      fixture.componentRef.setInput('dataSource', mockData);
    });

    it('should show caption when provided', () => {
      fixture.componentRef.setInput('caption', 'Test Caption');
      fixture.detectChanges();

      const caption = fixture.debugElement.query(
        By.css('.govuk-table__caption'),
      );
      expect(caption.nativeElement.textContent.trim()).toBe('Test Caption');
    });

    it('should not show caption when not provided', () => {
      fixture.detectChanges();
      const caption = fixture.debugElement.query(
        By.css('.govuk-table__caption'),
      );
      expect(caption).toBeNull();
    });

    it('should add small text class when small is true', () => {
      fixture.componentRef.setInput('small', true);
      fixture.detectChanges();

      const table = fixture.debugElement.query(By.css('.govuk-table'));
      expect(
        table.classes['govuk-table--small-text-until-tablet'],
      ).toBeTruthy();
    });
  });

  describe('computed properties', () => {
    it('should compute correct column keys', () => {
      fixture.componentRef.setInput('columns', mockColumns);
      fixture.componentRef.setInput('dataSource', mockData);

      fixture.detectChanges();

      expect(component.columnKeys()).toEqual(['name', 'age', 'role']);
    });
  });
});
