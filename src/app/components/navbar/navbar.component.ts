import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public bulbclass : string = 'bi bi-lightbulb-fill';
  public onoff : string = 'bi bi-toggle-off';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() :any {
    if (this.bulbclass === 'bi bi-lightbulb-fill') {
      this.bulbclass = 'bi bi-lightbulb';
      document.body.classList.toggle('dark-theme');
    } else {
      this.bulbclass = 'bi bi-lightbulb-fill';
      document.body.classList.toggle('dark-theme');
    }}
  
    gradient() :any {
      if (this.onoff === 'bi bi-toggle-off') {
        this.onoff = 'bi bi-toggle-on';
        document.body.classList.toggle('gradientmode');
      } else {
        this.onoff = 'bi bi-toggle-off';
        document.body.classList.toggle('gradientmode');
      }}

}
