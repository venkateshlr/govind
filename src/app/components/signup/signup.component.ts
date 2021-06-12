import { Component, OnInit } from '@angular/core';
import { Config, ConfigWebService } from '../../service/WebService';
import { Hero } from '../../hero';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private configWebService: ConfigWebService) { }
  heroes: Hero[];
  
  ngOnInit(): void {
  }

  onClickSubmit(data) {
    console.log("we are here ");
    alert("Entered Email id : " + data.emailid);
 }

 onClickSignup(data) : void {
  console.log("[info] components login ");
  

  console.log("Entered Email id : " + data.emailid);
  console.log("Entered Password : " + data.passwd);
  console.log("Entered Role : " + data.role);
  console.log("Entered Role : " + data.picture);
  
  //const newHero: Hero = { data.emailid, data.passwd } as Hero;
    this.configWebService
      .signup(data.emailid, data.passwd,data.mobile,data.picture)
      .subscribe(hero => this.heroes.push(hero));
}

}
