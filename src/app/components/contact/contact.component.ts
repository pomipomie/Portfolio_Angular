import { Component, OnInit } from '@angular/core';
import { MyapiService } from 'src/app/services/myapi.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myApi:any;

  constructor(private userData:MyapiService) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe( data => {
      this.myApi = data;
    })
  }

}
