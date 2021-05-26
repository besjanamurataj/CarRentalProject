import { NavigationService } from './../../../core/service/navigation/navigation.service';
import { AddModel } from './../../../core/models/AddModels';
import { Router, ActivatedRoute, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from './../../../core/service/toastr.service';
import { BrandService } from 'src/app/core/service/brand.service';
import { ModelService } from './../../../core/service/model.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/core/models/brand';
import { MESSAGE_ADD_MODEL, TITLE_MODEL } from '../model.constants';
import { Model } from 'src/app/core/models/model';


@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {
 modelForm:FormGroup;
 id:string;
 isAddModal : boolean;
 brandArr:Brand[] =[];
 model:Model [] =[];
  constructor(private formBuilder:FormBuilder, private modelService: ModelService, private brandService:BrandService,
    private toastr:ToastrService, private title:Title, private router:Router, private route:ActivatedRoute,
    private navigation:NavigationService
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
   this.modelForm = this.formBuilder.group({
     brandId:['',Validators.required],
     name:['',Validators.required]
   })
   this.title.setTitle(TITLE_MODEL);
   this.getListBrand();
   if( this.id){
    this.getModelById(this.id);
   }

  }
  get brandId():FormControl{
    return this.modelForm.get('brandId') as FormControl
  }
  get name():FormControl{
    return this.modelForm.get('name') as FormControl
  }
  save(){
    if(this.isAddModal)
    {
      this.createModel();
    }
    else{
      this.updateModel();
    }
  }

  getListBrand(){
    this.brandService.getAll().subscribe(
      data =>{
        this.brandArr = data;
        console.log(this.brandArr)
      }
    )
  }
  createModel(){
    console.log(this.modelForm.value);

    this.modelService.createModel(this.modelForm.value).subscribe((data)=>{
      console.log(data);
          //  console.log(this.modelForm.value);
           this.router.navigate(['/home/model'], { relativeTo: this.route });
           this.toastr.success(MESSAGE_ADD_MODEL)
    })
  }
updateModel(){
  this.modelService.updateModel(this.id, this.modelForm.value).subscribe(data=>{
    this.router.navigate(['/home/model'], { relativeTo: this.route });
    console.log(data);
  }), (error) =>{
    console.error(error);
  }
}


getModelById(id){
  this.modelService.getElementById(this.id).subscribe(data =>{
       this.modelForm.patchValue({
          name:data.name,
          brandId:data.brandId,
       })
  })
}

back(){
  this.navigation.back();
}

}
