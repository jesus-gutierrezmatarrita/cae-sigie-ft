import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Campus {
  id: number;
  name: string;
}

interface Activity_Type {
  id: number;
  name: string;
}

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
  activity_types: Activity_Type[] = [
    {id: 1, name: 'Taller'},
    {id: 2, name: 'Charla'},
    {id: 3, name: 'Recreativa'}
  ]
  
  campuses: Campus[] = [
    {id: 1, name: 'Paraíso'},
    {id: 2, name: 'Turrialba'},
    {id: 1, name: 'Guápiles'},
    {id: 1, name: 'Rodrigo Facio'},
    {id: 1, name: 'Liberia'},
  ]

  modalities: Modality[] = [
    {id: 1, name: 'Virtual'},
    {id: 2, name: 'Presencial'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
