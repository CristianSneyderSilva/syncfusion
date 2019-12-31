import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'card-cards-general',
  templateUrl: './cards-general.component.html',
  styleUrls: ['./cards-general.component.css']
})
export class CardsGeneralComponent implements OnInit {
  @ViewChild('element',{static: false}) element;

  constructor() { }

  ngOnInit() {
  }

}
