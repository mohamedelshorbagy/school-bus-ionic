import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import {MatronsServiceProvider} from '../../providers/matrons-service/matrons-service';
import { AuthProvider } from '../../providers/auth/auth';
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

  children: any;
  attendanceTable: any;
  errorMessage: string;
  successMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public matronsService: MatronsServiceProvider,
              public toastCtrl:ToastController,
              public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
    this.matronsService.getAttendanceTable().subscribe(res => {
      if (res['success'] === true) {

        this.children = res['children'];
      }
    })
  }

  studentChecked(child) {
    child.checked = !child.checked;
  }

  getStudents() {
    console.log(this.children);
  }

  submitAttendance() {

    this.attendanceTable = this.children.map((child) => {
      if (child.checked === undefined) {
        child.checked = false;
      }
      return [child.id, child.checked, child.line, 0, new Date().toISOString()]
    });

    this.matronsService.submitAttendanceList(this.attendanceTable).subscribe(res => {

      if (res['success'] === true) {
        let toast = this.toastCtrl.create({
          message: 'Attendance List Submitted Successfully!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          message: 'Something Went Wrong!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    })
  }



  getUserType() {
    return this.authService.getType();
  }

}
