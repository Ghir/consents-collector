import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() numPages: number;
  @Input() paginationSize = 5;
  @Output() readonly page: EventEmitter<number> = new EventEmitter<number>();

  pageIndex = 0;
  pageLinks: number[];

  constructor() { }

  ngOnChanges(): void {
    this.updatePageLinks();
  }

  nextPage(): void {
    if (this.pageIndex === this.numPages - 1) { return; }

    this.pageIndex++;
    this.page.emit(this.pageIndex);
    this.updatePageLinks();
  }

  previousPage(): void {
    if (this.pageIndex < 1) { return; }

    this.pageIndex--;
    this.page.emit(this.pageIndex);
    this.updatePageLinks();
  }

  onPageLinkClick(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.page.emit(pageIndex);
    this.updatePageLinks();
  }

  updatePageLinks(): void {
    this.pageLinks = [];
    const [start, end] = this.calculateBoundaries();

    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
  }

  private calculateBoundaries(): [number, number] {
    const visiblePages = Math.min(this.paginationSize, this.numPages);
    let start = Math.max(0, Math.ceil(this.pageIndex - ((visiblePages) / 2)));
    const end = Math.min(this.numPages - 1, start + visiblePages - 1);

    // for when approaching last pages
    const delta = this.paginationSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  }
}
