<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\giaovien;
use App\hocsinh;
use App\khoahoc;
use App\vanbanmoi;
use App\tinmoinhat;
use App\vanbantruong;
use App\vanbancapso;
use App\tinnhatruong;
use App\congdoan;
use App\tindoanthe;
use App\hdngoaigiolenlop;
use App\tinnhanh;
use App\video;
use App\chudeanh;
use App\anh;
use App\Mail\SendMail;
use Mail;



use Illuminate\Support\Facades\Auth;

class ControllerUser extends Controller
{

   
    public function registration(Request $request)
    {
        
        $username = $request['username'];
        $pass = $request['password'];
        $email = $request['email'];

        $user = new User();

        $user->name = $username;
        $user->email = $email;
        $user->password = bcrypt($pass);
        $user->level = 3;

        $count = User::where('email',$email)->count();
        $count1 = User::where('name',$username)->count();

        if($count1 == 0)
        {
          if($count ==0)
          {
            $user->save();
            echo 'Đăng ký thành công';
          }
          else
          {
           echo 'Email này hiện tại đã có người sử dụng';
          }
        
        }
        else
        {
          echo 'Tài khoản này đã có người dùng';
         
        }
       
    }

  public function getlogin ()
  {
    return view('login.login');
  }


  public function login(Request $request)
  {

    $this->validate($request,
        [
            'username'=> 'required',
            'password' => 'required',
            
        ],
        [
          'required' => ':attribute Không được để trống',
        ],
        [
          'username' => 'Tên tài khoản',
          'password' => 'Mật khẩu',
        ]);
        


    $username = $request['username'];
    $password = $request['password'];
    if(Auth::attempt(['name' => $username, 'password' => $password]))
    {
        $sql = User::select('level')->where('name',$username)->get();
        foreach ($sql as $k); 
        $quyen = $k->level;
        if($quyen == 1)
        {
          //return view('layout.admin',['quyen'=>1]);
          return redirect()->route('idadmin');
        }
        if($quyen == 2)
        {
          return redirect()->route('idadmingv');
        }
        else
        {
          return view('hocsinh.index',['user'=>Auth::user()]);
        }

         
    }
    else
    {
        return view('login.login',['error'=>'Tên đăng nhập hoặc mật khẩu không đúng']);  
    }
  }




  public function logout()
  {
      Auth::logout();
     return redirect('/');
  }
  
  public function trangchu()
  {
    $tinnhanh = tinnhanh::all();
    $vanbanmoi = vanbanmoi::all();
    $tinmoinhat = tinmoinhat::orderBy('id', 'desc')->take(3)->get();
    $vanbantruong = vanbantruong::orderBy('id', 'desc')->take(5)->get();
    $vanbanso = vanbancapso::orderBy('id', 'desc')->take(5)->get();
    $tinnhatruongnew = tinnhatruong::orderBy('id', 'desc')->take(1)->get();
    $tinnhatruong = tinnhatruong::orderBy('id', 'desc')->take(5)->get();
    $congdoannew = congdoan::orderBy('id', 'desc')->take(1)->get();
    $congdoan = congdoan::orderBy('id', 'desc')->take(5)->get();
    $tindoanthenew = tindoanthe::orderBy('id', 'desc')->take(1)->get();
    $tindoanthe = tindoanthe::orderBy('id', 'desc')->take(5)->get();
    $hdngllnew = hdngoaigiolenlop::orderBy('id', 'desc')->take(1)->get();
    $hdngll = hdngoaigiolenlop::orderBy('id', 'desc')->take(5)->get();
    $video = video::all();
    $chudeanh = chudeanh::all();
   

    return view('index',['tinnhanh'=>$tinnhanh,'vanbanmoi'=>$vanbanmoi,'tinmoinhat'=>$tinmoinhat,
    'vanbantruong'=>$vanbantruong,'vanbanso'=>$vanbanso,'tinnhatruongnew'=>$tinnhatruongnew,
    'tinnhatruong'=>$tinnhatruong,'congdoannew'=>$congdoannew,'congdoan'=>$congdoan,'tindoanthenew'=>$tindoanthenew,
    'tindoanthe'=>$tindoanthe,'hdngllnew'=>$hdngllnew,'hdngll'=>$hdngll,'video'=>$video,'chudeanh'=>$chudeanh]);
  }

  public function test()
  {
   // $data = chudeanh::find(1)->getIMG->toArray();
    // $data = chudeanh::find(1)->getIMG->take(1);
    return view('test');
  }

  public function getvanban($k,$tieude,$vanban)
  {
    $video = video::all();
    $tinmoinhat = tinmoinhat::all();
    $tuyensinh = tinnhanh::all();
    return view('index.vanban',['k'=>$k,'tieude'=>$tieude,'vanban'=>$vanban,'video'=>$video,'tinmoinhat'=>$tinmoinhat,'tuyensinh'=>$tuyensinh]);
  
  }
   
  public function getvanban1($k)
  {
    $video = video::all();
    $tinmoinhat = tinmoinhat::all();
    $tuyensinh = tinnhanh::all();
    return view('index.vanban1',['k'=>$k,'video'=>$video,'tinmoinhat'=>$tinmoinhat,'tuyensinh'=>$tuyensinh]);
  
  }

  public function getanh($k)
  {
    $data = chudeanh::find($k)->getIMG;
    return view('index.anh',['data'=>$data]);
   
  }

  // public function sendMail()
  // {
  //   $details = [
  //     'title' => 'Test Mail',
  //     'body' => 'Bùi Ngọc Khánh'
  //   ];
  
  //   Mail::to('khanhthanhvh@gmail.com')->send(new SendMail($details));

  // }
}
