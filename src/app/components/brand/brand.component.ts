import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { BrandService } from './../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';




import { Brand } from 'src/app/core/models/brand';
import { MESSAGE_DELETE_BRAND, MESSAGE_ERROR } from './brand.constant';


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
    private toastr:ToastrService,
    private route:ActivatedRoute


  ) {}
  ngOnInit() {

    this.route.queryParams.subscribe(res=> {
      if((res as any).action =='update') {
       this.brandService.getAll().subscribe(data =>{
         debugger
         this.brand = data
         localStorage.removeItem('data')
         localStorage.setItem("data", JSON.stringify(this.brand))
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
       this.brandService.getAll().subscribe(data =>{
         debugger
         this.brand = data
         localStorage.removeItem('data')
         localStorage.setItem("data", JSON.stringify(this.brand))
       })
     }
     })
     if(localStorage.getItem('data')!= null){
       this.brand = JSON.parse(localStorage.getItem('data'));
     }
     else{
       this.brandService.getAll().subscribe(data =>{
         this.brand = data
         localStorage.setItem("data", JSON.stringify(this.brand)) 
       })
     
     }















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
