<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimelinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timelines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username', 250)->unique();
            $table->string('name', 250);
            $table->text('about');
            $table->integer('avatar_id')->unsigned()->nullable();
            $table->integer('cover_id')->unsigned()->nullable();
            $table->string('cover_position', 255)->nullable();
            $table->enum('type', ['user', 'page', 'group']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timelines');
    }
}
