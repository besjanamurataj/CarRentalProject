import { Observable } from 'rxjs';
import { FuelType } from './../models/fuelType';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.fuelType}`
@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  constructor(private _http:HttpClient) { }


  getFuelType():Observable<FuelType[]>{
    return this._http.get<FuelType[]>(baseUrl+'/fueltypes/');
  // return this._http.get<FuelType[]>(baseUrl)
  }
  create(fuelType):Observable<FuelType>{

    //return this._http.post<FuelType>(baseUrl,fuelType);
    return this._http.post<FuelType>(baseUrl +'/add/',fuelType);
  }

    update(id, body):Observable<FuelType>{
      return this._http.put<FuelType>(`${baseUrl + '/edit/'}/${id}`, body);
      //return this._http.put<FuelType>(`${baseUrl}/${id}`,body);
    }

  delete(id:string){
     // return this._http.delete<FuelType>(`${baseUrl}/${id}`);
      return this._http.delete<FuelType>(`${baseUrl +'/delete/'}/${id}`);
  }

  getElementById(id){
    return this._http.get<FuelType>(`${baseUrl}/${id}`);
  }
}
