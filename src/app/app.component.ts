import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Leak1Component } from './leak1.component';
import { Leak2Component } from './leak2.component';
import { Leak3Component } from './leak3.component';
import { Leak4Component } from './leak4.component';
import { Leak5Component } from './leak5.component';
import { Leak6Component } from './leak6.component';
import { Leak7Component } from './leak7.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div style="display: flex; column-gap: 8px">
            <button *ngFor="let item of leaks" (click)="item.visible = !item.visible">
                Toggle {{ item.label }}
            </button>
        </div>

        <div style="display: grid; row-gap: 12px">
            <ng-container *ngFor="let item of leaks">
                <ng-container *ngIf="item.visible">
                    <ng-container *ngComponentOutlet="item.component"></ng-container>
                </ng-container>
            </ng-container>
        </div>
    `,
})
export class AppComponent {
    leaks = [
        { label: 'LEAK 1', component: Leak1Component, visible: false },
        { label: 'LEAK 2', component: Leak2Component, visible: false },
        { label: 'LEAK 3', component: Leak3Component, visible: false },
        { label: 'LEAK 4', component: Leak4Component, visible: false },
        { label: 'LEAK 5', component: Leak5Component, visible: false },
        { label: 'LEAK 6', component: Leak6Component, visible: false },
        { label: 'LEAK 7', component: Leak7Component, visible: false },
    ];
}
