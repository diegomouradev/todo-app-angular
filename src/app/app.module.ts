import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosAppComponent } from './components/todos-app/todos-app.component';
import { TodosHeaderComponent } from './components/todos-header/todos-header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosAppComponent,
    TodosHeaderComponent,
    TodoItemComponent,
    ButtonComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
