<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangerAttributsDeLaTableCommentEtCreationsDesAutresTablesUtilesLikes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*rajout des attributs content et cles etrangeres user_id parent_id qui fait reference a l'id parent du commentaire parent */
        Schema::table('comments',function (Blueprint $table){
            $table->text('content');
            $table->integer('user_id')->unsigned();
            $table->integer('parent_id')->unsigned()->nullable();
            $table->timestamps();
        });
        /*creation de la table comments_likes table pivot entre users et comments*/
        Schema::create('comment_likes',function (Blueprint $table){
           $table->increments('id');
           $table->integer('user_id')->unsigned()->index();
           $table->integer('comment_id')->unsigned()->index();
           $table->timestamps();
        });
        /* rajout de l'attribut conversation_id sur la table message cles etranger relaton entre conversation et messages */
        Schema::table('messages',function (Blueprint $table){
           $table->integer('conversation_id')->unsigned()->index();
        });

        /*creation de la table conversation_user table pivot entre users et conversation*/
        Schema::create('conversation_user',function (Blueprint $table){
            $table->increments('id');
            $table->integer('conversation_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->timestamps();
        });
        /*creation de la table post_likes table pivot entre post et user*/
        Schema::create('post_likes',function (Blueprint $table){
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->timestamps();
        });
        /*creation de la table post_shares table pivot entre users et post*/
        Schema::create('post_shares',function (Blueprint $table){
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->timestamps();
        });
        /*creation de la table post_follows table pivot entre users et posts*/
        Schema::create('post_follows',function (Blueprint $table){
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->timestamps();
        });

        /*creation de la table post_reportstable pivot entre users et posts*/
        Schema::create('post_reports',function (Blueprint $table){
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
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
        //
    }
}
