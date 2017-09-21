import { Component, OnInit } from '@angular/core';
import { HeatmapComponent } from '../heatmap/heatmap.component';
@Component({
  selector: 'sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrls:['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  constructor(){ }
  public list;
  ngOnInit(){
    this.list = ["Home","Heat map"];
  }
}
