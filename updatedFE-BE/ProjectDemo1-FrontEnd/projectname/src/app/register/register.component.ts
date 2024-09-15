import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern for validation

  constructor(private http: HttpClient, private router: Router,private formsModule:FormsModule) {}

  onSubmit() {
    if (this.emailPattern.test(this.email) && this.password === this.confirmPassword) {
      this.http.post('http://localhost:5046/api/Users/Registration', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }).subscribe(response => {
        // Handle successful registration here
        window.alert('Registration successfully!');
        this.router.navigate(['/login']);
      
      }, error => {
        // Handle registration error here
        console.error('Registration error', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  // emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // passwordPattern: RegExp = /^(?=.*[!@#$%^&*])/; // At least one special character

  // showPassword: boolean = false;
  // formErrors: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // };

  // constructor(private http: HttpClient, private router: Router) {}

  // // Toggle password visibility
  // togglePasswordVisibility() {
  //   this.showPassword = !this.showPassword;
  // }

  // onSubmit() {
  //   this.validateForm();
  //   if (this.isFormValid()) {
  //     this.http.post('http://localhost:5046/api/Users/Registration', {
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       email: this.email,
  //       password: this.password
  //     }).subscribe(response => {
  //       window.alert('Registration successfully!');
  //       this.router.navigate(['/login']);
  //     }, error => {
  //       console.error('Registration error', error);
  //     });
  //   }
  // }

  // validateForm() {
  //   // First Name validation
  //   this.formErrors.firstName = this.firstName ? '' : 'Please enter your first name.';

  //   // Last Name validation
  //   this.formErrors.lastName = this.lastName ? '' : 'Please enter your last name.';

  //   // Email validation
  //   if (!this.email) {
  //     this.formErrors.email = 'Please enter your email.';
  //   } else if (!this.emailPattern.test(this.email)) {
  //     this.formErrors.email = 'Please enter a valid email address.';
  //   } else {
  //     this.formErrors.email = '';
  //   }

  //   // Password validation
  //   if (!this.password) {
  //     this.formErrors.password = 'Please enter a password.';
  //   } else if (!this.passwordPattern.test(this.password)) {
  //     this.formErrors.password = 'Password must contain at least one special character.';
  //   } else {
  //     this.formErrors.password = '';
  //   }

  //   // Confirm Password validation
  //   if (this.confirmPassword !== this.password) {
  //     this.formErrors.confirmPassword = 'Passwords do not match.';
  //   } else {
  //     this.formErrors.confirmPassword = '';
  //   }
  // }

  // isFormValid() {
  //   return !this.formErrors.firstName && !this.formErrors.lastName &&
  //          !this.formErrors.email && !this.formErrors.password && !this.formErrors.confirmPassword;
  // }
}
