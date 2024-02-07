import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartService } from './services/chart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

chart: any = []
result: any
coinPrice: any;
coinName:any


constructor(private service: ChartService){}

ngOnInit() {
  this.service.cryptoData().subscribe((res) => {
    this.result = res;
    this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
    this.coinName = this.result.data.coins.map((coins: any) => coins.name);
    console.log(this.coinPrice);
    console.log(this.coinName);

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.coinName,
        datasets: [
          {
            data: this.coinPrice,
            borderColor: 'black',
            label: 'Coin Price',
            backgroundColor:  ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
            borderWidth: 3,
          },
        ],
      },
    });
  });
}
}
