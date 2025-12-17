import { Component, OnDestroy, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-leak7',
    template: `
        <div>
            <!-- Título do componente -->
            <p>Leak 7 - Bibliotecas externas</p>

            <fieldset>
                <label for="speed">Select a speed</label>
                <select name="speed" id="speed">
                    <option>Slower</option>
                    <option>Slow</option>
                    <option selected="selected">Medium</option>
                    <option>Fast</option>
                    <option>Faster</option>
                </select>
            </fieldset>
        </div>
    `,
    standalone: true,
})
export class Leak7Component implements OnInit, OnDestroy {
    ngOnInit() {
		$("#speed").selectmenu({
			change: function( event: any, ui: any ) {
				var selectedValue = $(this).val();
				console.log("Selected value: " + selectedValue);
			}
		});
    }

    ngOnDestroy() {
        // $('#speed').selectmenu('destroy');
    }
}
