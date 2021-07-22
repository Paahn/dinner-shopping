import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public collapsed = true;
    public featureSelected = new EventEmitter<string>();

    public onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
    
}