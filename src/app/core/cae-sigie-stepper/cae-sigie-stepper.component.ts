import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityTypeService } from 'src/app/service/activity-type/activity-type.service';
import { CampusService } from 'src/app/service/campus/campus.service';

interface Modality {
  id: number;
  name: string;
}

@Component({
  selector: 'app-cae-sigie-stepper',
  templateUrl: './cae-sigie-stepper.component.html',
  styleUrls: ['./cae-sigie-stepper.component.css']
})
export class CaeSigieStepperComponent implements OnInit {
  activity_types: any[] = []
  
  campuses: any[] = []

  modalities: Modality[] = [
    {id: 1, name: 'Virtual'},
    {id: 2, name: 'Presencial'},
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public campusService: CampusService,
    public activityTypeService: ActivityTypeService
    ) { }

  ngOnInit(): void {
    this.getCampuses();
    this.getActivityTypes();
  }

  getCampuses() {
    this.campuses = [];
    this.campusService.getAllCampuses().subscribe(res => {
      this.campuses = res;
    },
    error => {
      console.error(error)
    });
  };

  getActivityTypes() {
    this.activity_types = [];
    this.activityTypeService.getAllTypes().subscribe(res => {
      this.activity_types = res;
    },
    error => {
      console.error(error)
    });
  };

}
