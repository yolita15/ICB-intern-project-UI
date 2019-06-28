import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company = new Company("Name", "Indzhe Voyvoda 7, 1309", "www.kotarakarumen.com", "7835426572");
  ngOnInit() {
  }

}
