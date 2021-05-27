import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TrasmisionType } from '../models/transmisionType';
const baseUrl = `${environment.transmisionApi}`;
@Injectable({
  providedIn: 'root',
})
export class TransmisiontypeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TrasmisionType[]> {
    return this.http.get<TrasmisionType[]>(baseUrl + '/transmisiontypes');
  }

  create(trasmision: TrasmisionType): Observable<TrasmisionType> {
    return this.http.post<TrasmisionType>(baseUrl + '/add', trasmision);
  }

  delete(id) {
    return this.http.delete<TrasmisionType>(`${baseUrl + '/delete'}/${id}`);
  }

  update(id, trasmision) {
    debugger
   let test= {
     Id: id,
     Name: trasmision.name
   }
    return this.http.put<TrasmisionType>(`${baseUrl + '/edit'}/${id}`,test);
  }
}
