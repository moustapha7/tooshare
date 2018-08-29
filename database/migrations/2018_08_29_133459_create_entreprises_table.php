<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntreprisesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entreprises', function (Blueprint $table) {
           $table->increments('id');
            $table->string('nomEntreprise');
            $table->string('niea');
            $table->integer('domaine1')->unsigned()->index();
            $table->integer('domaine2')->unsigned()->index()->nullable();
            $table->integer('domaine3')->unsigned()->index()->nullable();
            $table->string('description');
            $table->string('adresse');
            $table->string('villeEtat');
            $table->string('codePostal');
            $table->string('telephone');
            $table->string('email')->unique();
            $table->integer('userId')->unsigned()->index();

            $table->foreign('domaine1')->references('id')->on('domaines')->onDelete('cascade') ;
            $table->foreign('domaine2')->references('id')->on('domaines')->onDelete('cascade') ;
            $table->foreign('domaine3')->references('id')->on('domaines')->onDelete('cascade') ;
           
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade') ;
           

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entreprises');
    }
}
