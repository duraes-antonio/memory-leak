import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-leak1',
    template: `
        <p>Leak 1 - RXJS Subscription não cancelada</p>
    `,
    standalone: true,
    imports: [CommonModule, HttpClientModule],
})
export class Leak1Component implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    constructor(private http: HttpClient) {}

    ngOnInit() {
        interval(50)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.http.get('https://jsonplaceholder.typicode.com/users').subscribe();
            });
    }

    ngOnDestroy() {
        // this.destroy$.next();
        // this.destroy$.complete();
    }
}
