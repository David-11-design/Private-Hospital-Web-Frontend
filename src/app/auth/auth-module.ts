import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponet } from './pages/auth.componet';
import { AuthRoutingModule } from './auth-routing.module';
import { InputC } from '../shared/components/input/input';
import { Label } from '../shared/components/label/label';

@NgModule({
  declarations: [ AuthComponet],
  imports: [CommonModule, AuthRoutingModule, FormsModule, InputC, Label],
})
export class AuthModule {}
