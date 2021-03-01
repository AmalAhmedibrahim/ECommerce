import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medium-item',
  templateUrl: './medium-item.component.html',
  styleUrls: ['./medium-item.component.scss']
})
export class MediumItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
