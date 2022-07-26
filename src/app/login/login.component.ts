import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../shared/services/rest.service';
/* import { UserService } from '../shared/services/user.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private RestService: RestService,
   ) { }

  ngOnInit(): void {
  }

  // usando material design
  email = new FormControl('', [Validators .required, Validators.email]);
  password = new FormControl('',)

  getErrorMessage(): "" | "Este campo es obligatorio" | "Correo invalido" {
    if (this.email.hasError('required')) {
      return 'Este campo es obligatorio';
    }

    return this.email.hasError('email') ? 'Correo invalido' : '';
  }

  // capturando valores
    // guardando datos de autenticacion
    save(event:Event) {
      event.preventDefault();
      if(this.email.valid){
        console.log(this.email.value, this.password.value);
        // this.postAuthenticated(this.email.value!, this.password.value!)
      }
    }

/*     public postAuthenticated = (email:string, password:string):void => {
      this.UserService.login(email, password)
      .subscribe({
        next: data => {
          sessionStorage.setItem('token',  JSON.stringify(data.accessToken).replace(/['"]+/g, '')),
          this.router.navigate(['/gallery']);
        },
        error: error => {
          console.log(JSON.stringify(error));
        }
      })
    } */

}
