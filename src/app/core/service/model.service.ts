import { Observable } from 'rxjs';
import { AddModel } from './../models/AddModels';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/model';

const baseUrl = `${environment.modelApi}`
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient) {
   }
   createModel(model:AddModel){
   return this.http.post(baseUrl +'/add', model);

   }
   deleteModel(id:string){
       return this.http.delete(`${baseUrl+ '/delete'}/${id}`);

   }
   updateModel(id:string, body){
      return this.http.put(`${baseUrl+ '/edit'}/${id}`,body);

   }
   getElementById(id):Observable<Model>{
     return this.http.get<Model>(`${baseUrl}/${id}`);
   }
   getListById(id):Observable<Model[]>{
     return this.http.get<Model[]>(`${baseUrl+ '/models'}/${id}`)
   }
}
