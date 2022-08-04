import { Component, OnInit } from '@angular/core';
import { MyapiService } from 'src/app/services/myapi.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Array<any> | undefined;

  constructor(private skillsData:MyapiService) { }

  ngOnInit(): void {
    this.skillsData.getSkillsData().subscribe( data => {
      this.skills = data;
    })
  }

}
