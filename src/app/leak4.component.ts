import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';

/**
 * Serviço que armazena referência de um componente externo.
 */
@Injectable({ providedIn: 'root' })
export class MyService {
    componentRef: any = null;
}

@Component({
    selector: 'app-leak4',
    template: `
        <p>Leak 4 - Referência de componente armazenada</p>
    `,
    standalone: true,
})
export class Leak4Component implements OnInit, OnDestroy {
    constructor(private myService: MyService) {}

    ngOnInit() {
        this.myService.componentRef = this;
    }

    ngOnDestroy() {
        // this.myService.componentRef = null;
    }
}
