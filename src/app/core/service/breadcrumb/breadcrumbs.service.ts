import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadCrumb } from '../../models/breadCrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private readonly _breadcrumbs$ = new BehaviorSubject<BreadCrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: BreadCrumb[] = [];
      this.addBreadcrumb(root, breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }
  private addBreadcrumb(route: ActivatedRouteSnapshot, breadcrumbs: BreadCrumb[]) {
    if (route) {
      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data)
        };
        breadcrumbs.push(breadcrumb);
      }

      this.addBreadcrumb(route.firstChild, breadcrumbs);
    }
  }

  private getLabel(data: Data) {

    return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  }

}
