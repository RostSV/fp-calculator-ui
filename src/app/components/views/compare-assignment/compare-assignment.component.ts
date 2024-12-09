import {Component, OnInit} from '@angular/core';
import { Comparation } from '../../../interfaces/comparation';
import {compare_result, history} from "../../../interfaces/data";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  UploadFilesModalComponent
} from "../../modals/upload-files-modal/upload-files-modal.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-compare-assignment',
  standalone: false,
  templateUrl: './compare-assignment.component.html'
})

export class CompareAssignmentComponent implements OnInit{
  history!: Comparation[];
  rows = 5;

  constructor(private modalService: NgbModal,
              private router: Router) {}

  ngOnInit() {
    this.history = history;
  }

  openUploadFilesModal(): void{
    const modalRef = this.modalService.open(UploadFilesModalComponent, {centered: true, size: 'lg'});
    modalRef.result.then((result) => {
      this.router.navigate(['/compare-result']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
