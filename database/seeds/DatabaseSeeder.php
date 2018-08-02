<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // $this->call(Ajout_Categorie_formations::class);
       $this->call(Ajout_Formation::class);
        // $this->call(UsersTableSeeder::class);
    }
}
