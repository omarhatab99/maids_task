import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRouterUrl } from 'src/app/app-store/selectors/router-selectors';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  public isOpen:boolean = true;
  public activeLink:string|null = "/home";

  constructor(private _Store:Store<any>){}

  public changeStatusOfAside():void {
    this.isOpen = !this.isOpen;
  }

  public activeLinkChange():void{
    //this.activeLink = activeLink;
    this._Store.select(getRouterUrl).subscribe((response) => {this.activeLink = response;});
  }


  ngOnInit(): void {
    this._Store.subscribe((response) => {
      this.activeLink = (response?.router?.state?.url.includes("userDetails")) 
      ? "/users" 
      : response?.router?.state?.url;
    });
  }
  
  

}
