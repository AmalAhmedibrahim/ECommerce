
import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/modules/Shared/models/item';

@Component({
  selector: 'app-sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.scss']
})
export class SortingFilterComponent implements OnInit {
  @Input() items: Item[] = [];


  ngOnInit() {

  }
}


