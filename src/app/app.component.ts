import { Component } from '@angular/core';

import { PdfViewerComponent  } from 'ng2-pdf-viewer';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core';    //image rotation

import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router){

  }
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
 
  @ViewChild(PdfViewerComponent, {static: false}) 
  pdfComponent: PdfViewerComponent;

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("pdfComponent:", this.pdfComponent);
  }


  //redirect
  showPdf(): void {
    console.log("showPdf");

    //navigate to route_qp
    /*
    let navigationExtras: NavigationExtras = {
      queryParams: { photoID: drawing.photoID, imageType: drawing.imageType },
      fragment: 'anchor'
    };
    */
    this.router.navigate(['/my-pdf-viewer']);
  }
  //redirect



  //rotation
  myrotation: number = 0;
  rotate(direction: String): void
  {
    switch(direction) {
      case 'LEFT': {
          //rotate counter-clockwise
          this.myrotation -= 90;
          break;
      }
      case 'RIGHT': {
        //rotate clockwise
          this.myrotation += 90;
          break;
      }
      default: {
          this.myrotation = 0;
          break;
      }
    }     
  }

  //zoom
  myzoom: number = 1.0;
  zoom(direction: String): void
  {
    switch(direction) {
      case 'IN': {
          //zoom in
          this.myzoom += .5;
          break;
      }
      case 'OUT': {
          //zoom out
          this.myzoom -= .5;
          break;
      }
      default: {
          this.myzoom = 1.0;
          break;
      }
    }     
  }

  //paging
  page=1;
  stickToPage = true;

  //true - show all pages, increment will go to that page
  //false - show current page, increment will display only the next/prev page
  showAll = true;   
  incrementPage(amount: number) {
    console.log ("old page num="+this.page);
    if (amount == 0)
      this.page = 1;
    else
      this.page += amount;

    console.log ("new page num="+this.page);
  }
}
