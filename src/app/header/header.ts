import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, // don't need to set this for version 19+ but adding it for clarity true by default
    templateUrl: './header.html',
    styleUrl: './header.css'

})

export class HeaderComponent {}