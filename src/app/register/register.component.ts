import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm : any = FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl( '', [Validators.required, Validators.minLength(6)]),
    country: new FormControl( '', [Validators.required] ),
    age: new FormControl( '' , [Validators.required, Validators.pattern("^(100|[1-9][7-9][0-9]?)$")] ),
    gender: new FormControl( '',[Validators.required]  ),
    phone: new FormControl( '' ,[Validators.required, Validators.pattern("^[0-9]+$")] )
  } ) ;

  countryList = []

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   // validates date format yyyy-mm-dd
    //   dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    //   acceptTerms: [false, Validators.requiredTrue]
    // });
  }
  // comparePassword( c : AbstractControl) {
  //   const v = c.value;
  //   return (v.password === v.confirmPassword) ?
  //     null : {
  //     passwordnotmatch: true
  //   } ;
  // }

  onSubmit() {

  }
}
