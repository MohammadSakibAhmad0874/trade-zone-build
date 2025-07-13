import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge 
                variant="secondary" 
                className="bg-secondary/20 text-white border-secondary/30 backdrop-blur-sm"
              >
                <TrendingUp className="h-3 w-3 mr-2" />
                Now Live - Holiday Collection
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Premium
                <span className="block bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                  Shopping
                </span>
                Experience
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl">
                Discover curated collections of premium products. From fashion to tech, 
                find everything you need with our seamless shopping experience.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-sm text-white/60">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Premium Products</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-medium ml-2">4.9/5</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold shadow-glow"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View Collections
              </Button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Product Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-strong">
                <div className="aspect-square bg-gradient-card rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Star className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Featured Product</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Bestseller
                  </Badge>
                  <h3 className="text-xl font-semibold text-white">Premium Collection</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">$299</span>
                    <Button size="sm" className="bg-secondary hover:bg-secondary-hover">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary rounded-full w-16 h-16 flex items-center justify-center shadow-glow">
                <span className="text-secondary-foreground font-bold">50%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}