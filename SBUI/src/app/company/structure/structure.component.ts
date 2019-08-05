import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { ObjectType } from 'src/app/models/object-type';
import { Tfm } from 'src/app/models/tfm';
import { ComboBoxComponent, AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyResolved, Company } from 'src/app/models/company';
import { TfmService } from 'src/app/services/tfm.service';
import { ObjectTypeService } from 'src/app/services/object-type.service';
import { ObjectService } from 'src/app/services/object.service';
import { IObject } from 'src/app/models/object';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})

export class StructureComponent implements OnInit {

  private company: Company;
  public objectTypes: ObjectType[];
  @ViewChild('typesCombobox') typesCombobox: ComboBoxComponent;

  public objects: IObject[];
  public selectedObjects: any[] = [];
  public showObjects: boolean = false;
  @ViewChild('objectsAutocomplete') objectsAutocomplete: AutoCompleteComponent;
  @ViewChild('objectsButton') objectsButton: ElementRef;

  public tfms: Tfm[];
  public selectedTfms: any[] = [];
  public showTfms: boolean = false;
  @ViewChild('tfmsAutocomplete') tfmsAutocomplete: AutoCompleteComponent;
  @ViewChild('tfmsButton') tfmsButton: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private tfmService: TfmService,
    private objectTypeService: ObjectTypeService, private objectService: ObjectService) { }

  ngOnInit(): void {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.company = resolvedData.company;

    this.objectService.getObjectsForCompany(this.company.id).subscribe(objects => { this.objects = objects; console.log(this.objects) })
    this.objectTypeService.getObjectTypes().subscribe(objectTypes => { this.objectTypes = objectTypes; console.log(this.objectTypes) });
    this.tfmService.getTfms().subscribe(tfms => { this.tfms = tfms; console.log(this.tfms) });
  }

  public handleSelection({ dataItem }: any) {
    this.router.navigate([`${dataItem.id}`], { relativeTo: this.route });
  }

  public onObjectsAutocompleteValueChange(value: any) {
    if (this.selectedObjects.length === 0) {
      this.selectedObjects.push(value);
    } else {
      this.selectedObjects.pop();
      this.selectedObjects.push(value);
    }
  }

  public onTfmsAutocompleteValueChange(value: any) {
    if (this.selectedTfms.length === 0) {
      this.selectedTfms.push(value);
    } else {
      this.selectedTfms.pop();
      this.selectedTfms.push(value);
    }
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27 || event.keyCode === 13) {
      this.toggleTfms(false);
      this.toggleObjects(false);
    }
  }

  public toggleTfms(show?: boolean): void {
    this.showTfms = show !== undefined ? show : !this.showTfms;
  }

  public toggleObjects(show?: boolean): void {
    this.showObjects = show !== undefined ? show : !this.showObjects;
  }

  public onClearClicked() {
    this.objectsAutocomplete.reset();
    this.selectedObjects.pop();
    this.typesCombobox.reset();
    this.tfmsAutocomplete.reset();
    this.selectedTfms.pop();

    this.router.navigate([`company/structure`]);
  }
}
