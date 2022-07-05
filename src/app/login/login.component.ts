import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private RestService: RestService,) { }

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

      // authenticación -usando POST AUTH  de la api rest
/*   public postAuthenticated(email:string, password:string){
    this.RestService.login(email, password)
    .subscribe({
      next: data: => {
        sessionStorage.setItem('token',  JSON.stringify(data.accessToken));
        sessionStorage.setItem('name',  JSON.stringify(data.name).replace(/['"]+/g, ''));
        sessionStorage.setItem('userId', JSON.stringify(data.id));
        this.getUser(parseInt(JSON.stringify(data.id)))
        this.router.navigate(['/body']);
      },
      error: error => {
        console.log(JSON.stringify(error));
        console.log(JSON.stringify(error.error.message));
      }
    })

  }

  public getUser(id:number){
    this.RestService.getUserById(id)
    .subscribe({
      next: data => {
        console.log("data de usuario entrante")
        sessionStorage.setItem('rol',  JSON.stringify(data.userrol.name).replace(/['"]+/g, ''));
      },
    })
  } */

}
