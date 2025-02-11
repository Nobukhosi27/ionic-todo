import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonItem, IonLabel,IonInput, IonButton, IonList,IonCheckbox } from '@ionic/angular/standalone';
import { DataService, List } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent,
    IonItem, IonLabel, IonInput,IonButton, IonList, IonCheckbox,FormsModule,CommonModule
    
  ],
})
export class HomePage {

  lists: List[] = [];
  newListTitle = '';
  newListDescription = '';

  constructor(private dataService: DataService) {}
  
  ionViewWillEnter() {
    this.lists = this.dataService.getLists();
  }


addList() {
    if (this.newListTitle.trim()) {
      this.dataService.addList(this.newListTitle, this.newListDescription);
      this.newListTitle = '';
      this.newListDescription = '';
      this.ionViewWillEnter(); // Refresh tasks
    }
  }

  toggleCompletion(id: number) {
    this.dataService.toggleListCompletion(id);
  }

  deleteList(id: number) {
    this.dataService.deleteList(id);
    this.ionViewWillEnter();
  }

}
