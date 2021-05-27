import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { TrasmisionType } from './../../core/models/transmisionType';
import { TransmisiontypeService } from './../../core/service/transmisiontype.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transmision-type',
  templateUrl: './transmision-type.component.html',
  styleUrls: ['./transmision-type.component.css']
})
export class TransmisionTypeComponent implements OnInit {
transmisionsArr: TrasmisionType [] =[];
  constructor(private transmisionService:TransmisiontypeService, 
    private confirmationService:ConfirmationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe(res=> {
     if((res as any).action =='update') {
      this.transmisionService.getAll().subscribe(data =>{
        debugger
        this.transmisionsArr = data
        localStorage.removeItem('data')
        localStorage.setItem("data", JSON.stringify(this.transmisionsArr))
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
      this.transmisionService.getAll().subscribe(data =>{
        debugger
        this.transmisionsArr = data
        localStorage.removeItem('data')
        localStorage.setItem("data", JSON.stringify(this.transmisionsArr))
      })
    }
    })
    if(localStorage.getItem('data')!= null){
      this.transmisionsArr = JSON.parse(localStorage.getItem('data'));
    }
    else{
      this.transmisionService.getAll().subscribe(data =>{
        this.transmisionsArr = data
        localStorage.setItem("data", JSON.stringify(this.transmisionsArr)) 
      })
    
    }

  }
  openConfirmation(item){
    this.confirmationService
    .confirm('Confirmation', 'Are you sure to delete?')
    .then((confirmed) => {
      if (confirmed) {
        this.deleteTransmisions(item);
      }
    });

  }
  deleteTransmisions(item){
    const index= this.transmisionsArr.indexOf(item);
    this.transmisionsArr.splice(index,1);
    this.transmisionService.delete(item.id).subscribe(data =>{

    })
  }
}
