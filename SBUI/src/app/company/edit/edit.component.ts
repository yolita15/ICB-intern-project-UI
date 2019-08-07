import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';
import { Object } from 'src/app/models/object';
import { ObjectService } from 'src/app/services/object.service';
import { Tfm } from 'src/app/models/tfm';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { UserService } from 'src/app/services/user.service';
import { UserTypeService } from 'src/app/services/user-type.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public object: Object;
  public objectUsers: User[];
  public users: User[];
  public userTypes: UserType[];
  public providers: Provider[];
  public selectedProvider: Provider;

  private id: string;

  constructor(private route: ActivatedRoute, private objectService: ObjectService,
    private userService: UserService, private userTypeService: UserTypeService) {
    this.object = new Object();
    this.object.tfm = new Tfm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.selectedProvider = this.providers[0];

    this.objectService.getObject(this.id).subscribe(object => this.object = object);
    this.objectService.getUsersForObject(this.id).subscribe(users => this.objectUsers = users);
    this.userTypeService.getAllUsers().subscribe(userTypes => this.userTypes = userTypes);
  }

  public onGetCoordsClicked() {
    navigator.geolocation.getCurrentPosition(position => {
      this.object.latitude = position.coords.latitude;
      this.object.longitude = position.coords.longitude;
    });
  }

  public onUserAutocompleteClick() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  public getUserValue(userType: string): string {
    let result = this.objectUsers.find(u => u.type.name === userType);
    return (result ? result.name : '');
  }
}
