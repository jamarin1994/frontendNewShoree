import { Component, OnInit } from '@angular/core';
import { RequestJourney } from 'src/app/models/JourneyRequest';
import { JourneyService } from 'src/app/services/journey.service';
import { Flight, Transport } from 'src/app/models/Flights';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  urlImagen = 'https://mariomartinplaza.com/wp-content/uploads/2021/01/Voltoea-avion.png';
  origin = "";
  destination = "";
  query = false;
  loading = false;

  // Region de respuesta
  rsDestination = '';
  rsOrigin = '';
  rsPrice = 0;
  rsFlight: Flight[] = [];


  constructor(private journeyService: JourneyService){
  }

  ngOnInit(): void {
  }

  obtenerRuta(){
    const requestJourney: RequestJourney = {
      origin: this.origin.toUpperCase(),
      destination: this.destination.toUpperCase()
    }

    console.log(requestJourney);
    this.journeyService.obtenerJourney(requestJourney).subscribe(rs => {
      this.query = true;
      console.log(rs);
      this.rsDestination = rs.destination;
      this.rsOrigin = rs.origin
      this.rsPrice = rs.price;
      
      rs.flights.forEach((element: { transport: { flightCarrier: any; flightNumber: any; }; destination: any; origin: any; price: any; }) => {
        const transpor: Transport = {
            carrier: element.transport.flightCarrier,
            number: element.transport.flightNumber
        }
        const flight: Flight = {
          destination: element.destination,
          origin: element.origin,
          price: element.price,
          transport: transpor
        }
        this.rsFlight.push(flight);
      });
    })
  }

}
