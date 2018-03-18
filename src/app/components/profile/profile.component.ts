import {Component, OnInit, ViewEncapsulation,ViewChild,ElementRef} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import{ProfileService} from "../../services/profile.service.service";
import {User} from "../../model/model.user";
import {Router} from "@angular/router";
import {NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  @ViewChild ('statusBtn') statusBtn: ElementRef ;
  taskList = [];
  constructor(public authService: AuthService, 
    public router: Router,
    public profileService: ProfileService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
   this.getTaskList();
  }

  setStatus(myDrop){ 
    this.statusBtn.nativeElement.value = myDrop;
    this.statusBtn.nativeElement.textContent = myDrop;
  }

  getTaskList(){
    this.profileService.getTask().subscribe(
        data => {
          this.taskList = data;
        }
    )
  }

  openModal(createModal){
    this.modalService.open(createModal);
  };
  
  closeModal(){
    this.activeModal.close();
  }
// login out from the app
  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

        });
  }
}
