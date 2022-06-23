import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FetchDataService } from "../../services/fetch-data.service";
import { Animal } from "../../Animal";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Output() rerenderCard = new EventEmitter();
  Animals: Animal[] =[];


  constructor(private fetchDataService: FetchDataService, private router:Router) { }

  ngOnInit(): void {
    this.fetchDataService.getAnimals().subscribe((animals) => (this.Animals = animals.items));
  }

  refreshCards(): void {
    this.ngOnInit();
    location.reload();
    
  }

  showCard(animal:Animal){
    // another feature to display only the selected card in the same component :
    //this.Animals=this.Animals.filter(a =>a.id == animal.id) 

    this.router.navigate(["detailed"], {state:{animal}})
  }




}
