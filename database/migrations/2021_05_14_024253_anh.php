<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Anh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anh', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_chude')->references('id')->on('chudeanh');
            $table->string('tenanh');
            $table->string('filename');
            $table->string('nguoidang');
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anh');
    }
}
