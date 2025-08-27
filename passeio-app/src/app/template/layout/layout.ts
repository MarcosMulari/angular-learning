import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layout-props';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from "rxjs"

@Component({
  selector: 'app-layout',
  standalone: false, // a partir do angular 19, todos os componenets são standalone: true por padrão
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  props: LayoutProps = { titulo:"", subTitulo:""}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() : void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map( () => this.getTitle())
      ).subscribe( (layoutProps : LayoutProps) => this.props = layoutProps)
  }

  getTitle() : LayoutProps {
    let childRoute = this.activatedRoute.firstChild

    while(childRoute?.firstChild){
      childRoute = childRoute.firstChild
    }

    return childRoute?.snapshot.data as LayoutProps

  }

}
