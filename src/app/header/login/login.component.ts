import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f',{static:false}) loginForm:NgForm;
  status="";
  buttonName="";
  count=0;

  constructor(private router:Router,private logservice:LoginService) { }

  ngOnInit(): void {
    localStorage.clear();
   
  }

  onSubmit(){
      if(this.loginForm.value.username==='admin' && this.loginForm.value.password==='admin'){
        this.status="Admin";
        this.count=1;
        this.buttonName='LogOut';
        this.logservice.loginStatus.emit(this.status);
        localStorage.setItem("status","Admin");
        this.router.navigate(['/players']);
    }
    else{
      if(this.loginForm.value.username==='guest' && this.loginForm.value.password==='guest'){
        this.status="Guest";
        this.count=1;
        this.logservice.loginStatus.emit(this.status);
        localStorage.setItem("status","Guest");
        this.router.navigate(['/home']);
      }
      else{
        alert("Please enter valid credentials");
        this.loginForm.reset();
      }
    }
   
  }

}

