import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero: Hero;
  constructor(private heroService:HeroService) {}

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  addHero(name:string):void{
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({name} as Hero).subscribe( hero => this.heroes.push(hero));
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.heroService.addMessage(this.selectedHero.name);
  }

  
  ngOnInit() {
    this.getHeroes();
  }

}
