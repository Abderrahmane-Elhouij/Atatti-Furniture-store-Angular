import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    name: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        // Navigate to your dashboard or home page on success
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('Invalid credentials');
      },
    });
  }

  loginWithGoogle() {
    // Redirects to the backend's OAuth2 endpoint to trigger Google login flow.
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
