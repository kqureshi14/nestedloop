import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nestedloop';

  users = [
    {
    name:'Kaleem', phone:'343534334', socialAccounts:['facebook','insta', 'gmail']
  },
  {
    name:'Sami', phone:'354545454',socialAccounts:['Twitter','yahoo', 'TickTok']
  },
  {
    name:'Smith', phone:'1645454545',socialAccounts:['facebook','Twitter', 'yahoo']
  },
  {
    name:'John', phone:'17776756565',socialAccounts:['TickTok','insta', 'LinkedIn']
  }
]
}
