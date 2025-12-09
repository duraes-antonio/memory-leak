import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-leak3',
    template: `
        <p>Leak 3 - Timers não limpos</p>
    `,
    standalone: true,
})
export class Leak3Component implements OnInit, OnDestroy {
    private intervalId?: number;

    ngOnInit() {
        this.intervalId = setInterval(() => console.log('tick'), 50);
    }

    ngOnDestroy() {
        // clearInterval(this.intervalId);
    }
}
