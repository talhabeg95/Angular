import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from 'src/app/project';
import { ClientLocation } from 'src/app/client-location';
import { ClientLocationsService } from 'src/app/client-locations.service';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit 
{
  projects: Project[] = [];
  clientLocations: ClientLocation[] = [];
  showLoading: boolean = true;

  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = "ProjectName";
  searchText: string = "";

  @ViewChild("newForm",{static: false}) newForm: NgForm;
  @ViewChild("editForm",{static: false}) editForm: NgForm;

  constructor( private projectsService:ProjectsService, private clientLocationsService: ClientLocationsService ) 
  { 
  }

  ngOnInit() 
  {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        this.showLoading = false;
      }
    );

    this.clientLocationsService.getClientLocation().subscribe(
      (response) => {
        this.clientLocations = response;
      }
    );
  }

  onNewClick()
  {
    this.newForm.resetForm();
  }

  onSaveClick()
  {
    if(this.newForm.valid)
    {
      this.newProject.clientLocation.clientLocationID = 0;
      this.projectsService.insertProject(this.newProject).subscribe((response) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.clientLocation = response.clientLocation;
        p.active = response.active;
        p.clientLocationID = response.clientLocationID;
        p.status = response.status;
        this.projects.push(p);

        this.newProject.projectID =null;
        this.newProject.projectName =null;
        this.newProject.dateOfStart =null;
        this.newProject.teamSize =null;
        this.newProject.status = null;
        this.newProject.active = false;
        this.newProject.clientLocationID = null;

        $("#newFormCancel").trigger("click");
      },(error) => {
        console.log(error);
      });
    }
  }

  onEditClick(event, index: number)
  {
    this.editForm.resetForm();
    setTimeout(() =>
    {
      this.editProject.projectID = this.projects[index].projectID;
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.dateOfStart = this.projects[index].dateOfStart.split("").reverse().join("-");//yyyy-MM-dd
      this.editProject.teamSize = this.projects[index].teamSize;
      this.editProject.clientLocationID = this.projects[index].clientLocationID;
      this.editProject.active = this.projects[index].active;
      this.editProject.status = this.projects[index].status;
      this.editProject.clientLocation = this.projects[index].clientLocation;
      this.editIndex = index;
    },100);
  }

  onUpdateClick()
  {
    if(this.editForm.valid)
    {
      this.projectsService.updateProject(this.editProject).subscribe((response: Project) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.active = response.active;
        p.clientLocation = response.clientLocation;
        p.status = response.status;
        p.clientLocationID = response.clientLocationID;
        this.projects[this.editIndex] = p;
        
        this.editProject.projectID =null;
        this.editProject.projectName =null;
        this.editProject.dateOfStart =null;
        this.editProject.teamSize =null;
        this.editProject.active =null;
        this.editProject.status =null;
        this.editProject.clientLocationID =null;
        this.editProject.clientLocation =null;

        $("#editFormCancel").trigger("click");
      },(error) => {
        console.log(error);
      });
    }
  }

  onDeleteClick(event, index: number)
  {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick()
  {
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
      this.projects.splice(this.deleteIndex,1);
      this.deleteProject.projectID = null;
      this.deleteProject.projectName = null;
      this.deleteProject.dateOfStart = null;
      this.deleteProject.teamSize = null;
    },(error) => {
      console.log(error);
    });
  }

  onSearchClick()
  {
    this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe((response: Project[]) => {
      this.projects = response;
    },(error) => {
      console.log(error);
    });
  }


}
