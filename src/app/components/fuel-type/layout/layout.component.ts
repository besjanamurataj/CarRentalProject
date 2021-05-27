import { FuelTypeService } from './../../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { FuelType } from 'src/app/core/models/fuelType';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
fuelArr: FuelType[];
  constructor(private fuelService:FuelTypeService) { }

  ngOnInit(): void {
    // if(localStorage.getItem('data') != null){

    //     let data2 = localStorage.getItem('data');
    //    console.log('data');
    // }
    // else{
    //   this.fuelService.getFuelType().subscribe(data =>{
    //     localStorage.setItem('data',JSON.stringify(data));
    //     console.log('data2');
    //   });



   // }



  }

}
