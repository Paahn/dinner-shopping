import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-alert',
  template: `
  `,
})
export class AlertComponent {
  @Input() public message: string;
}
