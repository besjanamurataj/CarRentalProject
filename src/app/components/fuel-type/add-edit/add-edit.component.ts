
import { error } from 'selenium-webdriver';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { FuelType } from 'src/app/core/models/fuelType';
import { FuelTypeService } from './../../../core/service/fuel-type.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  MESSAGE_ADD_FUELTYPE,
  MESSAGE_ERROR,
  MESSAGE_UPDATE_FUELTYPE,
} from '../fueltype.constant';
import { NavigationService } from 'src/app/core/service/navigation/navigation.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  @Input() item: FuelType;
  fuelTypeForm: FormGroup;
  id: string;
  isAddModal: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelTypeService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr: ToastrService,
    private navigation:NavigationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
    this.fuelTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle('Add');
    if(this.id){
      this.getFuelType(this.id);
    }


  }
  get name(): FormControl {
    return this.fuelTypeForm.get('name') as FormControl;
  }
  save() {

    if(this.name.hasError('required')){
      this.toastr.error('Put the value');
    }else{
      if (this.isAddModal) {
        this.createFuelType();
      } else {
        this.updateFuelType();
      }
    }

  }

  createFuelType() {
    this.fuelService.create(this.fuelTypeForm.value).subscribe(
      (data) => {
        this.toastr.success(MESSAGE_ADD_FUELTYPE);
        this.router.navigate(['/home/fueltype'], { relativeTo: this.route, queryParams: {id: this.id , action: 'create' }});

      },
      (error) => {
       this.toastr.error(MESSAGE_ERROR);
      }
    );
  }
  updateFuelType() {
    this.fuelService
      .update(this.id, this.fuelTypeForm.value)
      .subscribe((data) => {
        this.toastr.success(MESSAGE_UPDATE_FUELTYPE);
        if (localStorage.getItem('transmision') != null)   {
          let array =( JSON.parse(localStorage.getItem('data')) as FuelType[])
          array.map(el => {
             if (el.id ==this.id ){

               el =data

               return data;
             }
           })

        }
        this.router.navigate(['/home/fueltype'],{ relativeTo: this.route, queryParams: {id: this.id , action: 'update' }});
      }),
      (error) => {
        this.toastr.error(MESSAGE_ERROR)
      };
  }

  getFuelType(id){
    this.fuelService.getElementById(this.id).subscribe(data =>{
     this.fuelTypeForm.patchValue({
       name:data.name
     })
    }),(error)=>{
       this.toastr.error(MESSAGE_ERROR);
    }
  }

}
