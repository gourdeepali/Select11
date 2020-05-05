import { Component, OnInit, OnChanges} from '@angular/core';
import { Player } from 'src/app/players/player.module';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
 team:Player[];
  constructor(private teamService:TeamService) { }
  

  ngOnInit(): void {
    this.team= this.teamService.getTeam();
  }




}
