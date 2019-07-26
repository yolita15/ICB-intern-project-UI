import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';
import { Object } from 'src/app/models/object';
import { ObjectService } from 'src/app/services/object.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public object: Object;
  public providers: Provider[];
  public selectedProvider: Provider;
  private id: string;
  constructor(private route: ActivatedRoute, private objectService: ObjectService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.selectedProvider = this.providers[0];
    this.objectService.getObject(this.id).subscribe(object => this.object = object);
  }

  public onGetCoordsClicked() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.object.latitude = position.coords.latitude;
      this.object.longitude = position.coords.longitude;
    });
  }
}
