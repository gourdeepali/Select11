import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../../player.module';
import { Subject } from 'rxjs';
import { PlayerService } from '../../players.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player:Player;
  @Input() index:number;

  addPlayerToTeam:Player;
  user:string;
  added=false;
 

  constructor(private playerservice:PlayerService) {}

  ngOnInit(): void {
    this.user=localStorage.getItem("status");
  }

  onAddToTeam(index:number){
    this.added=true;
    this.addPlayerToTeam=this.playerservice.getPlayers(index);
    this.playerservice.addPlayerToTeam(this.addPlayerToTeam);
    this.isDisabled();
  }
  
  isDisabled(){
    return this.added;
  }

  

}
