import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

const passwordMatchValidator: any = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordMismatch: true }
    : null;
};

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private user: UserDetailsService,
    private router: Router
  ) {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        role: [''],
        department: [''],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: [''],
        address: [''],
        status: [false],
      },
      { validators: passwordMatchValidator }
    );
  }
  AddUser() {
    console.log(this.form.valid);

    if (this.form.valid) {
      let myForm = this.form.value;
      let obj = {
        Name: myForm.firstName + ' ' + myForm.lastName,
        Email: myForm.email,
        Phone: myForm.phoneNumber,
        Role: myForm.role,
        Status: myForm.status ? 'Active' : 'Not Active',
        Action: '@action-handle',
      };
      this.user.addUsers(obj);
      this.router.navigate(['']);
    }
  }
  navigateTo(val: any) {
    this.router.navigate([val]);
  }
}
