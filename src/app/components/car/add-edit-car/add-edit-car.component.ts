import { error } from 'selenium-webdriver';
import { ToastrService } from './../../../core/service/toastr.service';
import { TrasmisionType } from './../../../core/models/transmisionType';
import { TransmisiontypeService } from './../../../core/service/transmisiontype.service';
import { FuelTypeService } from './../../../core/service/fuel-type.service';
import { BrandService } from 'src/app/core/service/brand.service';
import { CarService } from './../../../core/service/car.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';
import { Brand } from 'src/app/core/models/brand';
import { FuelType } from 'src/app/core/models/fuelType';
import { ModelService } from 'src/app/core/service/model.service';
import { Model } from 'src/app/core/models/model';
import { Title } from '@angular/platform-browser';
import {
  MESSAGE_ADD_CAR,
  MESSAGE_ADD_ERROR,
  MESSAGE_ERROR,
  TITLE_CAR,
} from '../car.constant';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css'],
})
export class AddEditCarComponent implements OnInit {
  car: Car;
  id: string;
  isAddModal: boolean;
  brandArr: Brand[] = [];
  fuelArray: FuelType[] = [];
  modelsArr: any;
  transmisionsArr: TrasmisionType[] = [];
  carForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private fueltypeService: FuelTypeService,
    private modelService: ModelService,
    private brandService: BrandService,
    private toastr: ToastrService,
    private transmisionService: TransmisiontypeService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.isAddModal = !this.id;
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      fuelType: ['', Validators.required],
      number: ['', Validators.required],
      model: ['', Validators.required],
      transmisionType: ['', Validators.required],
      numberOfDoors: ['', Validators.required],
      carCapacity: ['', Validators.required],
      carColor: ['', Validators.required],
      priceForDay: ['', Validators.required],
      carLocation: ['', Validators.required],
      description: [''],
    });
    this.title.setTitle(TITLE_CAR);
    this.getListBrand();
    this.getFuelType();
    this.getTransmisionType();
  }
  get brand(): FormControl {
    return this.carForm.get('brand') as FormControl;
  }
  get fuelType(): FormControl {
    return this.carForm.get('fuelType') as FormControl;
  }
  get transmisionType(): FormControl {
    return this.carForm.get('transmisionType') as FormControl;
  }
  get number(): FormControl {
    return this.carForm.get('number') as FormControl;
  }
  get carColor(): FormControl {
    return this.carForm.get('model') as FormControl;
  }
  get numberOfDoors(): FormControl {
    return this.carForm.get('numberOfDoors') as FormControl;
  }
  get carCapacity(): FormControl {
    return this.carForm.get('carCapacity') as FormControl;
  }
  get model(): FormControl {
    return this.carForm.get('model') as FormControl;
  }
  get priceForDay(): FormControl {
    return this.carForm.get('priceForDay') as FormControl;
  }
  get carLocation(): FormControl {
    return this.carForm.get('carLocation') as FormControl;
  }
  get description(): FormControl {
    return this.carForm.get('description') as FormControl;
  }

  save() {
    // if(this.brand.hasError('required')||this.fuelType.hasError('required')|| this.transmisionType.hasError('required')||this.number.hasError('required')
    // ||this.carColor.hasError('required')|| this.numberOfDoors.hasError('required')||this.carCapacity.hasError('required')
    // ||this.model.hasError('required')|| this.priceForDay.hasError('required')||this.carLocation.hasError('required')){

    //this.toastr.error('Put value');
    // }
    // else
    {
      if (this.isAddModal) {
        this.createCar();
      } else {
        this.updateCar();
      }
    }

  }
  createCar() {
    this.carService.create(this.carForm.value).subscribe(
      (data) => {
        console.log(this.carForm.value);
        console.log(data);
        this.router.navigate(['/home/car'], { relativeTo: this.route, queryParams: {id: this.id , action: 'create' }});
        this.toastr.success(MESSAGE_ADD_CAR);
      },
    );
  }


  updateCar() {
    this.carService.update(this.id, this.carForm.value).subscribe((data) => {
      this.toastr.success(MESSAGE_ADD_CAR);

      if (localStorage.getItem('data') != null)   {
        let array =( JSON.parse(localStorage.getItem('data')) as Car[])
        array.map(el => {
           if (el.id ==this.id ){

             el =data
             return data;
           }
         })

      }
      this.router.navigate(['/home/car'],  { relativeTo: this.route, queryParams: {id: this.id , action: 'update' }});
    }), (error) =>{
      console.error(error);
    };
  }

  getListBrand() {
    this.brandService.getAll().subscribe((data) => {
      this.brandArr = data;
      console.log(this.brandArr);
    }),(error)=>{
      console.log(error)
    };
  }

  getModels(id) {
    if (id) {
      this.modelService.getListById(id).subscribe((data) => {
        this.modelsArr = data;
      });
    }
  }

  getFuelType() {
    this.fueltypeService.getFuelType().subscribe((data) => {
      this.fuelArray = data;
    });
  }
  getTransmisionType() {
    this.transmisionService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.transmisionsArr = data;
      }
    );
  }
}
