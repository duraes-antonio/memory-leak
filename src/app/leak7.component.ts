import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; // Importar e registrar todos os componentes necessários

@Component({
    selector: 'app-leak7',
    template: `
        <div>
            <!-- Título do componente -->
            <p>Leak 7 - Bibliotecas externas</p>

            <!-- Canvas para o gráfico -->
            <div style="width: 80%; margin: auto;">
                <canvas id="myChart"></canvas>
            </div>
		</div>
    `,
    standalone: true,
})
export class Leak7Component implements OnInit, OnDestroy {
	chart?: Chart;

    ngOnInit() {
		Chart.register(...registerables);
        this.createChart();
    }

    ngOnDestroy() {
		// this.chart?.destroy();
    }

	private createChart() {
		const ctx = document.getElementById('myChart') as HTMLCanvasElement;
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
				datasets: [
					{
						label: 'Simulated Data',
						data: [65, 59, 80, 81, 56],
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
						tension: 0.1,
					},
				],
			},
			options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}
}
