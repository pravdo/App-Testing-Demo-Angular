import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDashboardComponent } from './library-dashboard.component';
import { of } from 'rxjs';
import { LibraryService } from '../library.service';

describe('LibraryDashboardComponent', () => {
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;
  let getBookDetailsSpy: any;
  let book: any = [
    {
      book_name: 'TS Book',
      isbn: 'qwerty1',
      aisle: '5',
    },
  ];

  beforeEach(async () => {
    const libraryService = jasmine.createSpyObj('LibraryService', [
      'getBookDetails',
    ]);
    getBookDetailsSpy = libraryService.getBookDetails.and.returnValue(of(book));
    await TestBed.configureTestingModule({
      declarations: [LibraryDashboardComponent],
      providers: [{ provide: LibraryService, useValue: libraryService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDashboardComponent);
    TestBed.inject(LibraryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('tr').length).toBe(2);
  });
  expect(getBookDetailsSpy.calls.any().toBe(true));
});
