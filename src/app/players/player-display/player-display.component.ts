import { Component, OnInit } from '@angular/core';
import { Player } from '../player.module';
import { PlayerService } from '../players.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.css']
})
export class PlayerDisplayComponent implements OnInit {
  player:Player;
  id:number;

  constructor(private pservice:PlayerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.player=this.pservice.getPlayers(this.id);
      }
    );
  }

}
