import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  user = {
    name: '',
    login: '',
    password: ''
  };

  signup() {
    this.authService.signup(this.user).subscribe(
      (res) => {
        console.log('User signed up successfully', res);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.error('Signup failed', err);
        alert('Signup failed');
      }
    );
  }

  signupWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
