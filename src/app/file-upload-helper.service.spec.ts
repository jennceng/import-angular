import { TestBed, inject } from '@angular/core/testing';

import { FileUploadHelperService } from './file-upload-helper.service';

describe('FileUploadHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadHelperService]
    });
  });

  it('should be created', inject([FileUploadHelperService], (service: FileUploadHelperService) => {
    expect(service).toBeTruthy();
  }));
});
