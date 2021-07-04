import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';


/**
 * Generated class for the VaccinationGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vaccination-graph',
  templateUrl: 'vaccination-graph.html'
})
export class VaccinationGraphComponent implements OnInit{

  
  @Input() graphData:any; 
  @Input() userDetails:any; 
  private graphDetails:any;
  private userData:any;
  

  constructor(private utility: CommonUtilities,private navCtrl:NavController) {
   
  }
  ngOnInit(){
    if(!this.utility.isEmptyOrNullOrUndefined(this.graphData)){
      this.graphDetails=this.graphData
    }
    if(!this.utility.isEmptyOrNullOrUndefined(this.userDetails)){
      this.userData=this.userDetails
    }
  }
 
  goToCovidServyPage(){
    this.navCtrl.push("CoronaPage", { 'userDetails': this.userData });
  }
 
}
