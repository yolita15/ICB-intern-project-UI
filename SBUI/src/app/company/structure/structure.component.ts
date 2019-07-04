import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Type } from 'src/app/models/type';
import { Object } from 'src/app/models/object';
import { Tfm } from 'src/app/models/tfm';
import { ComboBoxComponent, AutoCompleteComponent, PopupComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})

export class StructureComponent {

  public types: Type[];
  @ViewChild('typesCombobox') typesCombobox: ComboBoxComponent;

  public objects: Object[];
  public selectedObjects: any[] = [];
  public showObjects: boolean = false;
  @ViewChild('objectsAutocomplete') objectsAutocomplete: AutoCompleteComponent;
  @ViewChild('objectsButton') objectsButton: ElementRef;

  public tfms: Tfm[];
  public selectedTfms: any[] = [];
  public showTfms: boolean = false;
  @ViewChild('tfmsAutocomplete') tfmsAutocomplete: AutoCompleteComponent;
  @ViewChild('tfmsButton') tfmsButton: ElementRef;

  constructor() {
    this.types = [new Type("Bulding"), new Type("Floor"), new Type("Room")];
    this.objects = [new Object("ICB"), new Object("Niproruda"), new Object("Floor1")];
    this.tfms = [new Tfm("Bulding", "221"), new Tfm("Floor", "21"), new Tfm("Computer", "3")];
  }

  public onObjectsAutocompleteValueChange(value: any) {
    if (this.selectedObjects.length == 0) {
      this.selectedObjects.push(value);
    } else {
      this.selectedObjects.pop();
      this.selectedObjects.push(value);
    }
  }

  public onTfmsAutocompleteValueChange(value: any) {
    if (this.selectedTfms.length == 0) {
      this.selectedTfms.push(value);
    } else {
      this.selectedTfms.pop();
      this.selectedTfms.push(value);
    }
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27 || event.keyCode == 13) {
      this.toggleTfms(false);
      this.toggleObjects(false);
    }
  }

  @HostListener('click', ['$event'])
  public documentClick(event: any): void {
    if (!this.containsTfms(event.target)) {
      this.toggleTfms(false);
    }

    if (!this.containsObjects(event.target)) {
      this.toggleObjects(false);
    }
  }

  public toggleTfms(show?: boolean): void {
    this.showTfms = show !== undefined ? show : !this.showTfms;
  }

  public toggleObjects(show?: boolean): void {
    this.showObjects = show !== undefined ? show : !this.showObjects;
  }

  private containsTfms(target: any): boolean {
    return this.tfmsButton.nativeElement.contains(target);
  }

  private containsObjects(target: any): boolean {
    return this.objectsButton.nativeElement.contains(target);
  }

  public onClearClicked() {
    this.objectsAutocomplete.reset();
    this.selectedObjects.pop();
    this.typesCombobox.reset();
    this.tfmsAutocomplete.reset();
    this.selectedTfms.pop();
  }
}
