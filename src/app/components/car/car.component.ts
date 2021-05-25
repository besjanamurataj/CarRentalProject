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
  car: Car[] = [];
  myImage: string;

  fileToUpload: any;
  imageUrl: any;
  constructor(
    private carService: CarService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.carService.getCar().subscribe((data) => {
      this.car = data;
      console.log(data);
    }), (error) =>{
      console.error(error);
    };
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
    const index = this.car.indexOf(car);
    this.car.splice(index, 1);
    this.carService.deleteCar(car.id).subscribe(
      (data) => {
        this.toastrService.success(MESSAGE_DELETE_CAR);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // handleFileInput(file: FileList) {
  //   this.fileToUpload = file.item(0);
  //   let reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //   };
  //   reader.readAsDataURL(this.fileToUpload);
  // }
}
