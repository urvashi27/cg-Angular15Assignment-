import { Component } from '@angular/core';
import { ProtectLeadServiceService } from 'src/services/protect-lead-service.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos:any;
  constructor(private service:ProtectLeadServiceService)
  {}

  ngOnInit()
  {
    this.getTodos();
  }
  getTodos()
    {
      this.service.getAllTodos().subscribe((res=>
        {
          console.log(res);
          this.todos=res;
        }))
    }
    deleteTodo(item:any) {
      console.log(item);
      let index = this.todos.indexOf(item);
      console.log(index);
      this.todos.splice(index, 1);
  
      // this.deletePopup.success(`Todo ${item.id} Deleted!`);
    }
    toggleEdit(todo:any) {
      todo.editing = !todo.editing;
    }
    saveTodoChanges(todo:any){
      todo.editing = false;
    }
}
