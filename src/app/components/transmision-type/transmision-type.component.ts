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
  constructor(private transmisionService:TransmisiontypeService, private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
  this.transmisionService.getAll().subscribe(data =>{
    this.transmisionsArr = data
  })
  }



  // getTransmisions(){
  //   this.transmisionService.getAll().subscribe(data =>{
  //     console.log(data);

  //         this.transmisionsArr = data;
  //   })

  // }

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
