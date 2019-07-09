import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Object } from 'src/app/models/object';
import { Department } from 'src/app/models/department';

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

  constructor(private route: ActivatedRoute, ) {
    this.objects = [new Object("ICB", 1), new Object("Niproruda", 2), new Object("Floor1", 3)];
    this.departments = [ new Department('Pipe', 'assets/images/departments/pipe.png'),
        new Department('Electro', 'assets/images/departments/electro.png'),
        new Department('Ventilation', 'assets/images/departments/ventilation.png') ]
  }

  public providers: Array<string> = ["CHEZ", "Sofiiska Water"];

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.objects.forEach(element => {
        if (element.id.toString() === routeParams.id) {
          this.object = element;
        }
      });
    });
  }
}
