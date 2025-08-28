import { auth } from './../auth-config';
import { AuthgoogleService } from './../authgoogle-service';
import { Component } from '@angular/core';
import { Profile } from './profile-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage-component',
  standalone: false,
  templateUrl: './landingpage-component.html',
  styleUrl: './landingpage-component.scss'
})
export class LandingpageComponent {
  profile: Profile |  undefined = {name: "Marcos", email:"mvrmulari@gmail.com"}

  constructor(
    private router: Router,
    private authGoogle: AuthgoogleService
  ){

  }

  goToPictures(){
    this.router.navigate(['/paginas/galeria'])
  }

  authWithGoogle(){
    this.authGoogle.login()
  }

  isLoggedIn() : boolean {
    this.profile = this.authGoogle.getLoggedProfile()
    console.log("Dados Google", this.profile)
    return !!this.profile; // !! verifica se existe e retorna bool
  }

}
