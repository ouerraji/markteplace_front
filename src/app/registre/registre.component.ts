import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    userType: 'B2C',
    role: 'USER',
    companyName: '',
    businessType: '',
    companyAddress: '',
    companyCity: '',
    companyState: '',
    companyZipCode: '',
    companyCountry: '',
    companyPhoneNumber: '',
    vatNumber: ''
  };
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = 'http://localhost:8081/api/user/creatuser';

    this.http.post(url, JSON.stringify(this.user), { headers }).subscribe(
      response => {
        console.log('User created successfully:', response);
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }
  }

