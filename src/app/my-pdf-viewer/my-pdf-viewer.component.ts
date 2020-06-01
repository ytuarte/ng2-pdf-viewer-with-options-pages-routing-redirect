import { Component, OnInit } from '@angular/core';

import { PdfViewerComponent  } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-my-pdf-viewer',
  templateUrl: './my-pdf-viewer.component.html',
  styleUrls: ['./my-pdf-viewer.component.css']
})
export class MyPdfViewerComponent implements OnInit {

  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  //src;

  constructor() { }

  ngOnInit() {
    console.log("MyPdfViewerComponent");
    //this.src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  }

/*
  ngAfterViewInit() {
    console.log('MyPdfViewerComponent.ngAfterViewInit():');
    setTimeout(() => {
      console.log('MyPdfViewerComponent.ngAfterViewInit.timeout:');
          this.page = 0;
        }, 5000);
  }
*/





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