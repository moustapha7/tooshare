<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserSetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_settigns',function (Blueprint $table){
            $table->increments('id');
            $table->integer('setting_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->string('value');
            $table->foreign('setting_id')->references('id')->on('settings')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::dropIfExists('user_settigns');
    }
}
