import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSpinnerState } from '../app-store/selectors/app-selectors';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit{
  
  isLoaded:boolean = false;

  constructor(private _Store:Store){}

  ngOnInit(): void {
    this._Store.select(getSpinnerState).subscribe((response) => {
      this.isLoaded = response;
    })
  }

}
