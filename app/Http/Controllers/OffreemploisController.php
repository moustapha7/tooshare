<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use App\Categorieoffreemploi;
use App\Offreemplois;

class OffreemploisController extends Controller
{
    //
	public function __construct(){
        $this->middleware('auth');
    }

    public function index() 
    {
        if(Auth::check())
        {
            return view('offreemplois.offreemploi_liste',
            [
                'offreemplois' => Offreemplois::all()
            ]);
         }

        return view('auth.login');     
    }


    public function create() 
    {
         if(Auth::check())
        {
            return view('offreemplois.offreemploi_add',
            [
               
                'categorieoffreemplois'=>Categorieoffreemploi::all()
               
            ]);
         }

        return view('auth.login');     
    }


    public function edit($id)

    {
        if(Auth::check())
        {
            $offreemploi = Offreemplois::where('id', $id)->first();
            return view('offreemplois.ofrreemploi_update',
                [
                    'offreemploi' => $offreemploi,
                    'categorieoffreemplois' => Categorieoffreemploi::all()
                    
                ]

            );
         }

        return view('auth.login');     
    }


    public function store(Request $request)
    {
         if(Auth::check())
        {
            $offreemploi = Offreemplois::create($request->all());

             return redirect()->route('offreemplois') ;
             return response()->json($offreemploi, 201);
         }

        return view('auth.login');      

       
    }



     public function modif(Request $request)
    {
         if(Auth::check())
        {
            $id=$request->get('id');
            $offreemploi =Offreemplois::where("id",$id)->first();
            $offreemploi->titre = $request->get('titre');
            $offreemploi->description = $request->get('description');
            $offreemploi->categorie_id = $request->get('categorie_id');
            $offreemploi->typeContrat = $request->get('typeContrat');
            $offreemploi->niveauEtude = $request->get('niveauEtude');
            $offreemploi->salaireMin= $request->get('salaireMin');
            $offreemploi->salaireMax= $request->get('salaireMax');
            $offreemploi->languesRequises= $request->get('languesRequises');
            $offreemploi->dateExpiration= $request->get('dateExpiration');
            $offreemploi->save();
           
            //return redirect()->route('offreemplois') ;
            return response()->json(['succes'=>'update succesfully'],200);
         }

        return view('auth.login');     
    }

    /***************************??.*********************/
    public function storeCategorieOffreEmpl(Request $request)
    {
         if(Auth::check())
        {
             $categorieoffreemploi = Categorieoffreemploi::create($request->all());
        
        }

        return view('auth.login');     

    }


    public function findCategorieOffreEmpl(Request $request)
     {
         if(Auth::check())
        {
                $libelle=$request->get('libelle');
                $libelle =Categorieoffreemploi::where("libelle",$libelle)->first();
         }

        return view('auth.login');         
     
    }


	/******************************************************************************/


	public function add() 
    {
         if(Auth::check())
        {
            $offreemploi = new Offreemplois();

            $offreemploi->titre = Input::get('titre');
            $offreemploi->description = Input::get('description');
            $offreemploi->categorie_id = Input::get('categorie_id');
            $offreemploi->typeContrat = Input::get('typeContrat');
            $offreemploi->niveauEtude = Input::get('niveauEtude');
            $offreemploi->salaireMin= Input::get('salaireMin');
            $offreemploi->salaireMax= Input::get('salaireMax');
            $offreemploi->languesRequises= Input::get('languesRequises');
            $offreemploi->dateExpiration= Input::get('dateExpiration');
            $offreemploi->save();

            
            return response()->json($offreemploi, 201);
             return redirect('offreemplois');
            
          }

        return view('auth.login');     
           
    }


     public function update()
     {
         if(Auth::check())
        {
            $offreemploi = Offreemplois::where('id', Input::get('id'))->first();

            $offreemploi->titre = Input::get('titre');
            $offreemploi->description = Input::get('description');
            $offreemploi->categorie_id = Input::get('categorie_id');
            $offreemploi->typeContrat = Input::get('typeContrat');
            $offreemploi->niveauEtude = Input::get('niveauEtude');
            $offreemploi->salaireMin= Input::get('salaireMin');
            $offreemploi->salaireMax= Input::get('salaireMax');
            $offreemploi->languesRequises= Input::get('languesRequises');
            $offreemploi->dateExpiration= Input::get('dateExpiration');
            $offreemploi->save();

            return response()->json($offreemploi, 201);
             return redirect('offreemplois');
        }

        return view('auth.login');      

    }


     public function delete($id) 
     {
         if(Auth::check())
        {
            $offreemploi = Offreemplois::where('id', $id)->first();
            $offreemploi->forceDelete();

            return response()->json($offreemploi, 201);
            return redirect('offreemplois');
        }

        return view('auth.login');     
    }






}
