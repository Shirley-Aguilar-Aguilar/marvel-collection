import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../shared/services/rest.service';
 import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  hide = true;
  login:boolean=false;
  constructor(
    private router: Router,
    private UserService: UserService,
    private formBuilder: FormBuilder,
  ) { this.buildForm(); }

  ngOnInit(): void {}

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ], [] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
    });
    this.loginForm.valid;
  }

  get emailField(){
    return this.loginForm.get('email')
  }

  get passwordField(){
    return this.loginForm.get('password')
  }

    // guardando datos de autenticacion
  public  save(event:Event) {
      event.preventDefault();
      if(this.loginForm.valid){
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        console.log(this.loginForm.value);
        if(this.login){
          this.postAuthenticated(this.loginForm.value)
        } else{
          this.postRegister(this.loginForm.value)
        }
      } else {
        this.loginForm.markAllAsTouched();
      }
  }

  public postAuthenticated = (data:any):void => {
    this.UserService.login(data)
    .then(resp => {
      this.router.navigate(['/gallery'])
     })
    .catch(error => console.log(error));
  }

  public postRegister = (data:any):void => {
    this.UserService.register(data)
    .then(resp => {
     this.router.navigate(['/'])
     })
    .catch(error => console.log(error));
  }

  navigateHome(){
    this.router.navigate(['/'])
  }

  clear(){
    this.loginForm.reset();
  }
}
