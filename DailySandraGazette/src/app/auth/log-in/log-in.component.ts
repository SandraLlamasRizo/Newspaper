import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  private router: Router = inject(Router)

  public usernameValid: boolean = true;
  public passwordValid: boolean = true;
  public roleValid: boolean = true;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{9,}$')]),
    role: new FormControl('', [Validators.required])
  })

  onSubmit() {
    // Handle login logic here
    const { username, password, role } = this.form.value;

    if (this.form.valid) {
      localStorage.setItem('userRole', role);
      this.router.navigate(['/home']);
    } else {
      this.usernameValid = this.form.controls['username'].valid;
      this.passwordValid = this.form.controls['password'].valid;
      this.roleValid = this.form.controls['role'].valid;
      console.log(this.passwordValid, this.roleValid, this.usernameValid )
    }
  }
}
