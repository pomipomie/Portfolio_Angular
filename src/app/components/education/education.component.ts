import { Component, OnInit } from '@angular/core';
import { MyapiService } from 'src/app/services/myapi.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edus:Array<any> | undefined;
  edu:any;

  constructor( private educationData:MyapiService) { }

  ngOnInit(): void {
    this.educationData.getEducationData().subscribe(
      data => { this.edus = data; }
    )
  }

}
