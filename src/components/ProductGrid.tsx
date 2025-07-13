import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List, Filter } from "lucide-react";

import headphonesImg from "@/assets/headphones.jpg";
import tshirtImg from "@/assets/tshirt.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import coffeeMugImg from "@/assets/coffee-mug.jpg";

// Mock product data with real images
const mockProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: headphonesImg,
    rating: 4.8,
    reviews: 124,
    isOnSale: true,
    isNew: false,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "2", 
    name: "Luxury Cotton T-Shirt",
    price: 49.99,
    image: tshirtImg,
    rating: 4.6,
    reviews: 89,
    isOnSale: false,
    isNew: true,
    inStock: true,
    category: "Fashion"
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 299.99,
    originalPrice: 399.99,
    image: smartwatchImg,
    rating: 4.9,
    reviews: 256,
    isOnSale: true,
    isNew: false,
    inStock: false,
    category: "Electronics"
  },
  {
    id: "4",
    name: "Artisan Coffee Mug",
    price: 24.99,
    image: coffeeMugImg,
    rating: 4.7,
    reviews: 43,
    isOnSale: false,
    isNew: true,
    inStock: true,
    category: "Home"
  },
  {
    id: "5",
    name: "Professional Laptop Bag",
    price: 89.99,
    originalPrice: 119.99,
    image: headphonesImg, // Reusing for demo
    rating: 4.5,
    reviews: 167,
    isOnSale: true,
    isNew: false,
    inStock: true,
    category: "Accessories"
  },
  {
    id: "6",
    name: "Organic Face Cream",
    price: 34.99,
    image: tshirtImg, // Reusing for demo
    rating: 4.8,
    reviews: 92,
    isOnSale: false,
    isNew: false,
    inStock: true,
    category: "Beauty"
  }
];

export function ProductGrid() {
  const [products] = useState(mockProducts);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      console.log(`Added ${product.name} to cart`);
      // Here you would integrate with your cart state management
    }
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated selection of premium products designed to enhance your lifestyle.
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'grid-cols-1 max-w-4xl mx-auto'
      }`}>
        {sortedProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
            />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </section>
  );
}