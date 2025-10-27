<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wooden Wonders | Premium Solid Wood Furniture</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body class="font-sans bg-amber-50">
    <custom-navbar></custom-navbar>
    
    <!-- Hero Section -->
    <section class="relative h-screen bg-amber-100 overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://ekstromfurniture.com/wp-content/uploads/2025/08/SAVE_20250801_095619.jpg" alt="Handcrafted Furniture" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center text-center px-4">
            <div class="max-w-4xl mx-auto text-white z-10">
                <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6">Solid Wood Furniture</h1>
                <p class="text-xl md:text-2xl mb-8">Handcrafted with care, designed for life</p>
                <a href="#shop" class="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 inline-block">Discover Collections</a>
            </div>
        </div>
    </section>

    <!-- Value Propositions -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="package" class="text-amber-700"></i>
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2">Handmade</h3>
                    <p class="text-gray-600">Each piece crafted with traditional techniques</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="tree" class="text-amber-700"></i>
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2">Solid Wood</h3>
                    <p class="text-gray-600">Premium sustainable materials</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="ruler" class="text-amber-700"></i>
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2">Customizable</h3>
                    <p class="text-gray-600">Tailored to your exact needs</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="heart" class="text-amber-700"></i>
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2">Lifetime</h3>
                    <p class="text-gray-600">Built to last generations</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Collections -->
    <section id="shop" class="py-16 bg-amber-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-serif font-bold text-center mb-12">Our Collections</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Collection 1 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <img src="https://ekstromfurniture.com/wp-content/uploads/2021/01/mesas-819x1024.jpg" alt="Tables Collection" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-serif font-semibold mb-2">Tables</h3>
                        <p class="text-gray-600 mb-4">Dining tables that bring families together</p>
                        <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                            View Collection <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Collection 2 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <img src="https://ekstromfurniture.com/wp-content/uploads/2021/01/Muebles-TV-819x1024.jpg" alt="TV Units" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-serif font-semibold mb-2">TV Units</h3>
                        <p class="text-gray-600 mb-4">Elegant entertainment centers</p>
                        <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                            View Collection <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Collection 3 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <img src="https://ekstromfurniture.com/wp-content/uploads/2021/01/aparadores-y-consolas-819x1024.jpg" alt="Sideboards" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-serif font-semibold mb-2">Sideboards</h3>
                        <p class="text-gray-600 mb-4">Functional storage with timeless design</p>
                        <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                            View Collection <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Process -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <h2 class="text-3xl font-serif font-bold mb-4">Our Craftsmanship Process</h2>
                <p class="text-gray-600">Every piece tells a story of careful selection, skilled craftsmanship, and attention to detail.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://ekstromfurniture.com/wp-content/uploads/2022/03/Ekstrom_2021_09-1536x1024.jpg" alt="Woodworking Process" class="rounded-lg shadow-lg">
                </div>
                <div>
                    <div class="mb-8">
                        <div class="flex items-start mb-4">
                            <div class="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                                <span class="text-amber-700 font-bold">1</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-serif font-semibold mb-2">Material Selection</h3>
                                <p class="text-gray-600">We source only the finest sustainable hardwoods, carefully inspecting each piece for quality and character.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <div class="flex items-start mb-4">
                            <div class="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                                <span class="text-amber-700 font-bold">2</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-serif font-semibold mb-2">Artisan Crafting</h3>
                                <p class="text-gray-600">Our skilled craftsmen use traditional techniques combined with modern precision to shape each component.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <div class="flex items-start mb-4">
                            <div class="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                                <span class="text-amber-700 font-bold">3</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-serif font-semibold mb-2">Finishing Touches</h3>
                                <p class="text-gray-600">Each piece receives hand-applied finishes that enhance the wood's natural beauty while providing protection.</p>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#" class="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full font-medium transition duration-300">
                        Learn More About Our Process
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-amber-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-amber-500 mr-2">
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6">"Our dining table is not just furniture - it's a work of art that has become the heart of our home. The craftsmanship is impeccable."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                            <img src="http://static.photos/people/200x200/1" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-medium">Sarah Johnson</h4>
                            <p class="text-gray-500 text-sm">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-amber-500 mr-2">
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6">"The custom bookshelves we ordered fit perfectly in our study. The quality of the wood and the attention to detail is unmatched."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                            <img src="http://static.photos/people/200x200/2" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-medium">Michael Chen</h4>
                            <p class="text-gray-500 text-sm">New York, NY</p>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-amber-500 mr-2">
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6">"I appreciate that each piece is unique, just like the tree it came from. The TV console has transformed our living room."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                            <img src="http://static.photos/people/200x200/3" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-medium">Elena Rodriguez</h4>
                            <p class="text-gray-500 text-sm">Austin, TX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Preview -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-serif font-bold">From Our Journal</h2>
                <a href="#" class="text-amber-700 hover:text-amber-800 font-medium transition duration-300 flex items-center">
                    View All Articles <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                </a>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Article 1 -->
                <div class="group">
                    <div class="mb-4 overflow-hidden rounded-lg">
                        <img src="https://ekstromfurniture.com/wp-content/uploads/2024/11/Black-Red-Modern-Black-Friday-Sale-Poster-1-1536x1086.png" alt="Black Friday Tips" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2 group-hover:text-amber-700 transition duration-300">
                        <a href="#">Black Friday: Identifying Real Discounts</a>
                    </h3>
                    <p class="text-gray-600 mb-4">4 tips to differentiate real offers from marketing tricks</p>
                    <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                        Read Article <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
                
                <!-- Article 2 -->
                <div class="group">
                    <div class="mb-4 overflow-hidden rounded-lg">
                        <img src="https://ekstromfurniture.com/wp-content/uploads/2024/10/blog-EKSTROM.jpg" alt="Furniture Care" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2 group-hover:text-amber-700 transition duration-300">
                        <a href="#">5 Tips to Keep Furniture Like New</a>
                    </h3>
                    <p class="text-gray-600 mb-4">Simple maintenance for lasting beauty</p>
                    <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                        Read Article <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
                
                <!-- Article 3 -->
                <div class="group">
                    <div class="mb-4 overflow-hidden rounded-lg">
                        <img src="https://ekstromfurniture.com/wp-content/uploads/2024/09/2150712893-1-1024x1536.jpg" alt="Design Tips" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
                    </div>
                    <h3 class="text-xl font-serif font-semibold mb-2 group-hover:text-amber-700 transition duration-300">
                        <a href="#">The 60-30-10 Rule Explained</a>
                    </h3>
                    <p class="text-gray-600 mb-4">Master this fundamental design principle</p>
                    <a href="#" class="text-amber-700 font-medium hover:text-amber-800 transition duration-300 flex items-center">
                        Read Article <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-amber-700 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-serif font-bold mb-4">Join Our Woodworking Journey</h2>
            <p class="max-w-2xl mx-auto mb-8">Subscribe to receive updates on new collections, woodworking stories, and exclusive offers.</p>
            <form class="max-w-md mx-auto flex">
                <input type="email" placeholder="Your email address" class="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800">
                <button type="submit" class="bg-amber-900 hover:bg-amber-800 px-6 py-3 rounded-r-lg font-medium transition duration-300">Subscribe</button>
            </form>
        </div>
    </section>

    <custom-footer></custom-footer>

    <script src="components/navbar.js"></script>
    <script src="components/footer.js"></script>
    <script src="script.js"></script>
    <script>
        feather.replace();
    </script>
</body>
</html>
