<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangerAttributSurTableComments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {/*
        Schema::table('comments', function (Blueprint $table) {
             // $table->dropColumn('id');
              //$table->increments('id');
        });
        Schema::table('comments', function (Blueprint $table) {
            $table->increments('id');
            //$table->increments('id');
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comments', function (Blueprint $table) {
            //
        });
    }
}
