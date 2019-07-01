import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company = new Company("Name", "Indzhe Voyvoda 7, 1309", "www.kotarakarumen.com", "7835426572");

  ngOnInit() {
  }

}
