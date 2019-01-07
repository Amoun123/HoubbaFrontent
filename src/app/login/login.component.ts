import { Component, OnInit } from '@angular/core';
import {ServerService} from 'src/app/server.service';
import {UserService} from 'src/app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private marsupilamiService: ServerService , private router: Router , private user: UserService ) { }

  ngOnInit() {

  }



  login1(username: string, pass: string) {

    this.marsupilamiService.login(username, pass)

      .subscribe(res => {
        if  (res === 'non') {alert ('Le mot de passe ou pseudo est incorrect!'); } else {
         this.user.setUserLoggedIn();
          this.router.navigate(['marsupilamis']);
        }
      });
  }
}


