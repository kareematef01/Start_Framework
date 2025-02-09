import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
@Input() titleStar:string=''
@Input() customColor:string=''

}
