import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputC {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event){
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }

}
