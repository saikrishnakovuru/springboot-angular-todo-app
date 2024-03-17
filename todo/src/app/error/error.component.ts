import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  public wrongRoute = () => 'Please check the URL';
}
