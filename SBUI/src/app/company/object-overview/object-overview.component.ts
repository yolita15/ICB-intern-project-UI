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
  public providers: Provider[];
  public defaultProvider: Provider;
  private subscription: any

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.defaultProvider = this.providers[0];

    this.subscription = this.route.params.subscribe(routeParams => {
      resolvedData.company.objects.forEach(element => {
        if (element.id.toString() === routeParams.id) {
          this.object = element;
        }
      });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
