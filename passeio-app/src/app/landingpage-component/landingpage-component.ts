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
    private router: Router
  ){

  }

  goToPictures(){
    this.router.navigate(['/paginas/galeria'])
  }

  authWithGoogle(){

  }

  isLoggedIn() : boolean {
    return !!this.profile; // !! verifica se existe e retorna bool
  }

}
