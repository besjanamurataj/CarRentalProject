import { LocationService } from '../../../core/service/location/location.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/shared/confirmation/confirmation.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
location: Location[] = [];

  constructor(
    private locationService: LocationService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      if ((res as any).action == 'update') {
        this.locationService.getAll().subscribe((data) => {
          this.location = data;
          localStorage.removeItem('location');
          localStorage.setItem('location', JSON.stringify(this.location));
        });
      }
      if ((res as any).action == 'create') {
        this.locationService.getAll().subscribe((data) => {

          this.location = data;
          localStorage.setItem('location', JSON.stringify(this.location));
        });
      }
    });
    if (localStorage.getItem('location') != null) {
      this.location = JSON.parse(localStorage.getItem('location'));
    } else {
      this.locationService.getAll().subscribe((data) => {
        this.location = data;
        localStorage.setItem('location', JSON.stringify(this.location));
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
    const index = this.location.indexOf(item);
    this.location.splice(index, 1);
    this.locationService.deleteLocation(item.id).subscribe(
      (el) => {
        localStorage.setItem('location',JSON.stringify(this.location))
        this.toastrService.success('MESSAGE_DELETE_FUELTYPE');
      },
      (error) => {
        this.toastrService.error('MESSAGE_ERROR');
      }
    );
  }

}
