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
         $idcat=$request->get('idcategorie');
         $categorie=Categorie_Formation::find($idcat); 
         $formations=Formation::where('categorie_id',$categorie->id)->get();
        //$formations=$categorie->formations->get();
  
         return response()->json($formations, 201); 
     } 
     public function AjoutFormationUser(Request $request){
        $formation=Formation::find($request->formation_id);
        // $freind=User::find($request->friend_id);
   $formation->users()->attach(Auth::user()->id,[
            "lieu"=>$request->lieu,
            "datedebut"=>$request->datedebut,
            "datefin"=>$request->datefin
        ]);
            return response()->json(['message'=>'succes'.$formation],200);
       
  
            
      }
} 
