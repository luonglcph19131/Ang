import { Component } from '@angular/core';
import { ContentComponentComponent } from '../content-component/content-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [ContentComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
