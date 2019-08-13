import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';
import { Object, IObject } from 'src/app/models/object';
import { ObjectService } from 'src/app/services/object.service';
import { Department } from 'src/app/models/department';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-object-overview',
  templateUrl: './object-overview.component.html',
  styleUrls: ['./object-overview.component.css']
})
export class ObjectOverviewComponent implements OnInit {
  public id: string;
  public object: Object;
  public path: string;
  public providers: Provider[];
  public defaultProvider: Provider;
  public users: User[];
  private subscription: any

  constructor(private route: ActivatedRoute, private objectService: ObjectService) {
    this.object = new Object();
    this.object.departments = new Array();
    this.object.users = new Array();
  }

  ngOnInit() {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.defaultProvider = this.providers[0];

    this.subscription = this.route.params.subscribe(routeParams => {
      this.objectService.getObject(routeParams.id).subscribe(object => this.object = object);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public departmentsForObject(provider: Provider): Department[]{
    return this.object.departments.filter(o => o.provider.id === provider.id);
  }
}
