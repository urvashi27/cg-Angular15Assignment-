import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/services/authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';
  constructor( private router: Router,private auth:AuthserviceService)
  {

  }
  logout()
  {
   this.auth.logout()
  }
 
}

