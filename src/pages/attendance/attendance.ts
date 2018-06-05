import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  searchBy: string = '';
  students = [
    {
      name: 'Mohamed Elshorbagy',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Tarek',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Mahmoud',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Ahmed',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Maryam',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Nada',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Amal',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    },
    {
      name: 'Nawal',
      checked: false,
      img: 'https://placehold.it/50/92c952'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  studentChecked(student) {
    student.checked = !student.checked;
  }

  getStudents() {
    console.log(this.students);
  }

}
