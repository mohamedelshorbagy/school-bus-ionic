import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ParentServiceProvider} from '../../providers/parent-service/parent-service';
import {DailyTablePage} from "../daily-table/daily-table";

/**
 * Generated class for the ProfileChildrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-children',
  templateUrl: 'profile-children.html',
})
export class ProfileChildrenPage {
  children: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public parentService: ParentServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileChildrenPage');
    this.parentService.getChildren().subscribe(res => {
      if (res['success'] === true) {
        console.log(res['children']);
        this.children = res['children'];
      }
    })

  }

  viewDailyTable(id) {
    this.navCtrl.push(DailyTablePage, {
      childId: id
    })
  }


}
