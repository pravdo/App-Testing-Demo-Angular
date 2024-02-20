import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookDetails } from '../BookDetails';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css'],
})
export class LibraryDashboardComponent implements OnInit {
  bookDetails!: BookDetails[];

  constructor(private lib: LibraryService) {}

  ngOnInit(): void {
    this.lib.getBookDetails().subscribe((data) => {
      this.bookDetails = data;
    });
  }
}
