<?php

use Illuminate\Database\Seeder;

class rolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles=[];

        $roles[1]='Admin';
        $roles[2]='user';
        $roles[3]='superEly';

       foreach($roles as $rol){
           DB::table('roles')->insert([
               'name' => $rol,
               'description' => str_random(40).'@gmail.com',

           ]);
       }

    }



}
