<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    protected $table = "users";

    public $timestamps = false;
    
    public function getGV()
    {
      return $this->hasOne(giaovien::class,'id_gv','id');
    }
}
