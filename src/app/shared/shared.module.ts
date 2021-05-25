import { ConfirmationService } from './confirmation/confirmation.service';
import { CardComponent } from './card/card.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';



@NgModule({
  declarations: [ConfirmationComponent,ToastrComponent,CardComponent, ListComponent, SpinnerOverlayComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent,ToastrComponent,SpinnerOverlayComponent,ConfirmationComponent,]
})
export class SharedModule { }
