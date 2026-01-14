import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Game } from '../../modles/game.modle';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgIf, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  game: Game = new Game();
  currentCard: string = '';

  drawn: boolean = false;
  drawCardIndex: number | null = null;

  cards = Array.from({ length: 52 }, (_, i) => i + 1);
  radius = 250;

  ngOnInit() {
    console.log(this.game);
  }

  cardTransform(i: number): string {
    const n = this.cards.length;
    const angle = (360 / n) * i;

    return `translate(-50%, -50%) rotate(${angle}deg) translate(${this.radius}px) rotate(${-angle}deg)`;
  }


  pickedCard(i: number) {
    
    if (this.drawn === false) {
    this.drawn = true;
    this.drawCardIndex = i;
    this.getDrawnCard();
    this.removeCard();

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.drawn = false;
    }, 1700);
    }
  }

  getDrawnCard(){
    this.currentCard = this.game.stack.pop() ?? ''
  }

  removeCard() {
    
  }

};
