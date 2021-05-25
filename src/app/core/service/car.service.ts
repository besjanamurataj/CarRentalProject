import { AccountService } from './account.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

const baseUrl = `${environment.carApi}`;
@Injectable({
  providedIn: 'root',
})
export class CarService {
constructor(private http: HttpClient) {}

  getCar(): Observable<Car[]> {
    const opts = { params: new HttpParams({fromString: "PageNumber=1&PageSize=1"})};
    return this.http.get<Car[]>(baseUrl + '/cars',opts);
  }
  create(car: Car) {
    return this.http.post<Car>(baseUrl + '/add/', car)
  }
  update(id, car): Observable<Car> {
    return this.http.put<Car>(`${baseUrl + '/edit'}/${id}`, car);
  }
  deleteCar(id) {
    return this.http.delete(`${baseUrl + '/delete'}/${id}`);
  }
  getCarById(id) {
    return this.http.get<Car>(`${baseUrl}/${id}`);
  }
}
