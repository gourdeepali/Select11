import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.module';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList:Player[]=[];  

  constructor(private players:PlayerService) { }

  ngOnInit(): void {
    this.playerList=this.players.getPlayersList();
  }

}