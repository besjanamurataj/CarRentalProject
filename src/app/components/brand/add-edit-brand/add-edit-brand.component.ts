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
import { Location } from '@angular/common';
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
    private toastr: ToastrService,
    private location:Location,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
    this.brandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle(TITLE_BRAND);
    if(this.id){
      this.getBrandById(this.id);
    }
  }

  get name(): FormControl {
    return this.brandForm.get('name') as FormControl;
  }

  save() {
    if (this.isAddModal) {
      this.createBrand();
    } else {
      this.updateBrand();
    }
  }
  createBrand() {
    this.brandService.create(this.brandForm.value).subscribe(
      (data) => {
        this.toastr.success(MESSAGE_ADD_BRAND);
        this.router.navigate(['/home/brand'], { relativeTo: this.route });
        console.log(data);
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }
  updateBrand() {
    this.brandService
      .update(this.id, this.brandForm.value)
      .subscribe((data) => {
        this.toastr.success(MESSAGE_UPDATE_BRAND);
        this.router.navigate(['/home/brand'], { relativeTo: this.route });
      }),
      (error) => {
        this.toastr.error(error);
      };
  }


  getBrandById(id){
    this.brandService.getElementById(this.id).subscribe(data =>{
      this.brandForm.patchValue({
       name:data.name
    })
     }),(error)=>{
        console.error(error);
     }
    }

    goBack(){
      this.location.back();
    }
}
