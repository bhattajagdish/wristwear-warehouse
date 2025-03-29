
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const featuredProducts = products.filter(product => product.isFeatured);

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium smartwatches, carefully chosen for their
            exceptional quality, innovative features, and stunning design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 
                      className="font-semibold text-lg mb-1 hover:text-teal cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.brand}</p>
                  </div>
                  {product.isNew && (
                    <Badge className="bg-teal text-white">New</Badge>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-navy font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-teal hover:bg-teal/90"
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image
                    })}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-navy hover:bg-navy/90 px-8">
            <a href="/products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
