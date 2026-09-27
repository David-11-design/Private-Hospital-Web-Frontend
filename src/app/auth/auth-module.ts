import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponet } from './pages/auth.componet';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [ AuthComponet],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
