import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Animal } from "../../Animal";
@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css']
})
export class DetailedCardComponent implements OnInit {
  animal!: Animal;
  constructor(private router: Router) {
    this.animal = this.router.getCurrentNavigation()?.extras.state?.['animal'];
  }

  ngOnInit(): void {
  }

}
