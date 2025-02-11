import { Injectable } from '@angular/core';

export interface List {
  id: number;
  title: string;
  description?: string;
  completed: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class DataService {
private lists: List[] = [];
  private idCounter = 1;

  constructor() { }

 
  getLists(): List[] {
    return this.lists;
  }

  addList(title: string, description?: string): void {
    this.lists.push({ id: this.idCounter++, title, description, completed: false });
  }

  toggleListCompletion(id: number): void {
    const list = this.lists.find(t => t.id === id);
    if (list) {
      list.completed = !list.completed;
    }
  }

  deleteList(id: number): void {
    this.lists = this.lists.filter(t => t.id !== id);
  }

}
