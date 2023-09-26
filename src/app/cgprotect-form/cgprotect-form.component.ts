import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProtectLeadServiceService } from 'src/services/protect-lead-service.service';
@Component({
  selector: 'app-cgprotect-form',
  templateUrl: './cgprotect-form.component.html',
  styleUrls: ['./cgprotect-form.component.scss'],
})
export class CgprotectFormComponent {
  personalDetailsFormGroup: FormGroup;

  incomeDetailsFormGroup: FormGroup;

  documentsFormGroup: FormGroup;
  completed: boolean = false;

  state: string;
  fileToUpload: any;
  imageUrl: any;
  format: any;
  url: any;

  identityProofImag: '';

  financialProofImage: '';

  constructor(
    private _formBuilder: FormBuilder,
    private protectService: ProtectLeadServiceService
  ) {}

  ngOnInit() {
    this.personalDetailsFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', Validators.required, Validators.maxLength(50)],
      phoneNumber: ['', Validators.required],
      email: [],
      dob: [],
      pincode: [],
      gender: [],
      smokeQuestion: [],
      alchoholQuestion: [],
    });
    this.incomeDetailsFormGroup = this._formBuilder.group({
      annualIncomeDate: ['', Validators.required],
      govtRebate: ['', Validators.required],
      taxRebate: ['', Validators.required],
    });
    this.documentsFormGroup = this._formBuilder.group({
      identityProof: '',
      financialProof: '',
    });
  }
  handleFileInput(event: any, prooftype: string) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      var files = event.target.files[0];

      // for(int i=0;i<event.target.files;i++)
      // {
      // if(prooftype=='identity')
      // {
      // this.identityProofImag=files.name;
      // }
      // else{
      // this.financialProofImage=files.name;
      // }

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        // @ts-ignore
        this.url = event.target.result;
        if (this.url == '') {
          alert('no file selected');
        }
      };
    }
  }

  submit() {
    this.completed = true;
    this.state = 'done';
    console.log(this.personalDetailsFormGroup.valid);
    console.log(this.incomeDetailsFormGroup.valid);
    console.log(this.personalDetailsFormGroup.value);
    console.log(this.documentsFormGroup.value);
    const data = {
      firstName: 'urvi',
      lastName: 'sapate',
      dob: '2019-09-09',
      phoneNo: '9904880890',
      email: 'urvisapate@gmail.com',
      pincode: 221570,
      gender: 'F',
      annualIncometDate: '2021-11-18',
      govermentRebate: 567,
      taxRebate: 5678,
    };
    this.protectService.submitData(data).subscribe((res) => {
      console.log(data);

      console.log(res);
      alert('data send successfully');
    });
  }
}
