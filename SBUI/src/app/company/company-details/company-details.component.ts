import { Component, OnInit } from '@angular/core';
import { Company, CompanyResolved } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: Company;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const resolvedData: CompanyResolved = this.route.snapshot.data['resolvedData'];
    this.company = resolvedData.company;
  }
}
