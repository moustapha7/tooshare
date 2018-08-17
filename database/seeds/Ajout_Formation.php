<?php

use Illuminate\Database\Seeder;

class Ajout_Formation extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('formations')->insert([

            [
                'name' => 'Oracle',
                'description' => 'Formation',
                'categorie_id'=>1,
    
            ],
            [
                'name' => 'Merise',
                'description' => 'Formation',
                'categorie_id'=>1,
            ],
            [
                'name' =>'Linux',
                'description' => 'Formation',
                'categorie_id'=>1,
            ],
            [
                'name' => 'Java',
                'description' => 'Formation',
                'categorie_id'=>1,
            ],
            [
                'name' => 'css',
                'description' => 'Formation',
                'categorie_id'=>1,
            ],
            [
                'name' => 'c++',
                'description' => 'Formation',
                'categorie_id'=>1,
            ],
            [
                'name' => 'Télémarketing',
                'description' => 'Formation',
                'categorie_id'=>8,
            ],
    
            [
                'name' => 'Outlook',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
    
            [
                'name' => 'Educateur spécialisé',
                'description' => 'Formation',
                'categorie_id'=>7,
            ],
            [
                'name' => 'Educateur de jeunes enfants',
                'description' => 'Formation',
                'categorie_id'=>7,
            ],
            [
                'name' => 'Gestion de Projet',
                'description' => 'Formation',
                'categorie_id'=>2,
            ],
            [
                'name' => ' Démarche qualité',
                'description' => 'Formation',
                'categorie_id'=>3,
            ],
            [
                'name' => 'Contrôle qualité',
                'description' => 'Formation',
                'categorie_id'=>3,
            ],
            [
                'name' => 'Assistant qualité',
                'description' => 'Formation',
                'categorie_id'=>3,
            ],
            [
                'name' => 1,
                'description' => 'Formation',
                'categorie_id'=>3,
            ],
            [
                'name' => 'Gestion fournisseurs',
                'description' => 'Formation',
                'categorie_id'=>4,
            ],
            [
                'name' => 'FIMO',
                'description' => 'Formation',
                'categorie_id'=>4,
            ],
            [
                'name' => 'Cariste',
                'description' => 'Formation',
                'categorie_id'=>4,
            ],
            [
                'name' => 'GAAP',
                'description' => 'Formation',
                'categorie_id'=>5,
            ],
            [
                'name' => 'Fiscalité des entreprises',
                'description' => 'Formation',
                'categorie_id'=>5,
            ],
            [
                'name' => 'Controle de gestion',
                'description' => 'Formation',
                'categorie_id'=>5,
            ],
            [
                'name' => 'Batiment',
                'description' => 'Formation',
                'categorie_id'=>6,
            ],
            [
                'name' => 'Ms Project',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
            [
                'name' => 'Visio Pro',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
            [
                'name' => 'Medico Social',
                'description' => 'Formation',
                'categorie_id'=>7,
            ],
            [
                'name' => 'Auxiliaire de Puericulture',
                'description' => 'Formation',
                'categorie_id'=>7,
            ],
            [
                'name' => 'Psychologie',
                'description' => 'Formation',
                'categorie_id'=>7,
            ],
            [
                'name' => 'Vente',
                'description' => 'Formation',
                'categorie_id'=>8,
            ],
            [
                'name' => 'Négiciation',
                'description' => 'Formation',
                'categorie_id'=>8,
            ],
            [
                'name' => 'Marketing',
                'description' => 'Formation',
                'categorie_id'=>8,
            ],
            [
                'name' => 'Caces',
                'description' => 'Formation',
                'categorie_id'=>9,
            ],
            [
                'name' => 'EPI',
                'description' => 'Formation',
                'categorie_id'=>9,
            ],
            [
                'name' => 'Habilitation électrique',
                'description' => 'Formation',
                'categorie_id'=>9,
            ],
            [
                'name' => 'Word',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
            [
                'name' => 'Excel',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
            [
                'name' => 'Acess',
                'description' => 'Formation',
                'categorie_id'=>10,
            ],
            [
                'name' => 'Prise de parole',
                'description' => 'Formation',
                'categorie_id'=>11,
            ],
            [
                'name' => 'Expression écrite',
                'description' => 'Formation',
                'categorie_id'=>11,
            ],
            [
                'name' => 'Lecture éfficace',
                'description' => 'Formation',
                'categorie_id'=>11,
            ],
            [
                'name' => 'Plomberie',
                'description' => 'Formation',
                'categorie_id'=>12,
            ],
            [
                'name' => 'Coiffure',
                'description' => 'Formation',
                'categorie_id'=>12,
            ],
            [
                'name' => 'Couture',
                'description' => 'Formation',
                'categorie_id'=>12,
            ],
    
        ]);
    }
}
