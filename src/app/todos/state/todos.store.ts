import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { Injectable } from '@angular/core';

export interface TodosState extends EntityState<Todo, string> {
filter: VISIBILITY_FILTER;
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super();
  }
}
