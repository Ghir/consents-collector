import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { ConsentItem } from '../../types/types';

@Component({
  selector: 'app-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrls: ['./collected-consents.component.scss']
})
export class CollectedConsentsComponent implements OnInit {

  constructor(private apiService: ApiService, ) { }

  displayedColumns = ['name', 'email', 'consents'];
  numPages: number;
  private readonly pageSize = 2;

  $dataSource: Observable<ConsentItem[]>;
  private $consentList: Observable<ConsentItem[]>;
  private $pagination = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.$consentList = this.apiService.getConsentsList().pipe(
      tap((list: ConsentItem[]) => {
        this.numPages = Math.ceil(list.length / this.pageSize);
      }));

    this.$dataSource = combineLatest([this.$consentList, this.$pagination]).pipe(
      map(([list, page]) => {
        const startIndex = page * this.pageSize;
        const endIndex = startIndex + this.pageSize;

        return list.slice(startIndex, endIndex);
      })
    );
  }

  paginate(pageIndex: number): void {
    this.$pagination.next(pageIndex);
  }
}
