import { Component, OnInit } from '@angular/core';
import { About } from 'src/modules/Shared/models/about';
import { CommonService } from 'src/modules/Shared/services/common.service';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.scss']
})
export class UpperHeaderComponent implements OnInit {
  about: About;

  constructor(public commonService: CommonService) {
    this.about = { address: "", number: "", email: "" }
  }

  ngOnInit() {
    this.commonService.GetAbout().subscribe(res => {
      this.about = res[0];
    })
  }
}
