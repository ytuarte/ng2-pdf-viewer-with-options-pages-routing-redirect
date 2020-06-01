import { Component, OnInit } from '@angular/core';

import { PdfViewerComponent  } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-my-pdf-viewer',
  templateUrl: './my-pdf-viewer.component.html',
  styleUrls: ['./my-pdf-viewer.component.css']
})
export class MyPdfViewerComponent implements OnInit {

  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit() {
    console.log("MyPdfViewerComponent");
  }

  ngAfterViewInit() {
    console.log('MyPdfViewerComponent.ngAfterViewInit():');
    setTimeout(() => {
          this.page = 28;
        }, 500);
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