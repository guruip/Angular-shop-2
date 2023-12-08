import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ValidationErrors, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public validators = [Validators.required];
  public signupForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', this.validators, this.uniqUserName.bind(this)],
      emails: this.fb.array([this.fb.control('', [...this.validators, Validators.email ])]),
      male: [false],
      password: this.fb.group({
        password: ['', this.validators],
        cpassword: ['', this.validators]
      }, {
        validators: [this.equalValidator]
      })
    });
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public signup(_formValue: any): void {

  }

  public equalValidator(control: FormGroup): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password === cpassword ? null : {
      'nonEqual': 'Passwords are not equal'
    };
  }

  public uniqUserName({value: username}: FormControl): Observable<ValidationErrors | null> {
    // TODO debounce
    return this.http.post('/auth/checkUsername', {username});
  };

  public getControls(control: FormGroup, path: string): FormControl[] {
    return (control.get(path) as FormArray).controls as FormControl[];
  }

  public addEmail(): void {
    (this.signupForm.get('emails') as FormArray).push(this.fb.control('', [...this.validators, Validators.email ]));
  }

  public removeEmail(index: number): void {
    (this.signupForm.get('emails') as FormArray).removeAt(index);
  }
}
