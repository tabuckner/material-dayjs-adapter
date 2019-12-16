import { TestBed } from '@angular/core/testing';

import { MaterialDayjsAdapterService } from './material-dayjs-adapter.service';

describe('MaterialDayjsAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialDayjsAdapterService = TestBed.get(MaterialDayjsAdapterService);
    expect(service).toBeTruthy();
  });
});
