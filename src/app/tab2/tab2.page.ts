import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  values: number[] = [102, 115, 130, 137];

  constructor() {}

  ngOnInit(): void {

  }


}
