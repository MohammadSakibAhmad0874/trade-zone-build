import { ShoppingBag, Smartphone, Home, Shirt, Sparkles, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    count: 124,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    count: 89,
    color: "bg-pink-500",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    count: 67,
    color: "bg-green-500", 
    gradient: "from-green-500 to-green-600"
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: Sparkles,
    count: 45,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: Coffee,
    count: 78,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: ShoppingBag,
    count: 56,
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse range of categories and find exactly what you're looking for.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          
          return (
            <Card 
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-2 border-0 bg-gradient-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} items
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}