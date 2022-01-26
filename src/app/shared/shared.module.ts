import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { PlaceHolderDirective } from "./directives/placeholder.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropdownDirective,
        FilterPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropdownDirective,
        FilterPipe,
        CommonModule
    ]
})
export class SharedModule {}