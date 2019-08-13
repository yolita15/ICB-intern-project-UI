import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyResolved } from 'src/app/models/company';
import { Provider } from 'src/app/models/provider';
import { Object } from 'src/app/models/object';
import { ObjectService } from 'src/app/services/object.service';
import { Tfm } from 'src/app/models/tfm';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { UserService } from 'src/app/services/user.service';
import { UserTypeService } from 'src/app/services/user-type.service';
import { TfmService } from 'src/app/services/tfm.service';
import { Department } from 'src/app/models/department';
import { FileInfo } from '@progress/kendo-angular-upload';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public object: Object;
  public tfms: Tfm[];
  public newDeparements: Department[];
  public departmentsToBeRemoved: Department[];
  public users: User[];
  public applyForChildren: string;

  public userTypes: UserType[];
  public providers: Provider[];
  public selectedProvider: Provider;

  public saveUrl: string = '';
  public myImage: FileInfo;

  private id: string;

  constructor(private route: ActivatedRoute, private router: Router, private objectService: ObjectService,
    private userService: UserService, private userTypeService: UserTypeService, private tfmService: TfmService) {
    this.object = new Object();
    this.object.tfm = new Tfm();
    this.users = new Array();
    this.newDeparements = new Array();
    this.departmentsToBeRemoved = new Array();
    this.applyForChildren = '0';
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.providers = resolvedData.company.providers;
    this.selectedProvider = this.providers[0];

    this.objectService.getObject(this.id).subscribe(object => this.object = object);
    this.userTypeService.getAllUserTypes().subscribe(userTypes => this.userTypes = userTypes);
  }

  public onChange() {
    console.log(this.applyForChildren);
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

  public onTfmsAutocompleteClick() {
    this.tfmService.getTfms().subscribe(tfms => this.tfms = tfms);
  }

  public onTfmsAutocompleteValueChange(value: any) {
    if (this.tfms) {
      let selectedTfm = this.tfms.find(t => t.dataToDisplay === value);
      this.object.tfm = selectedTfm;
      this.object.tfmId = selectedTfm.id;
    }
  }

  public isForObject(department: Department): boolean {
    return this.object.departments.find(d => d.id === department.id) ? true : false;
  }

  public handleDepartmentsChecking(department: Department, isChecked: boolean) {
    if (isChecked === false) {
      let index = this.newDeparements.findIndex(d => d === department)
      if (index !== -1) {
        this.newDeparements.splice(index, 1);
      } else {
        this.newDeparements.push(department);
      }
    } else {
      let index = this.departmentsToBeRemoved.findIndex(d => d === department)
      if (index !== -1) {
        this.departmentsToBeRemoved.splice(index, 1);
      } else {
        this.departmentsToBeRemoved.push(department);
      }
    }
    console.log(this.newDeparements);
  }

  public getUserValue(userType: string): string {
    let result = this.object.users.find(u => u.type.name === userType);
    return (result ? result.name : '');
  }

  public onSaveClicked(obj: Object) {
    this.object.departments.forEach(department => {
      if (!this.departmentsToBeRemoved.find(d => d.id === department.id)) {
        this.newDeparements.push(department);
      }
    });
    this.object.departments = this.newDeparements;
    console.log(this.newDeparements);
    this.objectService.updateObject(obj, this.applyForChildren).subscribe(() => this.onSaveComplete());
  }

  onSaveComplete(): void {
    this.router.navigate([`/company/structure/${this.object.id}`]);
  }
}
