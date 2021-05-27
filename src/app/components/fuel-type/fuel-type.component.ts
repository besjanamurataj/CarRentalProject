import { error } from 'selenium-webdriver';
import { FuelType } from './../../core/models/fuelType';
import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { FuelTypeService } from './../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { MESSAGE_DELETE_FUELTYPE} from './fueltype.constant';
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
    this.route.queryParams.subscribe(res=> {
      if((res as any).action =='update') {
       this.fuelService.getFuelType().subscribe(data =>{
         debugger
         this.fuelType
         = data
         localStorage.removeItem('data')
         localStorage.setItem("data", JSON.stringify(this.fuelType))
       })
    }
    if((res as any).action =='delete') {
         let array =  JSON.parse(localStorage.getItem("data")) ;
         array.filter(el => {
           return el.id != res.id
         })
         localStorage.removeItem('data');
         localStorage.setItem('data', JSON.stringify(array))
      }
      if((res as any).action =='create') {
 
       this.fuelService.getFuelType().subscribe(data =>{
         debugger
         this.fuelType = data
         localStorage.removeItem('data')
         localStorage.setItem("data", JSON.stringify(this.fuelType))
       })
     }
     
     
     
     
     })
     if(localStorage.getItem('data')!= null){
       this.fuelType = JSON.parse(localStorage.getItem('data'));
       //testoje pak dy sekonda
     }
     else{
       this.fuelService.getFuelType().subscribe(data =>{
         this.fuelType = data
         localStorage.setItem("data", JSON.stringify(this.fuelType)) 
       })
     
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
