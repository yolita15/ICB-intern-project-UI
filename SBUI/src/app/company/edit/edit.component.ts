import { Component, OnInit } from '@angular/core';
import { Object } from 'src/app/models/object';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public variable: boolean = true;
  public checked: boolean = true;
  public object: Object = new Object("ICB", 1);
  private id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
