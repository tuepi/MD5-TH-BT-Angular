import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: any;
  @Input() email: any;
  @Input() phone: any;

  constructor() { }

  ngOnInit(): void {
  }

}
