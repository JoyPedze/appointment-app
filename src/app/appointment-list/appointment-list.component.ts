import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  appointmentTitle:string = "";
  appointmentDate:Date = new Date();
  appointments:Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

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

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
