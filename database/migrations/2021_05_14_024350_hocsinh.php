<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Hocsinh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hocsinh', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_hs')->references('id')->on('users');
            $table->string('hoten');
            $table->string('diachi');
            $table->string('sdt');
            $table->string('anh');
            $table->string('gioitinh');
            $table->string('khoahoc');
            $table->date('ngaysinh');

          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hocsinh');
    }
}
