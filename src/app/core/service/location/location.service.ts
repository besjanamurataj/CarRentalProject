import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const baseUrl = `${environment.locationApi}`;
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Location[]> {

    return this.http.get<Location[]>(baseUrl + 'locations',);
  }
  create(location:Location) {
    return this.http.post<Location>(baseUrl + '/add/', location)
  }
  update(id, location): Observable<Location> {
    return this.http.put<Location>(`${baseUrl + '/edit'}/${id}`, location);
  }
  deleteLocation(id) {
    return this.http.delete(`${baseUrl + '/delete'}/${id}`);
  }
  getElementById(id) {
    return this.http.get<Location>(`${baseUrl}/${id}`);
  }

}
