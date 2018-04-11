<?php

use Illuminate\Database\Seeder;

class skillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles=[];

        $roles[1]='CSS';
        $roles[2]='Javascript';
        $roles[3]='PHP';

        foreach($roles as $rol){
            DB::table('skills')->insert([
                'name' => $rol,

            ]);
        }

    }
}
