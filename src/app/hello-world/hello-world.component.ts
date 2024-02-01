import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  @Input() name: string;
  @Input() title: string;
  @Input('description') descriptionText: string;
}
