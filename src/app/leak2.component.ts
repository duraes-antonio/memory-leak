import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-leak2',
    template: `
        <p>Leak 2 - Event listeners não removidos</p>
    `,
    standalone: true,
})
export class Leak2Component implements OnInit, OnDestroy {
    private onResize = () => console.log('resized');

    ngOnInit() {
        window.addEventListener('resize', this.onResize);
    }

    ngOnDestroy() {
        // window.removeEventListener('resize', this.onResize);
    }
}
