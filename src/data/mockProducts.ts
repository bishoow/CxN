
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  category: string;
  features: string[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Cotton Tee',
    price: 29,
    originalPrice: 39,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Black', 'White', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A timeless classic made from 100% premium cotton. Soft, comfortable, and perfect for everyday wear.',
    category: 'Basics',
    features: ['100% Cotton', 'Pre-shrunk', 'Machine Washable', 'Ribbed Crew Neck']
  },
  {
    id: '2',
    name: 'Premium Organic Tee',
    price: 45,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['White', 'Navy', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Sustainably made from organic cotton with a modern fit. Eco-friendly and incredibly soft.',
    category: 'Organic',
    features: ['Organic Cotton', 'GOTS Certified', 'Sustainable', 'Modern Fit']
  },
  {
    id: '3',
    name: 'Vintage Wash Tee',
    price: 35,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Gray', 'Blue', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Pre-washed for that perfect vintage feel. Relaxed fit with a lived-in comfort.',
    category: 'Vintage',
    features: ['Vintage Wash', 'Relaxed Fit', 'Soft Hand Feel', 'Faded Look']
  },
  {
    id: '4',
    name: 'Athletic Performance Tee',
    price: 42,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Moisture-wicking performance fabric perfect for workouts and active lifestyle.',
    category: 'Athletic',
    features: ['Moisture-Wicking', 'Quick Dry', 'Stretch Fabric', 'Athletic Fit']
  },
  {
    id: '5',
    name: 'Oversized Comfort Tee',
    price: 38,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Relaxed oversized fit for ultimate comfort. Perfect for lounging or casual outings.',
    category: 'Comfort',
    features: ['Oversized Fit', 'Drop Shoulders', 'Extra Soft', 'Casual Style']
  },
  {
    id: '6',
    name: 'Graphic Print Tee',
    price: 32,
    originalPrice: 42,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bold graphic design on premium cotton. Express your style with our artistic prints.',
    category: 'Graphics',
    features: ['Screen Print', 'Art Design', 'Fade Resistant', 'Premium Cotton']
  },
  {
    id: '7',
    name: 'Henley T-Shirt',
    price: 36,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Gray', 'Navy', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic henley style with button placket. Versatile piece that works for any occasion.',
    category: 'Casual',
    features: ['Button Placket', 'Classic Fit', 'Versatile Style', 'Cotton Blend']
  },
  {
    id: '8',
    name: 'Striped Essential Tee',
    price: 28,
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center'
    ],
    colors: ['Navy', 'Gray', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Timeless striped pattern on soft cotton. A wardrobe essential for effortless style.',
    category: 'Basics',
    features: ['Stripe Pattern', 'Soft Cotton', 'Classic Design', 'Easy Care']
  }
];
