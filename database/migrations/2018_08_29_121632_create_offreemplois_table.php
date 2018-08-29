<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOffreemploisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offreemplois', function (Blueprint $table) {
             
            $table->increments('id');
            $table->string('titre');
            $table->string('description');
            $table->integer('categorie_id')->unsigned()->index();
            $table->string('typeContrat');
            $table->string('niveauEtude');
            $table->string('salaireMin');
            $table->string('salaireMax');
            $table->string('languesRequises');
            $table->string('dateExpiration');

            $table->foreign('categorie_id')->references('id')->on('categorieoffreemploi')->onDelete('cascade') ;
           

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
        Schema::dropIfExists('offreemplois');
    }
}
