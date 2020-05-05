import { Player } from '../players/player.module';
import { EventEmitter } from '@angular/core';

export class TeamService{
    team:Player[]=[];   
    Team:Player[]=[];
    t:Player[];
    storageName="team";

    removePlayer=new EventEmitter<any>();
    

    addToTeam(player:Player){
        this.Team.push(player);
        localStorage.setItem(this.storageName,JSON.stringify(this.Team));
    }

    getTeam(){
        if(localStorage.length>1){
            this.team=(JSON.parse(localStorage.getItem(this.storageName)));
            return this.team.slice();
            
        }
    }

    addTeam(team:Player[]){
        localStorage.removeItem(this.storageName);
        localStorage.setItem(this.storageName,JSON.stringify(team));

    }

    


}