import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AcademicActivityServiceService } from 'src/app/service/academic-activity/academic-activity-service.service';
import { ActivityTypeService } from 'src/app/service/activity-type/activity-type.service';
import { CampusService } from 'src/app/service/campus/campus.service';
import { PersonInChargeService } from 'src/app/service/personInCharge/person-in-charge.service';

interface Modality {
  id: number;
  name: string;
}

interface Activity_Type {
  id: number;
  name: string;
}

interface personInCharge {
  nombre: string,
  apellidos: string,
  correoElectronico: string,
  telefono: number,
  carnet: string,
  contraseña: string

}

interface academicActivity {
  titulo: string
  descripcion: string,
  fecha1RealizacionDeActividad: string,
  fecha2RealizacionDeActividad: string,
  fechaInicio: string,
  fechaFin: string,
  modalidad: string,
  lugarActividad: string,
  respuestas: [],
  tipoDeActividad: any,
  personaCoordinadora: personInCharge,
  recintos: []
}

@Component({
  selector: 'app-cae-sigie-stepper',
  templateUrl: './cae-sigie-stepper.component.html',
  styleUrls: ['./cae-sigie-stepper.component.css']
})
export class CaeSigieStepperComponent implements OnInit {
  activity_types: any[] = []
  campuses: any[] = []
  personInCharge: any[] = []

  modalities: Modality[] = [
    { id: 1, name: 'Virtual' },
    { id: 2, name: 'Presencial' },
  ]

  activities: any = [];

  academicActivityForm = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha1RealizacionDeActividad: ['', Validators.required],
    fecha2RealizacionDeActividad: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    modalidad: ['', Validators.required],
    lugarActividad: ['', Validators.required],
    tipoDeActividad: ['', Validators.required],
  });

  personInChargeForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correoElectronico: ['', Validators.required],
    telefono: ['', Validators.required],
    carnet: ['', Validators.required],
    contraseña: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    public campusService: CampusService,
    public activityTypeService: ActivityTypeService,
    public academicActivityService: AcademicActivityServiceService,
    public personInChargeService: PersonInChargeService
  ) { }

  ngOnInit(): void {
    this.getCampuses();
    this.getActivityTypes();
  }

  /***************************METHODS***********************************/

  /*****************************CAMPUS***************************************/
  getCampuses() {
    this.campuses = [];
    this.campusService.getAllCampuses().subscribe(res => {
      this.campuses = res;
    },
      error => {
        console.error(error)
      });
  };

  /******************************ACTIVITY TYPES******************************/
  getActivityTypes() {
    this.activity_types = [];
    this.activityTypeService.getAllTypes().subscribe(res => {
      this.activity_types = res;
    },
      error => {
        console.error(error)
      });
  };

  /******************************ACADEMIC ACTIVITY***************************/
  addAcademicActivity() {
    const personInCharge = {
      nombre: this.personInChargeForm.value.nombre,
      apellidos: this.personInChargeForm.value.apellidos,
      correoElectronico: this.personInChargeForm.value.correoElectronico,
      telefono: this.personInChargeForm.value.telefono,
      carnet: "",
      contraseña: ""
    }

    const academicActivity = {
      titulo: this.academicActivityForm.value.titulo,
      descripcion: this.academicActivityForm.value.descripcion,
      fecha1RealizacionDeActividad: this.academicActivityForm.value.fecha1RealizacionDeActividad,
      fecha2RealizacionDeActividad: this.academicActivityForm.value.fecha1RealizacionDeActividad,
      fechaInicio: this.academicActivityForm.value.fechaInicio,
      fechaFin: this.academicActivityForm.value.fechaFin,
      modalidad: this.academicActivityForm.value.modalidad,
      lugarActividad: this.academicActivityForm.value.lugarActividad,
      respuestas: [],
      tipoDeActividad: this.academicActivityForm.value.tipoDeActividad,
      personaCoordinadora: personInCharge,
      recintos: []
    }

    console.log(academicActivity.titulo)

    this.academicActivityService.saveAcademicActivity(academicActivity).subscribe((data) => {
      this.activities = this.activities.filter((activities: { id: number; }) => data.id !== data.id)

      this.activities.push(data);
      this.ngOnInit();
    },
      error => { console.error(error) }
    )
  };

  findPersonByEmail(email: string) {
    this.personInCharge = [];
    this.personInChargeService.findPersonByEmail(email).subscribe(res => {
      this.personInCharge = res;
    },
      error => {
        console.error(error)
      });
  }

}
