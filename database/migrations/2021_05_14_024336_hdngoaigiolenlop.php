<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Hdngoaigiolenlop extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hdngoaigiolenlop', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tieude');
            $table->string('filename');
            $table->string('imgname');
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hdngoaigiolenlop');
    }
}
