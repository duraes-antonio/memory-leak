import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-leak5',
    template: `
        <p>Leak 5 - Renderer2 sem remover elementos</p>
    `,
    standalone: true,
})
export class Leak5Component implements OnInit, OnDestroy {
    private element!: HTMLElement;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        this.element = this.renderer.createElement('h3');
        this.element.innerText = `Element leak - ${new Date()}`;
        this.renderer.appendChild(document.body, this.element);
    }

    ngOnDestroy() {
        // this.renderer.removeChild(document.body, this.element);
    }
}
