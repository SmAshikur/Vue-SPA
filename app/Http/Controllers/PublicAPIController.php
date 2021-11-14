<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class PublicAPIController extends Controller
{
    public function products()
    {
        $pro=Product::get();
        return response()->json($pro,200);
    }
}
