import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from './../../core/service/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/core/models/model';
import { Title } from '@angular/platform-browser';
import { TITLE_MODEL } from './model.constants';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
   id: string;
  model: any;
  constructor(private modelService: ModelService, private title:Title, private router:Router,
    private route: ActivatedRoute,private confirmationService:ConfirmationService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.title.setTitle(TITLE_MODEL);
     this.getModels();
  }

  getModels(){
    this.modelService.getListById(this.id).subscribe(data =>{
      this.model = data;
     console.log(data);
    })
  }

  openConfirmation(model){
    this.confirmationService
    .confirm('Confirmation', 'Are you sure to delete?')
    .then((confirmed) => {
      if (confirmed) {
        this.deleteCar(model);
      }
    });
  }
   deleteCar(model){
     const index = this.model.indexOf(model);
     this.model.splice(index,1);
     this.modelService.deleteModel(model.id).subscribe(data =>{
      // this.modelService.success(MESSAGE_DELETE_CAR )
     }, (error) =>{
       // this.toastrService.error(MESSAGE_ERROR);
     })
   }




}
