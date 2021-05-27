import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadCrumb } from 'src/app/core/models/breadCrumb';
import { BreadcrumbsService } from 'src/app/core/service/breadcrumb/breadcrumbs.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(private breadcrumbService: BreadcrumbsService) {

  }

  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }



}

