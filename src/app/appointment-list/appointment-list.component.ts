import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointmentTitle:string = "";
  appointmentDate:Date = new Date();
  appointments:Appointment[] = [];

  addAppointment(){
    //check if fields are not empty
    if(this.appointmentTitle.trim().length && this.appointmentDate){
      //create an Appointment
      let newAppointment:Appointment = {
        id: Date.now(),
        title:this.appointmentTitle,
        date:this.appointmentDate
      }
      //adding them to our array
      this.appointments.push(newAppointment);
      //resetting the fields
      this.appointmentTitle = "";
      this.appointmentDate = new Date();
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
  }
}
