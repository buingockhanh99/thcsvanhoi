<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class ControllerAjax extends Controller
{
    public function myform()
    {
    	return view('ajax.testajax');
    }

    public function myformPost(Request $request)
    {


    	// $request->validate([
        //     'username' => 'required',
        //     'password' => 'required',
        //     'email' => 'required|email',
        // ]);

        $this->validate($request,
        [
            'username' => 'required|min:3|max:100'
        ],
        [
            'username.required'=>'Bạn chưa nhập tên tài khoản',
        ]);

    }



    public function myformm()
    {
    	return view('ajax.testajaxx');
    }

    public function myformmPost(Request $request)
    {

        $this->validate($request,
        [
            'username' => 'required|min:3|max:100'
        ],
        [
            'username.required'=>'Bạn chưa nhập tên tài khoản',
        ]);

        $username = $request['username'];
        $pass = $request['password'];
        $email = $request['email'];

        $user = new User();

        $user->name = $username;
        $user->email = $email;
        $user->password = bcrypt($pass);

        $user->save();
        
        echo"thành công";
     

    	
    }


    
}
