import { Component, OnInit } from '@angular/core';
import { Object } from 'src/app/models/object';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public variable: boolean = true;
  public checked: boolean = true;
  public object: Object = new Object("ICB", 1);
  constructor() { }

  ngOnInit() {
  }

}
