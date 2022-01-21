import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./components/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'shopping-list',
                component: ShoppingListComponent
            }
        ])
    ]
})
export class ShoppingListModule {}