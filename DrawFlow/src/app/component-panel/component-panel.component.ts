import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-panel',
  templateUrl: './component-panel.component.html',
  styleUrls: ['./component-panel.component.css']
})
export class ComponentPanelComponent implements OnInit {

  isOpened: boolean=true;
  comp1Toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleBtn() {
  this.comp1Toggle = !this.comp1Toggle ;
}
}
