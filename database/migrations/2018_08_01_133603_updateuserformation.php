<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Updateuserformation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*/modif formation
        Schema::table('formations',function (Blueprint $table){
            $table->string('description');
            $table->integer('categorie_id')->unsigned()->index();
            $table->foreign('categorie_id')->references('id')->on('categorie__formations')->onDelete('cascade');
        });
        *///modif User-Formation
        Schema::table('formation_user',function (Blueprint $table){
            $table->string('lieu');
            $table->date('datedebut')->nullable();
            $table->date('datefin')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
