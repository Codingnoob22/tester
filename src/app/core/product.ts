// core/product.ts

import { Flavor } from './flavour';
import { Size } from './size';

export interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  flavors: Flavor[];
  sizes: Size[];
}
