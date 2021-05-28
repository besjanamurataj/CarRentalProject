import { MESSAGE_ERROR } from './../../model/model.constants';
import { Brand } from './../../../core/models/brand';

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/core/service/brand.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import {
  MESSAGE_ADD_BRAND,
  MESSAGE_UPDATE_BRAND,
  TITLE_BRAND,
} from '../brand.constant';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css'],
})
export class AddEditBrandComponent implements OnInit {
  brandForm: FormGroup;
  id: string;
  isAddModal: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
    this.brandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle(TITLE_BRAND);
    if (this.id) {
      this.getBrandById(this.id);
    }
  }

  get name(): FormControl {
    return this.brandForm.get('name') as FormControl;
  }
  save() {
    if (this.name.hasError('name')) {
      this.toastr.error('Put the value');
    } else {
      if (this.isAddModal) {
        this.createBrand();
      } else {
        this.updateBrand();
      }
    }
  }
  createBrand() {
    this.brandService.create(this.brandForm.value).subscribe(
      (data) => {
        this.toastr.success(MESSAGE_ADD_BRAND);
        this.router.navigate(['/home/brand'], { relativeTo: this.route,  queryParams: {id: this.id , action: 'create'}});
      },
      (error) => {
        this.toastr.error(MESSAGE_ERROR);
      }
    );
  }
  updateBrand() {
    this.brandService
      .update(this.id, this.brandForm.value)
      .subscribe((data) => {
        this.toastr.success(MESSAGE_UPDATE_BRAND);
        if (localStorage.getItem('data') != null) {
          let array = JSON.parse(localStorage.getItem('data')) as Brand[];
          array.map((el) => {
            if (el.id == this.id) {
              el = data;
              return data;
            }
          });
        }
        this.router.navigate(['/home/brand'], {
          relativeTo: this.route,
          queryParams: { id: this.id, action: 'update' },
        });
      }),
      (error) => {
        this.toastr.error(MESSAGE_ERROR);
      };
  }
  getBrandById(id) {
    this.brandService.getElementModelById(this.id).subscribe(data => {
      this.brandForm.patchValue({
        name: data.name,
      });
    }),
      (error) => {
        this.toastr.error(MESSAGE_ERROR);
      };
  }
}
