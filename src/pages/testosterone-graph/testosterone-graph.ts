import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { TestosteroneData} from '../../providers/testosterone-data';

/*
  Generated class for the TestosteroneGraph page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testosterone-graph',
  templateUrl: 'testosterone-graph.html'
})
export class TestosteroneGraphPage {


 @ViewChild('barCanvas') barCanvas;
 
    barChart: any;
    labels: any[];
    data:any[];
    testosteroneResultList: any;
   


  constructor(public navCtrl: NavController, public navParams: NavParams, public testosteroneData: TestosteroneData) {


  	this.labels=[];
  	this.data=[];


  }


  doGraph(data:any[], labels:any[]) {


this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    label: '# of Votes',
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });



  }



   ionViewDidLoad() {


   	 this.testosteroneData. getTestosTestList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          result: snap.val().result,
          date: snap.val().date,
        });
      return false
      });
      this.testosteroneResultList = rawList;

         
      for (let entry of this.testosteroneResultList)	{

      	this.data.push(entry.result);
      	this.labels.push(entry.date);
      	
      	
      }

      console.log(this.data);


    });


   this.doGraph(this.data, this.labels);	
 
        
 
}

}
