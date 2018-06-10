import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ParentServiceProvider} from '../../providers/parent-service/parent-service';

/**
 * Generated class for the DailyTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-table',
  templateUrl: 'daily-table.html',
})
export class DailyTablePage {
  childId: any;
  daily: any;
  errorMessage: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public parentService: ParentServiceProvider) {
    this.childId = this.navParams.get('childId');
  }

  ionViewDidLoad() {
    this.parentService.getDailyTable(this.childId).subscribe(res => {
      if (res['success']) {
        this.daily = res['daily'][0];
      } else {
        this.errorMessage = "There's no Daily Table For this Student Right Now, try it Later"
      }
    })
  }

  arrivedTime(date) {
    let arrivedDate = new Date(date);
    let arrivedDateAggregated = '' + arrivedDate.getHours() + ':' + arrivedDate.getMinutes() + ':' + arrivedDate.getSeconds() + arrivedDate.getMilliseconds();
    return arrivedDateAggregated;
  }


  droppedTime(date) {
    let droppedDate = new Date(date);
    let droppedDateAggregated = '' + droppedDate.getHours() + ':' + droppedDate.getMinutes() + ':' + droppedDate.getSeconds() + droppedDate.getMilliseconds();
    return droppedDateAggregated;
  }

  onModelChange(event) {
    console.log(event);
  }

}
