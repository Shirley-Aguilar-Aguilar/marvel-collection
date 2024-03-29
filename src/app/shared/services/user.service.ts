import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private auth: Auth) { }

  register({ email, password }: any ) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any ) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

}
