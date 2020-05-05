import { EventEmitter } from '@angular/core';

export class LoginService{
    loginStatus=new EventEmitter<string>();
    buttonName=new EventEmitter<string>();

    
}