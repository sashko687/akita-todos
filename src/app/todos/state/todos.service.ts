import { TodosStore } from "./todos.store";
import { createTodo, Todo } from "./todo.model";
import { Injectable } from "@angular/core";
import { VISIBILITY_FILTER } from "../filter/filter.model";
import { ID } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({filter});
  }

  complete({ id, completed }: Todo) {
    this.todosStore.update(id, { completed });
  }

  add(id,  title: string) {
    const todo = createTodo(title);
     localStorage.setItem( "todo" , JSON.stringify(todo) )
    this.todosStore.upsert(id, todo); 
    console.log(this.todosStore)
  }

  delete(id: string) {
    this.todosStore.remove(id);
  }
}
