import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string[] = [];
  countries: string[] = [
    'Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Port Said', 'Suez',
    'Ismailia', 'Minya', 'Sohag', 'Qena', 'Assiut', 'Beni Suef', 'Fayoum',
    'Damietta', 'Kafr El Sheikh', 'Asyut', 'Sharqia', 'Gharbia', 'Monufia',
    'Dakahlia', 'Beheira', 'Matrouh', 'Qalyubia', 'New Valley', 'Red Sea',
    'North Sinai', 'South Sinai'
  ];
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeForm(); 
  }

  initializeForm() {
    this.registerForm.setValue({
      name: '',
      email: '',
      phone: '',
      gender: '',
      password: '',
      Governorate: ''
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Register form submitted:', this.registerForm.value);
   
    }
  }

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?\d{7,14}$/),
    ]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    Governorate: new FormControl('', [Validators.required]),
  });

  registerSubmitted() {
    this.errors = [];
    this.registerForm.markAllAsTouched();
  
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const storedData = JSON.parse(localStorage.getItem('registerFormData') || '[]');
  
      const existingEmail = storedData.find((data: any) => data.email === formData.email);
      const existingPhone = storedData.find((data: any) => data.phone === formData.phone);
  
      if (existingEmail || existingPhone) {
        if (existingEmail) {
          this.errors.push('Email already exists.');
        }
        if (existingPhone) {
          this.errors.push('Phone number already exists.');
        }
      } else {
        localStorage.setItem('registerFormData', JSON.stringify([...storedData, formData]));
        console.log('Form Data Saved:', formData);
        this.router.navigate(['/Login']);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.registerForm.get('phone') as FormControl;
  }

  get gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get Governorate(): FormControl {
    return this.registerForm.get('Governorate') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
}
