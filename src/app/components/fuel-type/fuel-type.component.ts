import { error } from 'selenium-webdriver';
import { FuelType } from './../../core/models/fuelType';
import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { FuelTypeService } from './../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { MESSAGE_DELETE_FUELTYPE} from './fueltype.constant';

@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.css'],
})
export class FuelTypeComponent implements OnInit {
  fuelType: FuelType[] = [];

  constructor(
    private fuelService: FuelTypeService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getFuel();
  }

  openConfirm(item) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deletePost(item);
        }
      });
  }
  deletePost(item) {
    this.fuelService.delete(item.id).subscribe(
      (el) => {
        console.log(item.id);
        const index = this.fuelType.indexOf(item);
        console.log(index);
        this.fuelType.splice(index, 1);
        this.toastrService.success(MESSAGE_DELETE_FUELTYPE);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getFuel() {
    this.fuelService.getFuelType().subscribe((data) => {
      this.fuelType = data;
    }),
      (error) => {
        console.error(error);
      };
  }
}
