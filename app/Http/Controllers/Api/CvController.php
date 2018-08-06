<?php

namespace App\Http\Controllers\Api;
use App\Categorie_Formation; 
use App\Formation; 
use Illuminate\Http\Request;  
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth; 
use Intervention\Image\Facades\Image; 
use phpDocumentor\Reflection\Types\Integer; 
 
class CvController extends Controller 
{ 
    public function findAllCategorie() { 
 
         $categories=Categorie_Formation::all(); 
  
         return response()->json($categories, 201); 
     } 
     public function findAllFormationByCategorie(Request $request) { 
        // $user = User::where('id', $request->id)->first(); 
       // $user 'd)-        // $user = User::where('id', $request->id)->first(); 
         //$user=Auth::user(); 
         $categorie=Categorie_Formation::find( $request->id); 
         $formations=$categorie->formations(); 
  
         return response()->json($formations, 201); 
     } 
} 
