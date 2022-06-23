import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Animal } from "../../Animal";
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
@Input() animal!:Animal;
@Input() isTest!:boolean;
@Output() onSelectCard : EventEmitter<Animal> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

expandCard(animal:Animal) {

    this.onSelectCard.emit(animal);
  }

}
