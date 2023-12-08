import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL_TOKEN, baseUrl } from '../../config';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';
import { ProductsService } from '../../content/backoffice/content/products/products.service';

const productsRes = {
  'data': [
    {
      '_id': '5f7f4475b5d4d253aac2d21b',
      'title': 'Product 111',
      'img': 'assets/img/product-4.jpg',
      'price': 2345,
      'author': 'Igor',
      'isFavorite': false
    },
    {
      '_id': '5f7f4475b5d4d253aac2d21c',
      'title': 'Product 231',
      'img': 'assets/img/product-5.jpg',
      'price': 23,
      'author': 'Vlad',
      'isFavorite': true
    },
    {
      '_id': '5f7f4475b5d4d253aac2d21d',
      'title': 'Product 41',
      'img': 'assets/img/product-6.jpg',
      'price': 2344,
      'author': 'Lena',
      'isFavorite': false
    },
    {
      '_id': '5f7f4475b5d4d253aac2d21e',
      'title': 'Product 31',
      'img': 'assets/img/product-7.jpg',
      'price': 334,
      'author': 'Lena',
      'isFavorite': false
    },
    {
      '_id': '5f7f4475b5d4d253aac2d21f',
      'title': 'Product 11',
      'img': 'assets/img/product-8.jpg',
      'price': 22,
      'author': 'Igor',
      'isFavorite': false
    },
    {
      '_id': '5f7f4475b5d4d253aac2d220',
      'title': 'Product 122',
      'img': 'assets/img/product-9.jpg',
      'price': 1200,
      'author': 'Max',
      'isFavorite': true
    },
    {
      '_id': '5f7f4475b5d4d253aac2d221',
      'title': 'Product 1',
      'img': 'assets/img/product-1.jpg',
      'price': 200,
      'author': 'Igor',
      'isFavorite': true
    },
    {
      '_id': '5f7f4475b5d4d253aac2d222',
      'title': 'Product 2345',
      'img': 'assets/img/product-2.jpg',
      'price': 221,
      'author': 'Vlad',
      'isFavorite': false
    },
    {
      '_id': '5f7f4475b5d4d253aac2d223',
      'title': 'Product 234',
      'img': 'assets/img/product-3.jpg',
      'price': 333,
      'author': 'Igor',
      'isFavorite': true
    }
  ]
};
describe('Interceptor', () => {
  let httpMocked: HttpTestingController;
  const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CustomInterceptorService,
          multi: true,
        },
        {
          provide: BASE_URL_TOKEN,
          useValue: baseUrl,
          multi: true
        },
        ProductsService
      ]
    });
    httpMocked = TestBed.inject(HttpTestingController);
  });


  it('should have auth header', inject([HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get('/auth')
        .subscribe();

      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/auth`
      });
      expect(httpReq.request.headers.has('Authorization')).toBeTruthy();
      expect(httpReq.request.headers.get('Authorization')).toEqual(authHeader);
    }));

  it('should transform ', inject([BASE_URL_TOKEN, ProductsService],
    (baseUrl: string, productsService: ProductsService) => {
      productsService.getProducts()
        .subscribe((res) => {
          expect(res).toEqual(productsRes.data);
        });

      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/products`
      });

      httpReq.flush(productsRes);
    }));
});
