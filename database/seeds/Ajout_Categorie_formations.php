<?php

use Illuminate\Database\Seeder;

class Ajout_Categorie_formations extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorie__formations')->insert([

            [
                'name' => 'INFORMATIQUE',
    
            ],
    
            [
    
                'name' => 'MANAGEMENT',
    
            ],
    
            [
                'name'=> 'QUALITÉ - ORGANISATION',
    
            ],
    
            [
                'name'=> 'TRANSPORT LOGISTIQUE',
    
            ],
    
            [
                'name' => 'COMPTABILITÉ GESTION',
    
            ],
            [
                'name' => 'BTP',
    
            ],
            [
                'name' => 'SANTÉ - SOCIAL',
    
            ],
            [
                'name' => 'MARKETING VENTE',
    
            ],
            [
                'name' => 'SÉCURITÉ',
    
            ],
            [
                'name' => 'BUREAUTIQUE',
    
            ],
            [
                'name' => ' COMMUNICATION',
    
            ],
            [
                'name' => 'AUTRES',
    
            ],
    
        ]);
    
    }
}
