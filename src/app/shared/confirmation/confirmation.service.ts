import { Injectable } from '@angular/core';
import { ConfirmationComponent } from './confirmation.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  constructor(private modalService:NgbModal){}
  confirm(
    title: string= 'OK',
    message: string= 'OK',
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationComponent, {
      size: dialogSize,
      backdrop: 'static',

    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}
