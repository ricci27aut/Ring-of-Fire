import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

 drawn: boolean = false;
 drawCardIndex: number | null = null;

  cards = Array.from({ length: 54 }, (_, i) => i + 1);

  radius = 350; // px – nach Bedarf anpassen

  cardTransform(i: number): string {
    const n = this.cards.length;
    const angle = (360 / n) * i;

    return `translate(-50%, -50%) rotate(${angle}deg) translate(${this.radius}px) rotate(${-angle}deg)`;
  }


drawCard(i: number) {
  this.drawCardIndex = i;
}

}
