import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Game } from '../../modles/game.modle';


@Component({
  selector: 'app-dialog.add.player',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './dialog.add.player.component.html',
  styleUrl: './dialog.add.player.component.scss'
})
export class DialogAddPlayerComponent {
    game: Game = new Game();
  
  name: string = '';

  onNoClick(){
    
  }
}
 