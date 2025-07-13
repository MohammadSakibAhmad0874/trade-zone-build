import { Award, Users, Globe, Heart, Truck, Shield, RotateCcw, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "25+", label: "Countries Served" },
    { number: "4.9", label: "Average Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best possible experience for our customers."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We partner only with trusted brands and artisans who share our commitment to exceptional quality."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local artisans to international brands, we bring the world's finest products to your doorstep."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We believe in building meaningful relationships with our customers, partners, and community."
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $50 worldwide"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data is protected with industry-leading security measures"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns on all purchases"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer service team is always here to help"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/api/placeholder/300/300",
      description: "10+ years in e-commerce, passionate about sustainable retail."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/300",
      description: "Tech innovator focused on creating seamless shopping experiences."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "/api/placeholder/300/300",
      description: "Curator of premium products with an eye for emerging trends."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ShopCraft
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
              We're on a mission to redefine online shopping by curating the world's finest products 
              and delivering exceptional experiences that delight our customers.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, ShopCraft began as a small team of passionate individuals who believed 
                    that online shopping could be so much more than just transactions. We envisioned a platform 
                    where discovery, quality, and customer care would come together to create something truly special.
                  </p>
                  <p>
                    What started as a curated collection of handpicked products has grown into a global marketplace 
                    trusted by over 50,000 customers worldwide. But our core mission remains unchanged: to bring you 
                    the finest products while providing an exceptional shopping experience.
                  </p>
                  <p>
                    Today, we work with over 500 carefully selected brands and artisans, each chosen for their 
                    commitment to quality, sustainability, and innovation. Every product in our catalog tells a 
                    story, and we're honored to be part of your journey.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-card rounded-3xl p-8 shadow-strong">
                  <div className="bg-primary/10 rounded-2xl h-full flex items-center justify-center">
                    <div className="text-center text-primary">
                      <Award className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Quality First</h3>
                      <p className="text-muted-foreground mt-2">Every product carefully curated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape the experience we deliver to our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ShopCraft?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've built our platform around the features that matter most to modern shoppers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind ShopCraft who work tirelessly to bring you the best shopping experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-32 h-32 bg-gradient-card rounded-full mx-auto mb-6 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience ShopCraft?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made ShopCraft their preferred shopping destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-hover transition-colors">
                Start Shopping
              </button>
              <button className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}