import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Object } from 'src/app/models/object';
import { Department } from 'src/app/models/department';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-object-overview',
  templateUrl: './object-overview.component.html',
  styleUrls: ['./object-overview.component.css']
})
export class ObjectOverviewComponent implements OnInit {
  public id: string;
  public object: Object;
  public objects: Object[];
  public departments: Department[];
  public providers: Provider[];
  public defaultProvider: Provider;
  private subscription: any

  constructor(private route: ActivatedRoute) {
    this.departments = [new Department('Pipe', 'assets/images/departments/pipe.png'),
    new Department('Electro', 'assets/images/departments/electro.png'),
    new Department('Ventilation', 'assets/images/departments/ventilation.png')]
  }

  ngOnInit() {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.objects = resolvedData.company.objects;
    this.providers = resolvedData.company.providers;
    this.defaultProvider = this.providers[0];
    console.log(resolvedData.company.objects);

  
    this.subscription = this.route.params.subscribe(routeParams => {
      this.objects.forEach(element => {
        if (element.id.toString() === routeParams.id) {
          this.object = element;
        }
      });
    })
  }

  public handleValue(value: any) {
    console.log(this.defaultProvider);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
