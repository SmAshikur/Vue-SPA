<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class PublicAPIController extends Controller
{
    public function products()
    {
       //$pro=Product::latest()->paginate(16);
        $products=Product::with('category')->paginate(24);
        return response()->json($products,200);
    }
    public function product_details($slug)
    {
        $product = Product::with('category')->where('slug', $slug)->first();

        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json('not found', 404);
        }
    }
}
