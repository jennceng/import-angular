import { Component, OnInit } from '@angular/core';
import { FileUploadHelperService } from '../file-upload-helper.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  // fileItem= '';
  fileService: FileUploadHelperService;

  constructor(fileService: FileUploadHelperService) {
    this.fileService = fileService;
  }

  ngOnInit() {
  }

  onFileSelection(event) {
    // add extension validation with event.target.value;
    const fileBlob = event.target.files[0]
    // size validation event.target.files[0].size
    this.fileService.validate(fileBlob);
    // this.fileService.validate(event.target.value);
  }

}
