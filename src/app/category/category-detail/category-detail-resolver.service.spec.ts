import { TestBed, inject } from '@angular/core/testing';

import { CategoryDetailResolverService } from './category-detail-resolver.service';

describe('CategoryDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDetailResolverService]
    });
  });

  it('should be created', inject([CategoryDetailResolverService], (service: CategoryDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
