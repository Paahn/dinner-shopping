import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public collapsed = true;
    @Output() public featureSelected = new EventEmitter<string>();

    public onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
    
}