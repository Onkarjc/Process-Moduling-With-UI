import { Component } from '@angular/core';
import {
    Diagram, UndoRedo,  DiagramContextMenu, GridlinesModel, SnapSettingsModel} from '@syncfusion/ej2-angular-diagrams';


Diagram.Inject(UndoRedo, DiagramContextMenu);

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent {

  constructor() { }

  ngOnInit(): void {
  }

  // private interval: number[] = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25,
  //   9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
  // private horizontalGridlines: GridlinesModel = { lineColor: '#e0e0e0', lineIntervals: this.interval };
  // private verticalGridlines: GridlinesModel = { lineColor: '#e0e0e0', lineIntervals: this.interval };
  // public snapSettings: SnapSettingsModel = { horizontalGridlines: this.horizontalGridlines, verticalGridlines: this.verticalGridlines };

}
