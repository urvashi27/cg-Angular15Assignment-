import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProtectLeadServiceService } from 'src/services/protect-lead-service.service';
import { Leads } from 'src/models/LeadData';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent {
  displayedColumns: string[] = [
    'Name',
    'Last Contacted',
    'Product',
    'Email',
    'Contact',
    'Lead Stage',
  ];

  LeadDataArray: any;

  dataSource: any;
  constructor(private protectService: ProtectLeadServiceService) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.protectService.getAllLeads().subscribe((res) => {
      this.LeadDataArray = res;
      this.dataSource = new MatTableDataSource(this.LeadDataArray);
    });
  }
}
