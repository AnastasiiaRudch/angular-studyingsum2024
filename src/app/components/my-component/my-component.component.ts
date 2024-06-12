import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {MyChildComponentComponent} from "../my-child-component/my-child-component.component";


@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    MyChildComponentComponent
  ],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                                              AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    console.log('constructor');//1
  }

  movie = {
    backdrop_path : "assets/images/planet-apes.jpg",
    id : 653346,
    overview : "Several generations in the future following...",
    release_date : "May 5, 2024",
    title : "Kingdom of the Planet of the Apes",
    rating : 8.5
  }

  handleAddFavoriteParent(movieTitle:string){
    console.log('Added to Favorite: ' + movieTitle);
  }

  handleAddWatchListParent(movieTitle:string){
    console.log('Added to WatchList: ' + movieTitle);
  }


  ngOnInit(): void {
    console.log('ngOnInit');//3
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');//2
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
