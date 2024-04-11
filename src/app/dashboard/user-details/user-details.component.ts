import { Component, OnInit } from '@angular/core';
import { RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { RouterStateUrl } from '../../app-store/router/custom-route-serializer';
import { getRouterInfo } from '../../app-store/selectors/router-selectors';
import { LoadSpinner } from '../../app-store/actions/app-actions';
import { getDetails } from '../../app-store/selectors/user-selectors';
import { IUser } from '../../interfaces/IUser';
import { DetailsUsers } from '../../app-store/actions/user-actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  
  userId:number | undefined;
  userDetails:IUser|undefined;

  constructor(private _Store:Store<RouterReducerState<RouterStateUrl>>){}

  ngOnInit(): void {
    
    //get user id from router state by selector
    this._Store.select(getRouterInfo).subscribe((response) => {this.userId = response["id"]});

    //start spinner action (show spinner)
    this._Store.dispatch(LoadSpinner({isLoaded:true}));

    setTimeout(() => {

    this._Store.dispatch(DetailsUsers({Id:this.userId}));
    //get user object from user state by selector
    this._Store.select(getDetails).subscribe((response) => {this.userDetails = response;});
    //start spinner action (hide spinner)
    this._Store.dispatch(LoadSpinner({isLoaded:false}));

    } , 500);
  }

}
