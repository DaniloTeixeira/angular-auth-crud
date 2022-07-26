import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './core/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home';
import { NotFoundComponent } from './core/pages/not-found';
import { PostsComponent } from './core/pages/posts';
import { UsersComponent } from './core/pages/users';
import { SettingsComponent } from './core/pages/settings/settings.component';
import { UsersFormComponent } from './core/pages/users/users-form';
import { PostFormComponent } from './core/pages/posts/post-form';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PostsComponent,
    UsersComponent,
    SettingsComponent,
    UsersFormComponent,
    PostFormComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot(),
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
