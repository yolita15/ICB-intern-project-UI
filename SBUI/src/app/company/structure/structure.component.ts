import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})

export class StructureComponent  {
  constructor() { }
  public selectedKeys: any[] = [];
  public selectedKeysSecond: any[] = [];

  public data: any[] = [
    {
      text: "Furniture", items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" }
      ]
    },
    {
      text: "Decor", items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" }
      ]
    }
  ];

  public show: boolean = false;

  public showFirst: boolean = false;
}
