import { Component, OnInit, Input } from '@angular/core';

import { Player } from 'src/app/players/player.module';
import { TeamService } from '../../team.service';
import { TeamListComponent } from '../team-list.component';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
@Input() player:Player;
@Input() index:number;
team:Player[]=[];


  constructor(private teamService:TeamService,private list:TeamListComponent) { }

  ngOnInit(): void {   
  }

  onRemove(index:number){
     this.team=this.teamService.getTeam();
     console.log(this.team);
     this.team.splice(index,1);
     console.log(this.team);
     this.teamService.addTeam(this.team);
    //  window.location.reload();
    this.list.ngOnInit();
         
  }

}
