<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entreprises;
use App\Domaines;

class EntreprisesController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index() 
    {
        if(Auth::check())
        {
            return view('entreprises.entreprise_liste',
            [
                'entreprises' => Entreprises::all()
            ]);
         }

        return view('auth.login');     
    }


     public function create() 
    {
         if(Auth::check())
        {
            return view('entreprises.entreprise_add',
            [
               
                'domaines'=>Domaines::all(),
                'users' =>User::all()
               
            ]);
         }

        return view('auth.login');     
    }


    public function edit($id)

    {
        if(Auth::check())
        {
            $entreprise = Entreprises::where('id', $id)->first();
            return view('entreprises.entreprise_update',
                [
                    'entreprise' => $entreprise,
                    'domaines' => Domaines::all(),
                    'users' => User::all()
                    
                ]

            );
         }

        return view('auth.login');     
    }


    public function store(Request $request)
    {
         if(Auth::check())
        {
            $entreprise= Entreprises::create($request->all());

            // return redirect()->route('offreemplois') ;
             return response()->json($entreprise, 201);
         }

        return view('auth.login');            
    }


    public function modif(Request $request)
    {
         if(Auth::check())
        {
            $id=$request->get('id');
            $entreprise =Entreprises::where("id",$id)->first();

            $entreprise->nomEntreprise = $request->get('nomEntreprise');
            $entreprise->ninea = $request->get('ninea');
            $entreprise->domaine1 = $request->get('domaine1');
            $entreprise->domaine2 = $request->get('domaine2');
            $entreprise->domaine3 = $request->get('domaine3');
            $entreprise->description= $request->get('description');
            $entreprise->adresse= $request->get('adresse');
            $entreprise->villeEtat= $request->get('villeEtat');
            $entreprise->codePostal= $request->get('codePostal');
            $entreprise->telephone= $request->get('telephone');
            $entreprise->email= $request->get('email');
            $entreprise->userId= $request->get('userId');
            $entreprise->save();
           
            //return redirect()->route('offreemplois') ;
            return response()->json(['succes'=>'update succesfully'],200);
         }

        return view('auth.login');     
    }



    /*************************************/
    
    public function storeDomaineEntreprise(Request $request)
    {
         if(Auth::check())
        {
             $domaine = Domaines::create($request->all());
        
        }

        return view('auth.login');     

    }


    public function storeUserEntreprise(Request $request)
    {
         if(Auth::check())
        {
             $user =User::create($request->all());
        
        }

        return view('auth.login');     

    }


    public function findDomaineEntrep(Request $request)
     {
         if(Auth::check())
        {
                $name=$request->get('name');
                $name =Domaines::where("name",$name)->first();
         }

        return view('auth.login');         
     
    }


    public function findUserEntrep(Request $request)
     {
         if(Auth::check())
        {
                $first_name=$request->get('first_name');
                $first_name =User::where("first_name",$first_name)->first();
         }

        return view('auth.login');         
     
    }



   /**********************/


    public function add() 
    {
         if(Auth::check())
        {
            $entreprise = new Entreprises();

            $entreprise->nomEntreprise = Input::get('nomEntreprise');
            $entreprise->ninea = Input::get('ninea');
            $entreprise->domaine1 = Input::get('domaine1');
            $entreprise->domaine2 = Input::get('domaine2');
            $entreprise->domaine3 = Input::get('domaine3');
            $entreprise->description= Input::get('description');
            $entreprise->adresse= Input::get('adresse');
            $entreprise->villeEtat= Input::get('villeEtat');
            $entreprise->codePostal= Input::get('codePostal');
            $entreprise->telephone= Input::get('telephone');
            $entreprise->email= Input::get('email');
            $entreprise->userId= Input::get('userId');
            $entreprise->save();

            
            return response()->json($entreprise, 201);
            //return redirect('offreemplois');
            
          }

        return view('auth.login');     
           
    }


    public function update()
     {
         if(Auth::check())
        {
            $entreprise= Entreprises::where('id', Input::get('id'))->first();

            $entreprise->nomEntreprise = Input::get('nomEntreprise');
            $entreprise->ninea = Input::get('ninea');
            $entreprise->domaine1 = Input::get('domaine1');
            $entreprise->domaine2 = Input::get('domaine2');
            $entreprise->domaine3 = Input::get('domaine3');
            $entreprise->description= Input::get('description');
            $entreprise->adresse= Input::get('adresse');
            $entreprise->villeEtat= Input::get('villeEtat');
            $entreprise->codePostal= Input::get('codePostal');
            $entreprise->telephone= Input::get('telephone');
            $entreprise->email= Input::get('email');
            $entreprise->userId= Input::get('userId');
            $entreprise->save();


            return response()->json($entreprise, 201);
            //return redirect('offreemplois');
        }

        return view('auth.login');      

    }


    public function delete($id) 
     {
         if(Auth::check())
        {
            $entreprise = Entreprises::where('id', $id)->first();
            $entreprise->forceDelete();

            return response()->json($entreprise, 201);
           // return redirect('offreemplois');
        }

        return view('auth.login');     
    }

}
