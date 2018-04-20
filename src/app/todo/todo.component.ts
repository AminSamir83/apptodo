import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = { title: '', description: '', date: '', done: '' };

  index = String;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => { this.index = params.index; });
  }

  editTodo() {
    console.log(this.todo);
    this.apiService.updateTodo(this.todo, this.index).subscribe(res => console.log(res));
  }


  getTodo() {
    this.apiService.getTodoByIndex(this.index).subscribe(res => {
      this.todo = res.json();
      console.log(res);
    }
    );
  }

  ngOnInit() {
    this.getTodo();
  }

}

