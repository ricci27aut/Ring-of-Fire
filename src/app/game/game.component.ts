import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Game } from '../../modles/game.modle';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog.add.player/dialog.add.player.component';
import { MatDialog } from '@angular/material/dialog';
import { GameRulesInfoComponent } from '../game-rules-info/game-rules-info.component'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgIf, PlayerComponent, MatButtonModule, MatIconModule, GameRulesInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  game: Game = new Game();
  currentCard: string = '';

  drawn: boolean = false;
  drawCardIndex: number | null = null;
  hiddenCards = new Set<number>();

  cards = Array.from({ length: 52 }, (_, i) => i + 1);
  radius = 250;

  constructor(private dialog: MatDialog) { }

  cardTransform(i: number): string {
    const n = this.cards.length;
    const angle = (360 / n) * i;

    return `translate(-50%, -50%) rotate(${angle}deg) translate(${this.radius}px) rotate(${-angle}deg)`;
  }


  pickedCard(i: number) {

    if (this.drawn === false) {
      this.drawCardIndex = i
      this.drawn = true;
      this.getDrawnCard();
      
      setTimeout(() => {
      this.hiddenCards.add(i);
    }, 600);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.drawn = false;
        this.nexstPlayer();
      }, 1700);
    }
  }

  getDrawnCard() {
    this.currentCard = this.game.stack.pop() ?? ''
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      const refArray = this.game.players;
      if (refArray.length <= 3 && result.length > 0 && result.length <= 8) {
        refArray.push(result);
      }
    });
  }

  nexstPlayer() {
    const currentIndex = this.game.currentPlayerIndex;
    const players = this.game.players.length;
    if (currentIndex >= players - 1) {
      this.game.currentPlayerIndex = 0;
    } else {
      this.game.currentPlayerIndex += 1;
    }
  };
}