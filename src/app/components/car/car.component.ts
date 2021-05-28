import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { CarService } from './../../core/service/car.service';
import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';
import { MESSAGE_DELETE_CAR, MESSAGE_ERROR } from './car.constant';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  myImage: string;

  fileToUpload: any;
  imageUrl: any;
  constructor(
    private carService: CarService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((res) => {
      if ((res as any).action == 'update') {
        this.carService.getCar().subscribe((data) => {
          this.cars = data;
          localStorage.removeItem('data');
          localStorage.setItem('data', JSON.stringify(this.cars));
        });
      }
      if ((res as any).action == 'create') {
        this.carService.getCar().subscribe((data) => {

          this.cars= data;
          localStorage.removeItem('data');
          localStorage.setItem('data', JSON.stringify(this.cars));
        });
      }
    });
    if (localStorage.getItem('data') != null) {
      this.cars = JSON.parse(localStorage.getItem('data'));
    } else {
      this.carService.getCar().subscribe((data) => {
        this.cars = data;
        localStorage.setItem('data', JSON.stringify(this.cars));
      });
    }
  }
  openConfirmation(car) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteCar(car);
        }
      });
  }
  deleteCar(car) {
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
    this.carService.deleteCar(car.id).subscribe(
      (data) => {

        localStorage.setItem('data', JSON.stringify(this.cars))
        this.toastrService.success(MESSAGE_DELETE_CAR);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
