import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/modules/Shared/models/item';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() items: Item[];
  constructor() {

  }

  ngOnInit() {
  }

}
