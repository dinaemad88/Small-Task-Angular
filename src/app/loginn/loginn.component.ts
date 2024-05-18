import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  loginForm: FormGroup;
  loginFailed: boolean = false;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.loginFailed = false; 
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true; 
    }
  }
}