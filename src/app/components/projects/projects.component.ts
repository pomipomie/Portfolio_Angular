import { Component, OnInit } from '@angular/core';
import { MyapiService } from 'src/app/services/myapi.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Array<any> | undefined;
  project:any;

  constructor(private projectData:MyapiService) { }

  ngOnInit(): void {
    this.projectData.getProjectsData().subscribe( data => {
      this.projects = data.reverse();
    })
  }

}
