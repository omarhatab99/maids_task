import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Store } from '@ngrx/store';
import { IUserStore } from '../../interfaces/IUser-store';
import { LoadUsers} from '../../app-store/actions/user-actions';
import { getAllUsers } from '../../app-store/selectors/user-selectors';
import { LoadSpinner } from '../../app-store/actions/app-actions';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  displayedColumns: string[] = ['avatar', 'first_name', 'last_name', 'email' , 'actions'];
  dataSource:any;
  searchValue:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private _Store:Store<IUserStore>){}


  ngOnInit(): void {
      //start spiner action (show spinner)
      this._Store.dispatch(LoadSpinner({isLoaded:true}));
      //start action to fire effect
      this._Store.dispatch(LoadUsers({Page:1}));
      //get all users
      this._Store.select(getAllUsers).subscribe((response) => { 
          this.dataSource = new MatTableDataSource<IUser>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
      );
      //start spinner action (hide spinner)
      setTimeout(() => {this._Store.dispatch(LoadSpinner({isLoaded:false}));} , 500);
  }

  search(){
    this._Store.select(getAllUsers).subscribe((response) => { 
      const filterData = response
      .filter((x) => x.first_name?.toLowerCase()?.includes(this.searchValue.toLowerCase()) || x.last_name?.toLowerCase()?.includes(this.searchValue.toLowerCase()));
      this.dataSource = new MatTableDataSource<IUser>(filterData);
    },
  );
  }
}
