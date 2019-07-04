import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Type } from 'src/app/models/type';
import { Object } from 'src/app/models/object';
import { Tfm } from 'src/app/models/tfm';
import { ComboBoxComponent, AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})

export class StructureComponent {

  public types: Type[];

  public objects: Object[];
  public selectedObjects: any[] = [];
  public showObjects: boolean = false;

  public tfms: Tfm[];
  public selectedTfms: any[] = [];
  public showTfms: boolean = false;

  constructor() {
    this.types = [new Type("Bulding"), new Type("Floor"), new Type("Room")];
    this.objects = [new Object("ICB"), new Object("Niproruda"), new Object("Floor1")];
    this.tfms = [new Tfm("Bulding", "221"), new Tfm("Floor", "21"), new Tfm("Computer", "3")];
  }

  @ViewChild('typesCombobox') typesCombobox: ComboBoxComponent;

  @ViewChild('objectsAutocomplete') objectsAutocomplete: AutoCompleteComponent;

  public onObjectsAutocompleteValueChange(value: any) {
    if (this.selectedObjects.length == 0) {
      this.selectedObjects.push(value);
    } else {
      this.selectedObjects.pop();
      this.selectedObjects.push(value);
    }
  }

  @ViewChild('tfmsAutocomplete') tfmsAutocomplete: AutoCompleteComponent;

  public onTfmsAutocompleteValueChange(value: any) {
    if (this.selectedTfms.length == 0) {
      this.selectedTfms.push(value);
    } else {
      this.selectedTfms.pop();
      this.selectedTfms.push(value);
    }
  }

  @ViewChild('objectsButton') objectsButton: ElementRef;
  @ViewChild('objectsPopup', { read: ElementRef }) public objectsPopup: ElementRef;

  @ViewChild('tfmsButton') tfmsButton: ElementRef;
  @ViewChild('tfmsPopup', { read: ElementRef }) public tfmsPopup: ElementRef;

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
    return this.tfmsButton.nativeElement.contains(target) ||
      (this.tfmsPopup ? this.tfmsPopup.nativeElement.contains(target) : false);
  }

  private containsObjects(target: any): boolean {
    return this.objectsButton.nativeElement.contains(target) ||
      (this.objectsPopup ? this.objectsPopup.nativeElement.contains(target) : false);
  }

  public onClearClicked() {
    this.objectsAutocomplete.reset();
    this.typesCombobox.reset();
    this.tfmsAutocomplete.reset();
  }
}
