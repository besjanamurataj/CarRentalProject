import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { BrandService } from './../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


import { Brand } from 'src/app/core/models/brand';
import { MESSAGE_DELETE_BRAND, MESSAGE_ERROR } from './brand.constant';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {

  brand: Brand [] = [];
  constructor(
    private brandService: BrandService,
    private confirmationService: ConfirmationService,
    private toastr:ToastrService
  ) {}
  ngOnInit() {
    this.getBrand();
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
    const index = this.brand.indexOf(item)
   this.brandService.delete(item.id).subscribe((data) => {
    this.brand.splice(index,1);
    this.toastr.success(MESSAGE_DELETE_BRAND);
    }), (error)=>{
      console.error(error)
    };
  }

  getBrand() {
    this.brandService.getAll().subscribe((data) => {
      console.log(data);
      this.brand = data;


    },
    (error) => {
      console.error(error);
    });
  }

}
