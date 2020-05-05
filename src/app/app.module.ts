import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerDisplayComponent } from './players/player-display/player-display.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './header/login/login.component';
import { LoginService } from './header/login.service';
import { PlayerService } from './players/players.service';
import { PlayerItemComponent } from './players/player-list/player-item/player-item.component';
import { TeamService } from './team/team.service';
import { TeamItemComponent } from './team/team-list/team-item/team-item.component';
import { MatchItemComponent } from './match-schedule/match-item/match-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    PlayerListComponent,
    PlayerItemComponent,
    PlayerDisplayComponent,
    TeamComponent,
    TeamListComponent,
    TeamItemComponent,
    MatchScheduleComponent,
    HomeComponent,
    LoginComponent,
    MatchItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService, 
    PlayerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
