<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Vanbantruong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vanbantruong', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngay');
            $table->string('thang');
            $table->string('nam');
            $table->string('tieude');
            $table->string('filename');
          
          
        });
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vanbantruong');
    }
}
