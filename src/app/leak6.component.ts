import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-leak6',
    template: `
        <p>Leak 6 - Elementos criados fora do Angular</p>
    `,
    standalone: true,
})
export class Leak6Component implements OnInit, OnDestroy {
    private element!: HTMLElement;

    ngOnInit() {
        this.element = document.createElement('div');
        this.element.innerHTML = `<p id="leaked" style="color: red; font-weight: bold">Element LEAK!!!</p>`;
        document.body.appendChild(this.element);
    }

    ngOnDestroy() {
        // document.body.removeChild(this.element);
    }
}
