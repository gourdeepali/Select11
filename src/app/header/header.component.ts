import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus:string;
  buttonName='Login';
  Admin="Admin";
  Guest="Guest";
  constructor(private logService:LoginService) { }

  ngOnInit(): void {
    this.logService.loginStatus.subscribe(
      (status:string)=>{
        this.loginStatus=status;
        this.buttonName='Logout';
      }
    );
  }
}
