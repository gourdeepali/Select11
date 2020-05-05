import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { LoginComponent } from './header/login/login.component';
import { PlayerDisplayComponent } from './players/player-display/player-display.component';

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    
    {path:'players',component:PlayersComponent,
        children:[
            {path:':id',component:PlayerDisplayComponent}
        ]
    },
    
    {path:'team',component:TeamComponent},
    
    {path:'matchSchedule',component:MatchScheduleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }

