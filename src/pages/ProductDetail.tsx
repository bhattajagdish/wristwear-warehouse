
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <>
      <Header />
      <main className="pt-6 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb & Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-600 hover:text-teal"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                {product.isNew && (
                  <Badge className="bg-teal text-white mb-3">New</Badge>
                )}
                <h1 className="text-3xl font-bold text-navy mb-2">{product.name}</h1>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold text-navy">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <Separator className="my-6" />
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full focus:outline-none flex items-center justify-center ${
                        selectedColor === color.name ? "ring-2 ring-teal" : ""
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check className="h-5 w-5 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Quantity</h3>
                <div className="flex items-center w-32">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-4 text-center w-8">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              {/* Availability */}
              <div className="mb-6 flex items-center text-sm">
                <span className="mr-2 font-medium">Availability:</span>
                {product.stock > 0 ? (
                  <span className="text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-teal hover:bg-teal/90 py-6 flex-1"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="border-teal text-teal hover:bg-teal/10 py-6 flex-1"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="features">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose {product.name}</h3>
                    <p className="text-gray-600 mb-4">
                      The {product.name} combines advanced technology with sleek design to provide 
                      an unparalleled smartwatch experience. Whether you're tracking your fitness 
                      goals, staying connected, or expressing your style, this watch delivers excellence.
                    </p>
                    <p className="text-gray-600">
                      With a focus on {product.category.toLowerCase()} features, the {product.name} is 
                      perfect for users who value performance, reliability, and style.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="py-6">
                <div className="bg-white rounded-lg">
                  <table className="w-full text-left">
                    <tbody className="divide-y">
                      <tr className="border-t">
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50 w-1/3">Brand</td>
                        <td className="py-3 px-4">{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Model</td>
                        <td className="py-3 px-4">{product.name}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Category</td>
                        <td className="py-3 px-4">{product.category}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Colors Available</td>
                        <td className="py-3 px-4">
                          {product.colors.map(c => c.name).join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Water Resistance</td>
                        <td className="py-3 px-4">
                          {product.features.find(f => f.includes("Water")) || "Standard"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Battery Life</td>
                        <td className="py-3 px-4">
                          {product.features.find(f => f.includes("battery")) || "Standard"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">Display</td>
                        <td className="py-3 px-4">
                          {product.features.find(f => f.includes("display")) || "Standard LCD"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="py-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">
                      {product.rating} out of 5
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Based on {product.reviews} reviews
                  </p>
                  <Button className="bg-navy hover:bg-navy/90">
                    Write a Review
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetail;
