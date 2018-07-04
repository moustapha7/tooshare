<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AjouterDautresAttribuesALaTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->float('balance')->default(0);
            $table->date('birthday')->nullable();
            $table->string('city', 100)->nullable();
            $table->string('country', 100)->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->boolean('active')->default(1);
            $table->timestamp('last_logged')->nullable();
            $table->string('timezone')->nullable();
            $table->integer('affiliate_id')->unsigned()->nullable();
            $table->string('language', 15)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
