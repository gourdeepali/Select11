import { Component, OnInit } from '@angular/core';
import { Match } from './match.module';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent implements OnInit {

  matches=[
    new Match("Australia","1st ODI","15-May-2020","Sydney","Friday",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png"),

    new Match("Australia","2nd ODI","20-May-2020","Melnourne","Wednessday",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png"),

     new Match("Pakistan","1st ODI","20-June-2020","Mohali","Tuesday",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/255px-Flag_of_Pakistan.svg.png"),

    new Match("Pakistan","2nd ODI","23-June-2020","Dharamshal","Friday",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/255px-Flag_of_Pakistan.svg.png"),

    new Match("Pakistan","3rd ODI","26-June-2020","Mumbai","Monday",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/255px-Flag_of_Pakistan.svg.png"),






    
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
