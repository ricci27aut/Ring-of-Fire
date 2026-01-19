import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-rules-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-rules-info.component.html',
  styleUrl: './game-rules-info.component.scss'
})
export class GameRulesInfoComponent implements OnChanges {
  cardActionEN = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  cardAction = [
    { title: 'Wasserfall', description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört, und so weiter.' },
    { title: 'Du', description: 'Du entscheidest, wer trinken muss.' },
    { title: 'Ich', description: 'Glückwunsch! Trink einen Shot!' },
    { title: 'Kategorie', description: 'Denke dir eine Kategorie aus (z.B. Farben). Jeder Spieler muss einen Begriff aus dieser Kategorie nennen.' },
    { title: 'Bust a jive', description: 'Spieler 1 macht einen Tanz-Move. Spieler 2 wiederholt den Move und fügt einen zweiten hinzu.' },
    { title: 'Mädels', description: 'Alle Mädchen/Frauen trinken.' },
    { title: 'Himmel', description: 'Hände hoch! Der letzte Spieler trinkt!' },
    { title: 'Mate (Trink-Partner)', description: 'Such dir einen Trink-Partner. Dein Partner muss immer trinken, wenn du trinkst – und umgekehrt.' },
    { title: 'Daumenmeister', description: 'Du bist der Daumenmeister. Du darfst jederzeit deinen Daumen auf den Tisch legen. Alle müssen es sofort nachmachen. Der letzte Spieler muss trinken!' },
    { title: 'Männer', description: 'Alle Männer trinken.' },
    { title: 'Quizmeister', description: 'Du bist der Quizmaster. Du darfst jederzeit jemandem eine Frage stellen. Wer dir antwortet, muss trinken! (Man muss stattdessen eine Gegenfrage stellen, um nicht trinken zu müssen.)' },
    { title: 'Ich habe noch nie...', description: 'Sag etwas, das du noch nie gemacht hast. Jeder, der es schon gemacht hat, muss trinken.' },
    { title: 'Regel', description: 'Erfinde eine Regel. Jeder muss trinken, wenn er die Regel bricht.' },

  ]

  titel: string = ""
  description: string = ""

  @Input() card: string = ""

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1] - 1;
      this.titel = this.cardAction[cardNumber].title;
      this.description = this.cardAction[cardNumber].description;
    }
  }
}
