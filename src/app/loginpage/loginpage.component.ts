import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/services/authservice.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(  private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,private auth:AuthserviceService)
      {

      }
      ngOnInit()
      {
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['']
      });
      // if (this.auth.isLoggedIn()) {
      //   this.router.navigate(['leads']);
      // }
      }
      get f()
       { 
        return this.loginForm.controls;
       }
      
       onSubmit() {
       
        if(this.loginForm.valid)
        {
          this.auth.login(this.loginForm.value).subscribe((res:any)=>
          {
            console.log(res);
            this.router.navigate(['/leads']);
          },
          (err)=>
          {
            alert(err.message);
          })
        }
      }
        

        
       
        
      
}
