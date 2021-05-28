import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { TrasmisionType } from './../../core/models/transmisionType';
import { TransmisiontypeService } from './../../core/service/transmisiontype.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transmision-type',
  templateUrl: './transmision-type.component.html',
  styleUrls: ['./transmision-type.component.css'],
})
export class TransmisionTypeComponent implements OnInit {
  transmisionsArr: TrasmisionType[] = [];
  constructor(
    private transmisionService: TransmisiontypeService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      if ((res as any).action == 'update') {
        this.transmisionService.getAll().subscribe((data) => {
          this.transmisionsArr = data;
          localStorage.removeItem('transmisionData');
          localStorage.setItem('transmisionData', JSON.stringify(this.transmisionsArr));
        });
      }
      if ((res as any).action == 'create') {
        this.transmisionService.getAll().subscribe((data) => {

          this.transmisionsArr = data;
          localStorage.setItem('transmisionData', JSON.stringify(this.transmisionsArr));
        });
      }
    });
    if (localStorage.getItem('transmisionData') != null) {
      this.transmisionsArr = JSON.parse(localStorage.getItem('transmisionData'));
    } else {
      this.transmisionService.getAll().subscribe((data) => {
        this.transmisionsArr = data;
        localStorage.setItem('transmisionData', JSON.stringify(this.transmisionsArr));
      });
    }
  }
  openConfirmation(item) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteTransmisions(item);
        }
      });
  }
  deleteTransmisions(item) {
    const index = this.transmisionsArr.indexOf(item);
    this.transmisionsArr.splice(index, 1);
    this.transmisionService.delete(item.id).subscribe((data) => {
      localStorage.setItem('transmisionData',JSON.stringify(this.transmisionsArr));
    });
  }
}
