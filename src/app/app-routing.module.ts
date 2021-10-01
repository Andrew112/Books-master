import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './books-list/books-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-book' },
  { path: 'create-book', component: BookCreateComponent },
  { path: 'books-list', component: BookListComponent },
  { path: 'book-edit/:id', component: BookEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }