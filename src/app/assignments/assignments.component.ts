import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application Angular sur les assignments !";
  ajoutActive = false;

  assignments = [
    {
      nom:"T1 Web Components",
      dateRendu:'2023-09-17',
      nomEtu:"Jean",
      rendu:true
    },
    {
      nom:"T2Angular",
      dateRendu:'2023-10-17',
      nomEtu:"Paul",
      rendu:true
    },
    {
      nom:"T3 SGBD",
      dateRendu:'2023-01-17',
      nomEtu:"Pierre",
      rendu:false
    }
  ]

  constructor() { } 

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
    
  }

  onSubmit(event: any) {
    console.log(event);
    //event.preventDefault();
  }

}
