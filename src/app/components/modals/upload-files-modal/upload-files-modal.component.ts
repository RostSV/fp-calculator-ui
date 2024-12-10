import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-upload-files-modal',
  templateUrl: './upload-files-modal.component.html',
  styleUrl: 'upload-files-modal.component.scss',
})
export class UploadFilesModalComponent {

  @ViewChild('fileDropRef', { static: false }) uploadTargetButton!: ElementRef<HTMLButtonElement>
  isFileOver: any;
  fileAccept: string = "application/vnd.ms-excel"
  uploadedFiles: File[] = [];
  constructor(public activeModal: NgbActiveModal,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  onFileDrop($event: DragEvent): void {
    $event.preventDefault();
    const files: FileList = $event.dataTransfer?.files as FileList || new FileList();
    const fileArray: File[] = Array.from(files);
    this.uploadFiles(fileArray);
  }

  onDragOver($event: DragEvent): void {
    $event.preventDefault();
    this.isFileOver = true;
  }

  onDragLeave() {
    this.isFileOver = false;
  }

  onFileInputChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files: File[] = target.files?.length ? Array.from(target.files) : [];

    this.uploadFiles(files);
  }

  onUploadClick() {
    this.uploadTargetButton?.nativeElement.click();
  }

  private uploadFiles(files: File[]): void {
    if(files.length > 2) {
      this.messageService.add({severity: 'error', summary: 'Limit', detail: 'File limit of 2 extended', life: 5000});
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type === 'application/vnd.ms-excel' && files.length < 3 && this.uploadedFiles.length < 3) {
        this.uploadedFiles.push(file);
      } else {
        this.messageService.add({severity: 'error', summary: 'Invalid file', detail: 'Only .xls files are allowed', life: 5000});
        return;
      }
    }
    console.info('Uploading files', this.uploadedFiles)
  }

  onSubmit() {
    this.activeModal.close(this.uploadedFiles);
  }
}
