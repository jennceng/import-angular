import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadHelperService {

  constructor() { }

  validate(fileBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onload =  function (e) {
      // let dataUrl = e.target.result;
    }
  }
}
