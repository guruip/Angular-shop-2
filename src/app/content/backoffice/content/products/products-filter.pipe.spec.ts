import { ProductsFilterPipe } from './products-filter.pipe';


let mockedProducts = [
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
];
describe('Products filter', () => {
  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });


  it('Should work in right way', () => {
    expect(productsFilterPipe.transform(mockedProducts, ''))
      .toEqual(mockedProducts);
    expect(productsFilterPipe.transform(mockedProducts, '111'))
      .toEqual([mockedProducts[0]]);
    expect(productsFilterPipe.transform(mockedProducts, '', true).length)
      .toEqual(4);
  });
});
