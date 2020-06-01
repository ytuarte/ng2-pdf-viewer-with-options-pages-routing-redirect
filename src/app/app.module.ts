import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

import { AppComponent } from './app.component';
import { MyPdfViewerComponent } from './my-pdf-viewer/my-pdf-viewer.component';

import { AppRoutingModule } from './app-routing.module';    //needed

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, AppRoutingModule,
    PdfViewerModule // <- Add PdfViewerModule to imports
  ],
  declarations: [ AppComponent, MyPdfViewerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
