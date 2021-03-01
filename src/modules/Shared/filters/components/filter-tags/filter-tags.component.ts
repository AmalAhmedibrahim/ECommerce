import { Item } from 'src/modules/Shared/models/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss']
})
export class FilterTagsComponent implements OnInit {
  @Input() items: Item[] = [];
  constructor() { }

  ngOnInit() {
  }

}
