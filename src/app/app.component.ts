import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyComponentComponent} from "./components/my-component/my-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-studyingsum2024';
}
