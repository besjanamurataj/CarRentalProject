import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { BrandService } from './../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Brand } from 'src/app/core/models/brand';
import { MESSAGE_DELETE_BRAND, MESSAGE_ERROR } from './brand.constant';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand: Brand[] = [];
  constructor(
    private brandService: BrandService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerOverlayService
  ) {}
  ngOnInit() {

    this.route.queryParams.subscribe((res) => {

      if ((res as any).action == 'update') {
        this.spinnerService.show();
        this.brandService.getAll().subscribe((data) => {
          this.brand = data;
          this.spinnerService.hide();
          localStorage.removeItem('breaddata');
          localStorage.setItem('breaddata', JSON.stringify(this.brand));

        });
      }
      if ((res as any).action == 'create') {
        this.brandService.getAll().subscribe((data) => {
          this.brand = data;
          localStorage.setItem('breaddata', JSON.stringify(this.brand));
        });
      }
    });
    if (localStorage.getItem('breaddata') != null) {
      this.brand = JSON.parse(localStorage.getItem('breaddata'));
    } else {

      this.brandService.getAll().subscribe((data) => {
        this.brand = data;
       localStorage.setItem('breaddata', JSON.stringify(this.brand));

      } );
    }
  }

  openConfirm(post) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteBrand(post);
        }
      });
  }
  deleteBrand(item) {
    const index = this.brand.indexOf(item);
    this.brand.splice(index, 1);
    this.brandService.delete(item.id).subscribe((data) => {
      this.toastr.success(MESSAGE_DELETE_BRAND);
      localStorage.setItem('breaddata', JSON.stringify(this.brand));
    }),
      (error) => {
        this.toastr.error(MESSAGE_ERROR);
      };
  }



}


