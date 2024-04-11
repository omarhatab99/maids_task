import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadSpinner } from 'src/app/app-store/actions/app-actions';
import { LoadUsers } from 'src/app/app-store/actions/user-actions';
import { getAllUsers, getUserById } from 'src/app/app-store/selectors/user-selectors';
import { IUser } from 'src/app/interfaces/IUser';
import { IUserStore } from 'src/app/interfaces/IUser-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  slides:IUser[] = [];
  users:IUser[] = [];
  searchValue:any;

  slideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 1,
    "autoplay": true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  constructor(private _Store:Store<IUserStore>){}

  ngOnInit(): void {
    //start spiner action (show spinner)
    this._Store.dispatch(LoadSpinner({isLoaded:true}));

    setTimeout(() => {
      //start action to fire effect
      this._Store.dispatch(LoadUsers({Page:1}));
      //get all users
      this._Store.select(getAllUsers).subscribe((response) => {this.slides = response; this.users = response;});
      //start spinner action (hide spinner)
      this._Store.dispatch(LoadSpinner({isLoaded:false}));

    } , 500);
  }

  //search by id
  search(){
    this._Store.select(getUserById(this.searchValue)).subscribe((response) => {
      if(response){
        this.users = [response]
      }
      else
      {
        this._Store.select(getAllUsers).subscribe((response) => {this.users = response;});
      }
      
    })
  }

  //pagination
  pagination(page:number , pageSize:number){
    this._Store.dispatch(LoadUsers({Page:page}));
  }


}
