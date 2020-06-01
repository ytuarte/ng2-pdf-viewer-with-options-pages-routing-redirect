import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MyPdfViewerComponent } from './my-pdf-viewer/my-pdf-viewer.component';

const routes: Routes = [
  { path: 'my-pdf-viewer', component: MyPdfViewerComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }