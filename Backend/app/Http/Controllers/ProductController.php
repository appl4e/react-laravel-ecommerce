<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct( Request $req){
        $product = new Product;
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        $product->file_path = $req->file('fileName')->store('products');
        $product->save();
        return $product;
    }

    function list(){
        return Product::all();
    }

    function delete($id){
        $result = Product::where('id', $id)->delete();

        if($result){
            return ["result" => "Product has been deleted successfully"];
        }
        else{
            return ["result" => "Oops, something went wrong"];
        }

    }
    
    function singleProduct($id){
        return Product::find($id);
    }

    function editProduct($id, Request $req){
        $product = Product::find($id);
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        if($req->file('fileName')){
            $product->file_path = $req->file('fileName')->store('products');

        }
        $product->save();
        return $product;
    }

    function searchProduct($key){
        return Product::where('name', 'Like', "%$key%")->get();
    }
}
