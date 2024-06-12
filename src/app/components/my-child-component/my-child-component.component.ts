import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-my-child-component',
  standalone: true,
  imports: [
    MatButton, MatIconModule
  ],
  templateUrl: './my-child-component.component.html',
  styleUrl: './my-child-component.component.css'
})
export class MyChildComponentComponent implements OnInit{

  // @Input() data: {} | undefined;//z Parent to Child
  @Input() data: any;
  //vse sho mu budemo robutu v addToFavorites() i addToWatchList() za dopomogoyu
  //@Output bude emitutus do Parenta. Clicknuvshu v Child, Parent bude rozumitu,
  //sho v Childi vidbulus yakis zminu i bude na nuh reaguvatu
  @Output() addFavoritesChildOutput = new EventEmitter<any>();
  @Output() addWatchListChildOutput = new EventEmitter<any>();
  public movie: any;

  ngOnInit(): void {
    this.movie = this.data;
    console.log(this.movie);
  }

  addToFavoritesChild(){
    this.addFavoritesChildOutput.emit(this.data.title);
  }

  addToWatchListChild(){
    this.addWatchListChildOutput.emit(this.data.title);
  }


}
