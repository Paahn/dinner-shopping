import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-alert',
  template: `
    <div class="backdrop"></div>
    <div class="alert-box">
      <p>{{ message }}</p>
      <div class="alert-box-actions">
        <button class="btn btn-primary">Close</button>
      </div>
    </div>
  `,
  styles: [
  '.backdrop { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.75); z-index: 50; }',
  '.alert-box { position: fixed; top: 30vh; left: 20vw; width: 60vw; padding: 12px; background: white; box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5); z-index: 100;    }',
  '.alert-box-actions { text-align: right; }'
  ]
})
export class AlertComponent {
  @Input() public message: string;
}
