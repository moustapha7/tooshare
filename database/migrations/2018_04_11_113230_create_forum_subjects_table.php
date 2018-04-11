<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forum_subjects', function (Blueprint $table) {
            $table->integer('id')->unsigned()->index();
            $table->string('title');
            // Foreign key Constraint
            $table->foreign('id')->references('id')->on('posts')->onDelete('cascade'); // Inheritance Relationship
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forum_subjects');
    }
}
