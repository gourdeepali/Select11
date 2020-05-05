import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match.module';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css'],
  
})

export class MatchItemComponent implements OnInit {
  @Input() match:Match;
  @Input() index:number; 

  constructor() { }

  ngOnInit(): void {
  }

}
