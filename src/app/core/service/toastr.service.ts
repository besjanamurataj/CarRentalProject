
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NotificationType } from '../models/notification-type';
import { Notification } from '../models/notification';
@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  public subject = new Subject<Notification>();
  constructor() { }

  getAlert():Observable<Notification>{
    return this.subject.asObservable();
  }
  success(message:string){
    this.showNotification(NotificationType.Success, message)
  }
  info(message:string){
    this.showNotification(NotificationType.Info,message)
  }

  error(message:string){
    this.showNotification(NotificationType.Error,message);
  }

showNotification(type:NotificationType, message:string){
  this.subject.next({type, message});
}
}
