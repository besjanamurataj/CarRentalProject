
import { Location } from '@angular/common';
import { TransmisiontypeService } from './../../../core/service/transmisiontype.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { TrasmisionType } from 'src/app/core/models/transmisionType';

@Component({
  selector: 'app-add-edit-transmision',
  templateUrl: './add-edit-transmision.component.html',
  styleUrls: ['./add-edit-transmision.component.css'],
})
export class AddEditTransmisionComponent implements OnInit {
  transmisionForm: FormGroup;
  TransmisionId: string;
  isAddModal: boolean;
  transmisionsArr: TrasmisionType[] = [];
  transArray: TrasmisionType[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private transmisionService: TransmisiontypeService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr: ToastrService,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.TransmisionId = this.route.snapshot.params['id'];
    this.isAddModal = !this.TransmisionId;
    this.transmisionForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle('Add');

  }
  get name(): FormControl {
    return this.transmisionForm.get('name') as FormControl;
  }

  save() {
    if (this.isAddModal) {
      this.createTransmision();
    } else {
      this.updateTransmision();
    }
  }
  createTransmision() {
    this.transmisionService.create(this.transmisionForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Transmision add ');
        this.router.navigate(['/home/transmision'], { relativeTo: this.route });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  updateTransmision() {
    this.transmisionService
      .update(this.TransmisionId, this.transmisionForm.value)
      .subscribe((data) => {
        this.toastr.success('Edit succefull');
        this.router.navigate(['/home/transmision'], { relativeTo: this.route });
      }),
      (error) => {
        console.error(error);
      };
  }
}
