import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // todos = [];
  todos = { title: '', description: '', date: new Date(), done: '' };


  constructor(private apiService: ApiService, private router: Router, public dialog: MatDialog) { }

  getTodos() {
    this.apiService.getTodosById().subscribe( res => {
      this.todos = res.json().data;
      console.log(this.todos);
    }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '300px',
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigateByUrl('/');
      this.ngOnInit();
      // this.animal = result;
    });
  }

  Logout() {
    this.apiService.logout();
    this.router.navigateByUrl('/login');
    }

  ngOnInit() {
    this.getTodos();

  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
  todo = { title: '', description: '', date: '', done: '' };
  homeForm = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl ('', Validators.required),
    date: new FormControl ('', Validators.required),
    done: new FormControl ('', Validators.required)
  });


  constructor( private router: Router, private apiService: ApiService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    getFormValue(f) {
      console.log(f.value);
      // console.log(f.valid);
      const todos1 = {title : f.value.title , description : f.value.description, date: new Date(), done: f.value.done}
      this.apiService.addTodo(todos1).subscribe(res => {
        // console.log(res.json().data);
        if (res.json().status === 401) {
         // this.router.navigateByUrl('/login');
          console.log(res.json().message);
        } else {
            // let token = res.json().data;
            // this.apiService.saveToken(token);
            // this.router.navigateByUrl('/login');
            // this.router.navigateByUrl('/');
            console.log(res);

           }
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
