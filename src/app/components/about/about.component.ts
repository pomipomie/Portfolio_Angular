import { Component, OnInit } from '@angular/core';
import { MyapiService } from 'src/app/services/myapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myApi:any;
  url = "pdata/user"

  constructor(private userData:MyapiService) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe( data => {
      this.myApi = data;
    })
  }

}
