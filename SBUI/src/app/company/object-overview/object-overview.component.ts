import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';
import { Object } from 'src/app/models/object';
import { ObjectService } from 'src/app/services/object.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-object-overview',
  templateUrl: './object-overview.component.html',
  styleUrls: ['./object-overview.component.css']
})
export class ObjectOverviewComponent implements OnInit {
  public id: string;
  public object: Object = new Object();
  public providers: Provider[];
  public defaultProvider: Provider;
  public departments: Department[];
  private subscription: any

  constructor(private route: ActivatedRoute, private objectService: ObjectService) {
  }

  ngOnInit() {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.defaultProvider = this.providers[0];

    this.subscription = this.route.params.subscribe(routeParams => {
      this.objectService.getObject(routeParams.id).subscribe(object => { this.object = object});
      this.objectService.getDepartmentsForObject(routeParams.id).subscribe(departments => { this.departments = departments });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
