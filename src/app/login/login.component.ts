import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (!this.credentials.username || !this.credentials.password) {
      alert("Please fill out both fields.");
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = 'http://localhost:8081/api/user/login';

    this.http.post(url, JSON.stringify(this.credentials), { headers }).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Redirect based on role
        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.role === 'USER') {
          this.router.navigate(['/user']);
        }
      },
      error => {
        console.error('Error logging in:', error);
        alert("Invalid credentials.");
      }
    );
  }
}
