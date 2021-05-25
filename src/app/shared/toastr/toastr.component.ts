import { Notification } from './../../core/models/notification';
import { NotificationType } from './../../core/models/notification-type';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/core/service/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {
  notification: Notification;
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.toastrService.getAlert().subscribe((alert: Notification) => {
      this.notification = alert;
       setTimeout(()=>{
         this.notification = null ;
       } ,3000);
    });
  }
  removeNotification() {
    this.notification = null;
  }
  cssClass(notification: Notification) {
    if (!notification) {
      return;
    }
    switch (notification.type) {
      case NotificationType.Success:
        return 'toast-success';
      case NotificationType.Error:
        return 'toast-error';
      case NotificationType.Info:
        return 'toast-info';
    }
  }
}
