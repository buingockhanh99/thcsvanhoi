<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class chudeanh extends Model
{
    protected $table = "chudeanh";

    public $timestamps = false;


    public function getGV()
    {
      return $this->hasOne(giaovien::class,'id_gv','id');
    }

    public function getIMG()
    {
      return $this->hasMany('App\anh','idchude','id');
    }
}

