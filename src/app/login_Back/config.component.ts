import { Component, OnInit } from '@angular/core';
import { Config, ConfigWebService } from '../service/WebService';
import { Hero } from '../hero';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './config.component.html',
  providers: [ ConfigWebService ],
  styleUrls: ['./config.component.css']
})
export class ConfigAppComponent implements OnInit {
    heroes: Hero[];
    constructor(private configWebService: ConfigWebService,
      private route: ActivatedRoute ){}
    
      selectedName: string;

      /*constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

        this.username = data.username;
    
      }*/
      
      

  ngOnInit(): void {
    console.log("[info] we are in Params11111111 ");

    this.route.paramMap.subscribe((data)=>{
      //console.log(data.get('paramName'));
      this.selectedName=data.get('paramName');
    })
    console.log(this.selectedName);
    //this.heroName = data.username;
    //this.
  }

  onClickSubmit(data) {
    console.log("we are here ");
    alert("Entered Email id : " + data.emailid);
 }
 
 

 /*
  add(name: string, password: string): void {
    //this.editHero = undefined;
    name = name.trim();
    if (!name) {
      return;
    }
    password = password.trim();
    if (!password) {
      return;
    }

    // The server will generate the id for this new hero
    const newHero: Hero = { name, password } as Hero;
    this.configWebService
      .login(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }
  */

}