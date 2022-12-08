import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AcademicActivityServiceService } from 'src/app/service/academic-activity/academic-activity-service.service';
import { ActivityTypeService } from 'src/app/service/activity-type/activity-type.service';
import { CampusService } from 'src/app/service/campus/campus.service';
import { PersonInChargeService } from 'src/app/service/personInCharge/person-in-charge.service';
import * as moment from 'moment';
import { MatSelect, MatSelectChange } from '@angular/material/select';

interface Modality {
  id: number;
  name: string;
}

interface Activity_Type {
  idTipo: number;
  nombreTipo: string;
}

interface personInCharge {
  idPersonaCoordinadora?:number,
  nombre?: string,
  apellidos?: string,
  correoElectronico?: string,
  telefono?: number,
  carnet?: string,
  contraseña?: string

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
  activity_types: Activity_Type[] = []
  campuses: any[] = []
  newpersonInCharge: any
  personInChargeEmail:any;
  date1:any
  date1Text:any;
  date2:any
  date2Text:any;
  date3:any
  date3Text:any;
  date4:any
  date4Text:any;
  idActivity!:string;
  personaId:any;
  nombreTipo:any;
  name:any;
  nombre:any;



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
    idActivity: ['', Validators.required]
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
  
 
  selectedActivity:any;
	onSelectedActivity(event:MatSelectChange):void {
		this.selectedActivity = event.value;
    this.nombreTipo=this.selectedActivity.nombreTipo
    console.log(event.value)
	}

  selectedModalidad:any;
	onSelectedModalidad(event:MatSelectChange):void {
		this.selectedModalidad = event.value;
    this.name=this.selectedModalidad.name;
	}

 
  selectedRecinto:any;
	onSelectedRecinto(event:MatSelectChange):void {
		this.selectedRecinto = event.value;
    this.nombre=this.selectedRecinto.nombre;
	}

  selectDate1(type: string, event: MatDatepickerInputEvent<Date>){
    this.date1=moment(event.value).format('YYYY-MM-DD');
    this.date1Text=this.date1
    this.date1=this.date1+"T00:00:00"
  }
  selectDate2(type: string, event: MatDatepickerInputEvent<Date>){
    this.date2=moment(event.value).format('YYYY-MM-DD');
    this.date2Text=this.date2
    this.date2=this.date2+"T00:00:00"
  }
  selectDate3(type: string, event: MatDatepickerInputEvent<Date>){
    this.date3=moment(event.value).format('YYYY-MM-DD');
    this.date3Text=this.date3
    this.date3=this.date3+"T00:00:00"
  }
  selectDate4(type: string, event: MatDatepickerInputEvent<Date>){
    this.date4=moment(event.value).format('YYYY-MM-DD');
    this.date4Text=this.date4
    this.date4=this.date4+"T00:00:00"
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
    this.findPersonByEmail(this.personInChargeForm.value.correoElectronico!)

    const personInCharge = {
      "idPersonaCoordinadora":this.personaId,
      "nombre": this.personInChargeForm.value.nombre!,
      "apellidos": this.personInChargeForm.value.apellidos!,
      "correoElectronico": this.personInChargeForm.value.correoElectronico!,
      "telefono": this.personInChargeForm.value.telefono!,
      "carnet": "A0000",
      "contraseña": "12345"
    }
    console.log(personInCharge)

   const tipoActividad={
    "idTipo":this.selectedActivity.idTipo!,
    "nombreTipo":this.selectedActivity.nombreTipo!
   }

    const academicActivity = {
      "titulo": this.academicActivityForm.value.titulo!,
      "descripcion": this.academicActivityForm.value.descripcion!,
      "fecha1RealizacionDeActividad": this.date1!,
      "fecha2RealizacionDeActividad": this.date2!,
      "fechaInicio": this.date3!,
      "fechaFin": this.date4!,
      "modalidad": this.selectedModalidad.name!,
      "lugarActividad": this.selectedRecinto.nombre!,
      "respuestas": [],
      "tipoDeActividad": tipoActividad,
      "personaCoordinadora": personInCharge,
      "recintos": []
    }

    console.log(academicActivity)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      if(this.personInChargeEmail==null){
        this.personInChargeService.savePersonInCharge(personInCharge).subscribe((data) => {
          this.newpersonInCharge.push(data);
          
        },
        error => { console.error(error) }
      )
      }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log(academicActivity)

    this.academicActivityService.saveAcademicActivity(academicActivity).subscribe((data) => {
      this.activities.push(data);
      
    },
      error => { console.error(error) }
    )
  };

  

  findPersonByEmail(email: string) {
    this.personInChargeService.findPersonByEmail(email).subscribe((res: {}) => {
      this.personInChargeEmail = res;
      this.personaId=this.personInChargeEmail.idPersonaCoordinadora
      console.log(this.personInChargeEmail)
    });
    
  }

}
