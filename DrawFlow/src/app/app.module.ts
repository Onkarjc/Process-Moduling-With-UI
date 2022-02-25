import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDividerModule } from '@angular/material/divider'; 
import {MatTreeModule} from '@angular/material/tree';
//import { MatIconModule } from '@angular/material/icon'



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPanelComponent } from './component-panel/component-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponentComponent } from './grid-component/grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPanelComponent,
    GridComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,NumericTextBoxModule,ColorPickerModule,UploaderModule,TextBoxModule,
    ToolbarModule,MultiSelectModule,DropDownListAllModule, DiagramAllModule , SymbolPaletteAllModule,
    OverviewAllModule,
    BrowserAnimationsModule ,MatToolbarModule,MatButtonModule,MatSidenavModule,MatDividerModule,MatTreeModule //,MatIconModule
  ],
  providers: [],
  bootstrap: [ComponentPanelComponent]
})
export class AppModule { }

function MatIconModule(MatIconModule: any, from: any, arg2: string) {
  throw new Error('Function not implemented.');
}

