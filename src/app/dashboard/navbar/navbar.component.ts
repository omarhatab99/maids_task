import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  mode:string = "light";

  constructor(){}

  

  ngOnInit(): void {
    //check application mode
    this.checkMode();
  }

  //change mode of appliction
  changeMode(mode:string){
    if(mode == "light"){
      document.body.classList.remove("dark-mode-variables")
      localStorage.setItem("mode" , "light");
      this.mode = "light";
    }
    else
    {
      document.body.classList.add("dark-mode-variables")
      localStorage.setItem("mode" , "dark");
      this.mode = "dark";
    }
  }

  //chcek application mode
  checkMode(){
    if(localStorage.getItem("mode") === "dark")
      {
        document.body.classList.add("dark-mode-variables")
        this.mode = "dark"
      }
  }
}
