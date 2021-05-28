// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LocationService } from 'src/app/core/service/location/location.service';
// import { ToastrService } from 'src/app/core/service/toastr.service';

// @Component({
//   selector: 'app-add-edit-location',
//   templateUrl: './add-edit-location.component.html',
//   styleUrls: ['./add-edit-location.component.css']
// })
// export class AddEditLocationComponent implements OnInit {
//  location:Location [] =[];
//  locationForm: FormGroup;
//   id: string;
//   isAddModal: boolean;
//   constructor(
//     private formBuilder: FormBuilder,
//     private locationService: LocationService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private title: Title,
//     private toastr: ToastrService,

//   ) {}

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.isAddModal = !this.id;
//     this.locationForm = this.formBuilder.group({
//       country: ['', Validators.required],
//       city: ['', Validators.required],
//       zipCode: ['', Validators.required],
//       streetAdress: ['', Validators.required],
//     });
//     this.title.setTitle('Add');
//     if(this.id){
//       this.getLocationById(this.id);
//     }


//   }
//   get streetAdress(): FormControl {
//     return this.locationForm.get('streetAdress') as FormControl;
//   }
//   get city(): FormControl {
//     return this.locationForm.get('city') as FormControl;
//   }
//   get zipCode(): FormControl {
//     return this.locationForm.get('zipCode') as FormControl;
//   }
//   get country(): FormControl {
//     return this.locationForm.get('country') as FormControl;
//   }
//   save() {

//     if(this.streetAdress.hasError('required') || (this.city.hasError('required')|| (this.zipCode.hasError('required') ||(this.country.hasError('required') ){
//       this.toastr.error('Put the value');
//     }else{
//       if (this.isAddModal) {
//         this.createFuelType();
//       } else {
//         this.updateFuelType();
//       }
//     }

//   }

//   createFuelType() {
//     this.locationService.create(this.locationForm.value).subscribe(
//       (data) => {
//         this.toastr.success('MESSAGE_ADD_FUELTYPE');
//         this.router.navigate(['/home/location'], { relativeTo: this.route, queryParams: {id: this.id , action: 'create' }});

//       },
//       (error) => {
//        this.toastr.error('MESSAGE_ERROR');
//       }
//     );
//   }
//   updateFuelType() {
//     this.locationService
//       .update(this.id, this.locationForm.value)
//       .subscribe((data) => {
//         this.toastr.success('MESSAGE_UPDATE_FUELTYPE');
        // if (localStorage.getItem('transmision') != null)   {
        //   let array =( JSON.parse(localStorage.getItem('data')) as Location[])
        //   array.map(el => {
        //      if (el.id ==this.id ){

        //        el =data

        //        return data;
        //      }
        //    })

        // }
//         this.router.navigate(['/home/location'],{ relativeTo: this.route, queryParams: {id: this.id , action: 'update' }});
//       }),
//       (error) => {
//         this.toastr.error('MESSAGE_ERROR')
//       };
//   }

//   getLocationById(id){
//     this.locationService.getElementById(this.id).subscribe(data =>{
//      this.locationForm.patchValue({

//      })
//     }),(error)=>{
//        this.toastr.error('MESSAGE_ERROR');
//     }
//   }

// }
