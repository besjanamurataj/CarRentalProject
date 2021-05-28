
import { FuelType } from './../../core/models/fuelType';
import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { FuelTypeService } from './../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { MESSAGE_DELETE_FUELTYPE, MESSAGE_ERROR} from './fueltype.constant';
import { ActivatedRoute } from '@angular/router';

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
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      if ((res as any).action == 'update') {
        this.fuelService.getFuelType().subscribe((data) => {
          this.fuelType = data;
          localStorage.removeItem('transmision');
          localStorage.setItem('transmision', JSON.stringify(this.fuelType));
        });
      }
      if ((res as any).action == 'create') {
        this.fuelService.getFuelType().subscribe((data) => {

          this.fuelType = data;
          localStorage.setItem('transmision', JSON.stringify(this.fuelType));
        });
      }
    });
    if (localStorage.getItem('transmision') != null) {
      this.fuelType = JSON.parse(localStorage.getItem('transmision'));
    } else {
      this.fuelService.getFuelType().subscribe((data) => {
        this.fuelType = data;
        localStorage.setItem('transmision', JSON.stringify(this.fuelType));
      });
    }
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
    const index = this.fuelType.indexOf(item);
    this.fuelType.splice(index, 1);
    this.fuelService.delete(item.id).subscribe(
      (el) => {
        localStorage.setItem('transmision',JSON.stringify(this.fuelType))
        this.toastrService.success(MESSAGE_DELETE_FUELTYPE);
      },
      (error) => {
        this.toastrService.error( MESSAGE_ERROR);
      }
    );
  }

}
