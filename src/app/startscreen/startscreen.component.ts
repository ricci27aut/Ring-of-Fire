import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../modles/game.modle';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {
  firestore: Firestore = inject(Firestore);


  constructor(private router: Router) { }

  newGame() {
    let game = new Game();
    this.addNewGame(game)
   
  }

  async addNewGame(game: Game) {
    await addDoc(this.getGameRef(), game.toJSON()).catch(
      (err) => { console.error(); }
    ).then((gameInfo: any)=> 
      this.router.navigateByUrl('/game/'+ gameInfo.id));
  }

  getGameRef() {
    return collection(this.firestore, 'games');
  }
}
