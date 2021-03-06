<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\giaovien;
use App\hocsinh;
use App\User;
use App\khoahoc;
use App\vanbanmoi;
use App\tinmoinhat;
use App\vanbantruong;
use App\vanbancapso;
use App\tinnhatruong;
use App\congdoan;
use App\tindoanthe;
use App\hdngoaigiolenlop;
use App\video;
use App\tinnhanh;
use App\chudeanh;
use App\anh;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\chuyendoihtml;
use App\Http\WordPHP;
use App\Mail\SendMail;
use Mail;



class ControllerAdmin extends Controller
{
  
    public function index()
    {
        return view('admin.index');
    }
    public function indexgv()
    {
        return view('giaovien.index');
    }
//--------------------------------GET ADD--------------------------------------------
    public function addAccoutGV()
    {
        return view('admin.add.AccoutGV');
    }
    public function addAccoutHS()
    {
        return view('admin.add.AccoutHS');
    }
    public function addkhoahoc()
    {
      return view('admin.add.Khoahoc');
    }
    public function addTN()
    {
      return view('admin.add.tinnhanh');
    }
    public function addVBM()
    {
      return view('admin.add.VBmoi');
    }
    public function addTMN()
    {
      return view('admin.add.tinmoinhat');
    }
    public function addVBT()
    {
      return view('admin.add.VBT');
    }
    public function addVBCS()
    {
      return view('admin.add.VBCS');
    }
    public function addTNT()
    {
      return view('admin.add.TNT');
    }
    public function addcongdoan()
    {
      return view('admin.add.congdoan');
    }
    public function addtindoanthe()
    {
      return view('admin.add.tindoanthe');
    }
    public function addhdngoaigiolenlop()
    {
      return view('admin.add.hdngoaigiolenlop');
    }
//-----------------------------------QuanLy------------------------------------
  //  public function QLkhoahoc()
  //     {
  //       $data = khoahoc::all()->get();
  //       return view('admin.quanly.Khoahoc',['data'=>$data]);
  //     }
    public function QLTN()
    {
      $data = tinnhanh::all();
      return view('admin.quanly.tinnhanh',['data'=>$data]);
    }
    public function QLVBM()
    {
      $data = vanbanmoi::all();
      return view('admin.quanly.VBmoi',['data'=>$data]);
    }

    public function QLTMN()
    {
      $data = tinmoinhat::all();
      return view('admin.quanly.tinmoinhat',['data'=>$data]);
    }
    public function QLVBT()
    {
      $data = vanbantruong::all();
      return view('admin.quanly.VBT',['data'=>$data]);
    }
    public function QLVBCS()
    {
      $data = vanbancapso::all();
      return view('admin.quanly.VBCS',['data'=>$data]);
    }
    public function QLTNT()
    {
      $data = tinnhatruong::all();
      return view('admin.quanly.TNT',['data'=>$data]);
    }
    public function QLcongdoan()
    {
      $data = congdoan::all();
      return view('admin.quanly.congdoan',['data'=>$data]);
    }
    public function QLtindoanthe()
    {
      $data = tindoanthe::all();
      return view('admin.quanly.tindoanthe',['data'=>$data]);
    }
    public function QLhdngoaigiolenlop()
    {
      $data = hdngoaigiolenlop::all();
      return view('admin.quanly.hdngoaigiolenlop',['data'=>$data]);
    }
    public function video()
    {
      $data = video::all();
      return view('admin.quanly.video',['data'=>$data]);
    }


    public function getthongtingv($id)
      {
        $data = giaovien::where('id_gv',$id)->get();
        return view('admin.thongtingv',['data'=>$data]);
      }

    public function QuanLyTKGV()
      {
      
        $user = User::where('level','=',2)->get();
        return view('admin.quanly.taikhoangv',['user'=>$user]);
      }
//--------------------------------------POST--------------------------------------------------

public function PaddAccoutGV(Request $request)
{
    
  $this->validate($request,
  [
      'username' => 'required|min:3|max:100|unique:users,name',
      'myname' => 'required|min:3|max:20',
      'email' => 'required|min:3|max:100|unique:users,email',
      'diachi'=> 'required|min:3|max:100',
      'sdt'=> 'required|min:10|max:10|unique:users,id',
      'date'=> 'required',
      'sex'=> 'required',
      'file'=>'required|image|unique:giaovien,anh',
  ],
  [
      'required' => ':attribute kh??ng ???????c ????? tr???ng',
      'min' => ':attribute kh??ng ???????c nh??? h??n :min',
      'max' => ':attribute kh??ng ???????c l???n h??n :max',
      'image' => ':attribute kh??ng ????ng ?????nh d???ng file',
      'unique' => ':attribute ???? t???n t???i',
  ],
  [
      'username' => 'T??n ????ng nh???p',
      'myname' => 'H??? v?? t??n',
      'email' => 'Email',
      'diachi'=> '?????a ch???',
      'sdt'=> 'S??? ??i???n tho???i',
      'date'=> 'Ng??y th??ng n??m sinh',
      'file'=> 'file ???nh',
      'sex'=> 'gi???i t??nh',
      
  ]);
  try{
    $username = $request ->username;
    $pass = $request->sdt.'@123';
    $myname = $request -> myname;
    $email = $request -> email;
    $diachi = $request ->diachi;
    $sdt = $request->sdt;
    $date = $request -> date;
    $file =$request -> file;
    $sex =$request ->sex;
    $namefile = $file->getClientOriginalName();

      
    $user = new User();
    $giaovien = new giaovien();

    $user->id = $sdt;
    $user->name = $username;
    $user->email = $email;
    $user->password = bcrypt($pass);
    $user->level = 2;

    $user->save();
    $giaovien ->id_gv = $sdt;
    $giaovien ->hoten = $myname;
    $giaovien ->diachi = $diachi;
    $giaovien ->sdt = $sdt;
    $giaovien ->anh = $namefile;
    $giaovien ->gioitinh = $sex;
    $giaovien -> ngaysinh = $date;
    $file->move('imggv',$namefile);

    $giaovien->save();

    $details = [
      'title' => 'T??i kho???n m???t kh???u',
      'taikhoan' => 'B??i Ng???c Kh??nh',
      'matkhau' => $pass,
    ];

    Mail::to($email)->send(new SendMail($details));

    return redirect('admin/QuanLyTKGV')->with('thongbao','T???o t??i kho???n th??nh c??ng');
  }
  catch(\Exception $exception)
  {
    return redirect('admin/tao-tai-khoan-giao-vien')->with('thongbaoloi','L???i d??? li???u t???i l??n');
  }
    
 

    
}
public function PaddAccoutHS(Request $request)
{
    
    $this->validate($request,
    [
        'username' => 'required|min:3|max:100',
        'myname' => 'required|min:3|max:20',
        'email' => 'required|min:3|max:100',
        'diachi'=> 'required|min:3|max:100',
        'sdt'=> 'required|min:10|max:10',
        'date'=> 'required',
        'file'=> 'required',
        'sex'=> 'required',
        'khoahoc' => 'required'
    ],
    [
        'username.required' =>'B???n ch??a nh???p t??n',
        'username.min' => 'username ph???i c?? ????? d??i l???n h??n 3',
        'username.max' => 'username ph???i c?? ????? nh??? h??n 100',
        'myname.required' =>'B???n ch??a nh???p t??n ????ng nh???p',
        'myname.min' => 'username ph???i c?? ????? d??i l???n h??n 3',
        'myname.max' => 'username ph???i c?? ????? nh??? h??n 20',
        'email.required' =>'B???n ch??a nh???p email',
        'email.min' => 'email ph???i c?? ????? d??i l???n h??n 3',
        'email.max' => 'email ph???i c?? ????? nh??? h??n 100',
        'diachi.required' =>'B???n ch??a nh???p ?????a ch???',
        'diachi.min' => '?????a ch??? ph???i c?? ????? d??i l???n h??n 3',
        'diachi.max' => '?????a ch??? ph???i c?? ????? nh??? h??n 100',
        'sdt.required' =>'B???n ch??a nh???p s??? ??i???n tho???i',
        'sdt.min' => 'S??? ??i???n tho???i ph???i c?? ????? d??i l?? 10',
        'sdt.max' => 'S??? ??i???n tho???i ph???i c?? ????? d??i l?? 10',
        'date.required' =>'B???n ch??a nh???p ng??y th??ng n??m sinh',
        'file.required' =>'B???n ch??a t???i ???nh',
        'sex.required' =>'B???n ch??a ch???n gi???i t??nh',
        'khoahoc.required' =>'B???n ch??a ch???n kh??a h???c'
    ]);

    $username = $request ->username;
    $pass = '12345678';
    $myname = $request -> myname;
    $email = $request -> email;
    $diachi = $request ->diachi;
    $sdt = $request -> sdt;
    $date = $request -> date;
    $file =$request -> file;
    $sex =$request ->sex;
    $namefile = $file->getClientOriginalName();
    $khoahoc = $request -> khoahoc;
    

    
    $user = new User();
    $hocsinh = new hocsinh();

    $user->id = $sdt;
    $user->name = $username;
    $user->email = $email;
    $user->password = bcrypt($pass);
    $user->level = 3;

    
    $countsdt =  User::where('id',$sdt)->count();
    $count = User::where('name',$username)->count();
    $count1 = User::where('email',$email)->count();
    $count2 = hocsinh::where('anh',$namefile)->count();

    if($countsdt ==0)
    {
      if($count == 0)
      {
        if($count1 ==0)
        {
            if($count2 ==0)
            {
              $user->save();
              $hocsinh ->id_hs = $sdt;
              $hocsinh ->hoten = $myname;
              $hocsinh ->diachi = $diachi;
              $hocsinh ->sdt = $sdt;
              $hocsinh ->anh = $namefile;
              $hocsinh ->gioitinh = $sex;
              $hocsinh -> ngaysinh = $date;
              $file->move('img',$namefile);
              $hocsinh -> khoahoc = $khoahoc;

              $hocsinh->save();
              return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbao','T???o t??i kho???n th??nh c??ng');
            }
            else
            {
              return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','T??n ???nh tr??ng');
            }
        }
        else
        {
          return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','Email n??y hi???n t???i ???? c?? ng?????i s??? d???ng');
        
        }
      
      }
      else
      {
        return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','T??i kho???n n??y ???? c?? ng?????i d??ng');
      }
    }
    else
    {
      return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','S??? ??i???n tho???i tr??ng');
    }

    
}
public function PaddKhoahoc(Request $request)
{
  $this->validate($request,
    [
        'nambatdau' => 'required|integer|min:2010|max:2100',
        'namketthuc' => 'required|integer|min:2010|max:2100'
    ],
    [
        'required' => ':attribute Kh??ng ???????c ????? tr???ng',
        'min' => ':attribute Kh??ng ???????c nh??? h??n :min',
        'max' => ':attribute Kh??ng ???????c l???n h??n :max',
        'integer' => ':attribute Ch??? ???????c nh???p s???',
    ],
    [
        'nambatdau' => 'N??m b???t ?????u kh??a h???c',
        'namketthuc' => 'N??m k???t th??c'
        
    ]);
    $khoahoc = new khoahoc();
    $nambatdau = $request->nambatdau;
    $namketthuc = $request->namketthuc;
    $khoahoc1 = $nambatdau.' - '.$namketthuc;
    $countdemkhoahoc = khoahoc::where('khoahoc',$khoahoc1)->count();
      if($countdemkhoahoc ==0)
      {
      $khoahoc->khoahoc = $khoahoc1;
      $khoahoc->save();
      return redirect('admin/tao-khoa-hoc')->with('thongbao','T???o kh??a h???c th??nh c??ng');

    }
    else
    {
      return redirect('admin/tao-khoa-hoc')->with('thongbaoloi','Kh??a h???c n??y ???? t???n t??i');
    }
}
public function PaddVBM (Request $request)
{
  $this->validate($request,
    [
      'tieude'=> 'required|max:500|unique:vanbanmoi,tieude',
      'file' => 'required|mimes:docx|unique:vanbanmoi,filename',
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng file:docx',
      'unique' => ':attribute ???? t???n t???i',
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u FILE'   
    ]);

    $tieude = $request ->tieude;
    $file =$request -> file;
    
    $filename = $file->getClientOriginalName();

    try
    {
    $vbm = new vanbanmoi();
    $vbm->tieude = $tieude;
    $vbm ->filename = $filename;
    $chuyendoi = new chuyendoihtml();
    $link = 'vanbanmoi';
    $chuyendoi->chuyendoi($link,$file);
    $file->move('vanbanmoi',$filename);
  
    $vbm->save();
    return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-van-ban-moi')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
    
        
      
   
  
}
public function PaddTMN (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500|unique:tinmoinhat,tieude',
        'file' => 'required|mimes:docx|unique:tinmoinhat,filename',
        'img' => 'required|image|unique:tinmoinhat,imgname'
    ],
    [
      'required' => ':attribute kh??ng ???????c ????? tr???ng',
      'max' => ':attribute kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'image' => ':attribute kh??ng ????ng ?????nh d???ng ???nh',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i l??n',
      'img' => '???nh t???i l??n',
    ]);
  try
  {
    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request -> img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $tmn = new tinmoinhat();

    
    $tmn->tieude = $tieude;
    $tmn ->filename = $filename;
    $tmn ->imgname = $imgname;
    $chuyendoi = new chuyendoihtml();
    $link = 'tinmoinhat/vanban';
    $chuyendoi->chuyendoi($link,$file);
    $file->move('tinmoinhat/vanban',$filename);
    $img->move('tinmoinhat/img',$imgname);
    

    $tmn->save();
    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','T???i l??n th??nh c??ng');
  }
  catch(\Exception $exception)
  {
    return redirect('admin/tao-tin-moi-nhat')->with('thongbaoloi','L???i d??? li???u t???i l??n');
  }
        
         
      
    
}
public function PaddVBT (Request $request)
{
  $this->validate($request,
    [
      
      'tieude'=> 'required|max:500|unique:vanbantruong,tieude',
      'file' => 'required|mimes:docx|unique:vanbantruong,filename',
    ],
    [
      'required' => ':attribute kh??ng ???????c ????? tr???ng',
      'max' => ':attribute kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u FILE',
      
    ]);
  try
  {
    $now = getdate();
    $ngay = $now["mday"];
    $thang = $now["mon"];
    $nam = $now["year"];
    $tieude = $request ->tieude;
    $file =$request -> file;
    
    $filename = $file->getClientOriginalName();

    $vbt = new vanbantruong();
    
    $vbt ->ngay = $ngay;
    $vbt ->thang = $thang;
    $vbt ->nam = $nam;
    $vbt->tieude = $tieude;
    $vbt ->filename = $filename;
    $link = 'vanbantruong';
    $chuyendoi = new chuyendoihtml();
    $chuyendoi->chuyendoi($link,$file);
    $file->move('vanbantruong',$filename);

    $vbt->save();
    return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','T???i l??n th??nh c??ng');
  }
  catch(\Exception $exception)
  {
    return redirect('admin/tao-van-ban-truong')->with('thongbaoloi','L???i d??? li???u t???i l??n');
  }
      
}
public function PaddVBCS (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500|unique:vanbancapso,tieude',
        'file' => 'required|mimes:docx|unique:vanbancapso,filename',
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u FILE',
    ]);
    try
    {
      $now = getdate();
      $ngay = $now["mday"];
      $thang = $now["mon"];
      $nam = $now["year"];
      $tieude = $request ->tieude;
      $file =$request -> file;
      
      $filename = $file->getClientOriginalName();

      $vbcs = new vanbancapso();

      $vbcs ->ngay = $ngay;
      $vbcs ->thang = $thang;
      $vbcs ->nam = $nam;
      $vbcs->tieude = $tieude;
      $vbcs ->filename = $filename;
      $chuyendoi = new chuyendoihtml();
      $link = 'vanbancapso';
      $chuyendoi->chuyendoi($link,$file);
      $file->move('vanbancapso',$filename);

      $vbcs->save();
      return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-van-ban-cap-so')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
     
}
public function PaddTNT (Request $request)
{
  $this->validate($request,
    [
      'tieude'=> 'required|max:500unique:tinnhatruong,tieude',
      'file' => 'required|mimes:docx|unique:tinnhatruong,filename',
      'img' =>'required|unique:tinnhatruong,imgname|image'
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      'image' => ':attribute kh??ng ????ng ????nh d???ng ???nh', 
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i l??n',
    ]);
    
    try
    {
      $tieude = $request ->tieude;
      $file =$request -> file;
      $img = $request ->img;
      
      $filename = $file->getClientOriginalName();
      $imgname = $img->getClientOriginalName();

      $tnt = new tinnhatruong();
      
      
      $tnt->tieude = $tieude;
      $tnt ->filename = $filename;
      $tnt ->imgname = $imgname;
      $chuyendoi = new chuyendoihtml();
      $link = 'tinnhatruong/vanban';
      $chuyendoi->chuyendoi($link,$file);
      $file->move('tinnhatruong/vanban',$filename);
      $img->move('tinnhatruong/img',$imgname);

      $tnt->save();
      return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-tin-nha-truong')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
        
}
public function Paddcongdoan (Request $request)
{
  $this->validate($request,
    [
      'tieude'=> 'required|max:500|unique:congdoan,tieude',
      'file' => 'required|mimes:docx|unique:congdoan,filename',
      'img' =>'required|unique:congdoan,imgname|image'
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      'image' => ':attribute kh??ng ????ng ?????nh d???ng ???nh',
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i li??n',
      'img' =>'???nh t???i l??n',     
    ]);
    try
    {
      $tieude = $request ->tieude;
      $file =$request -> file;
      $img = $request ->img;
      
      $filename = $file->getClientOriginalName();
      $imgname = $img->getClientOriginalName();

      $cd = new congdoan();
      
        
      $cd->tieude = $tieude;
      $cd ->filename = $filename;
      $cd ->imgname = $imgname;

      $chuyendoi = new chuyendoihtml();
      $link = 'congdoan/vanban';
      $chuyendoi->chuyendoi($link,$file);

      $file->move('congdoan/vanban',$filename);
      $img->move('congdoan/img',$imgname);

      $cd->save();
      return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-tin-cong-doan')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
}
public function Paddtindoanthe (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500|unique:tindoanthe,tieude',
        'file' => 'required|mimes:docx|unique:tindoanthe,filename',
        'img' =>'required|unique:tindoanthe,imgname|image',
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      'image' => ':attribute kh??ng ????ng ?????nh d???ng ???nh',
      
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i l??n',
      'img' =>'???nh t???i l??n',
      
    ]);
    try
    {
      $tieude = $request ->tieude;
      $file =$request -> file;
      $img = $request ->img;
      
      $tindt = new tindoanthe();

      $tindt->tieude = $tieude;
      $tindt ->filename = $filename;
      $tindt ->imgname = $imgname;

      $chuyendoi = new chuyendoihtml();
      $link = 'tindoanthe/vanban';
      $chuyendoi->chuyendoi($link,$file);

      $file->move('tindoanthe/vanban',$filename);
      $img->move('tindoanthe/img',$imgname);

      $tindt->save();
      return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-tin-doan-the')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
        
}
public function Paddhdngoaigiolenlop (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500|unique:hdngoaigiolenlop,tieude',
        'file' => 'required |mimes:docx|unique:hdngoaigiolenlop,filename',
        'img' =>'required|unique:hdngoaigiolenlop,filename|image'
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      'image' => ':attribute kh??ng ????ng ?????nh d???ng ???nh',
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i l??n',
      'img' =>'???nh t???i l??n',
      
    ]);
    try
    {
      $tieude = $request ->tieude;
      $file =$request -> file;
      $img = $request ->img;

      $hdngll = new hdngoaigiolenlop();
      
      
      $hdngll->tieude = $tieude;
      $hdngll ->filename = $filename;
      $hdngll ->imgname = $imgname;
      
      $chuyendoi = new chuyendoihtml();
      $link = 'hdngoaigiolenlop/vanban';
      $chuyendoi->chuyendoi($link,$file);

      $file->move('hdngoaigiolenlop/vanban',$filename);
      $img->move('hdngoaigiolenlop/img',$imgname);

      $hdngll->save();
      return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-tin-hdngoaigiolenlop')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
        
}
public function PaddTN (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500|unique:tinnhanh,tieude',
        'file' => 'required |mimes:docx|unique:tinhanh,filename',
        
    ],
    [
      'required' => ':attribute Kh??ng ???????c ????? tr???ng',
      'max' => ':attribute Kh??ng ???????c l???n h??n :max',
      'mimes' => ':attribute kh??ng ????ng ?????nh d???ng docx',
      'unique' => ':attribute ???? t???n t???i t??n n??y',
      
      
    ],
    [
      'tieude' => 'Ti??u ?????',
      'file' => 'D??? li???u t???i l??n'   
    ]);

    try
    {
      $tieude = $request ->tieude;
      $file =$request -> file;
      
      $filename = $file->getClientOriginalName();

      $tn = new tinnhanh();
      
      $tn->tieude = $tieude;
      $tn ->filename = $filename;

      $chuyendoi = new chuyendoihtml();
      $link = 'tinnhanh';
      $chuyendoi->chuyendoi($link,$file);

      $file->move('tinnhanh',$filename);
      $tn->save();
      return redirect('admin/quan-ly-tin-tuyen-sinh')->with('thongbao','T???i l??n th??nh c??ng');
    }
    catch(\Exception $exception)
    {
      return redirect('admin/tao-tin-tuyen-sinh')->with('thongbaoloi','L???i d??? li???u t???i l??n');
    }
      
}


//--------------------------------------------Delete----------------------------------------------
    
    public function getxoa($id,$key)
    {
        switch ($key)
        {
          case "giaovien";
              $gv = giaovien::where('id_gv',$id);
              $gv ->delete();
              $us = User::find($id);
              $us ->delete();
              return redirect('admin/QuanLyTKGV')->with('thongbao','X??a th??nh c??ng');
          break;
          case "congdoan";
              $delete = congdoan::find($id);
              $img ='/congdoan/img/'.$delete->imgname;
              $file ='/congdoan/vanban/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
              if(file_exists($path.$img))
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','X??a th??nh c??ng');
                }
              }
              else
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','X??a th??nh c??ng');
                }
              }
          break;
          case "hdngoaigio";
              $delete = hdngoaigiolenlop::find($id);
              $img ='/hdngoaigiolenlop/img/'.$delete->imgname;
              $file ='/hdngoaigiolenlop/vanban/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
              if(file_exists($path.$img))
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','X??a th??nh c??ng');
                }
              }
              else
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','X??a th??nh c??ng');
                }
              }
          break;
          case "tindoanthe";
              $delete = tindoanthe::find($id);
                $img ='/tindoanthe/img/'.$delete->imgname;
                $file ='/tindoanthe/vanban/'.$delete->filename;
                $path = str_replace('\\','/',public_path());
                if(file_exists($path.$img))
                {
                  if(file_exists($path.$file))
                  {
                    unlink($path.$img);
                    unlink($path.$file);
                    unlink($path.$file.'.html');
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','X??a th??nh c??ng');
                  }
                  else
                  {
                    unlink($path.$img);
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','X??a th??nh c??ng');
                  }
                }
                else
                {
                  if(file_exists($path.$file))
                  {
                    unlink($path.$img);
                    unlink($path.$file);
                    unlink($path.$file.'.html');
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','X??a th??nh c??ng');
                  }
                  else
                  {
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','X??a th??nh c??ng');
                  }
                }
          break;
          case "tinmoinhat";
              $delete = tinmoinhat::find($id);
              $img ='/tinmoinhat/img/'.$delete->imgname;
              $file ='/tinmoinhat/vanban/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
              if(file_exists($path.$img))
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','X??a th??nh c??ng');
                }
              }
              else
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','X??a th??nh c??ng');
                }
              }
          break;
          case "tinnhanh";
              $delete = tinnhanh::find($id);
              $file ='/tinnhanh/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
            
                if(file_exists($path.$file))
                {
                  
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-tuyen-sinh')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-tuyen-sinh')->with('thongbao','X??a th??nh c??ng');
                }
          break;
          case "tinnhatruong";
              $delete = tinnhatruong::find($id);
              $img ='/tinnhatruong/img/'.$delete->imgname;
              $file ='/tinnhatruong/vanban/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
              if(file_exists($path.$img))
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','X??a th??nh c??ng');
                }
              }
              else
              {
                if(file_exists($path.$file))
                {
                  unlink($path.$img);
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','X??a th??nh c??ng');
                }
              } 
          break;
          case "vbcs";
              $delete = vanbancapso::find($id);
              $file ='/vanbancapso/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
            
                if(file_exists($path.$file))
                {
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','X??a th??nh c??ng');
                }
          break;
          case "vbmoi";
            $delete = vanbanmoi::find($id);
            $file ='/vanbanmoi/'.$delete->filename;
            $path = str_replace('\\','/',public_path());
          
              if(file_exists($path.$file))
              {
              
                unlink($path.$file);
                unlink($path.$file.'.html');
                $delete ->delete();
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','X??a th??nh c??ng');
              }
              else
              {
                $delete ->delete();
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','X??a th??nh c??ng');
              }
          break;
          case "vbt";
              $delete = vanbantruong::find($id);
              $file ='/vanbantruong/'.$delete->filename;
              $path = str_replace('\\','/',public_path());
            
                if(file_exists($path.$file))
                {
                
                  unlink($path.$file);
                  unlink($path.$file.'.html');
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','X??a th??nh c??ng');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','X??a th??nh c??ng');
                }
          break;
        } 
    }

    //----------------------------------------get noi dung xoa ----------------------------

    public function getnoidungxoa($id,$key)
    {
      switch ($key)
      {
        case "congdoan";
          $k = 1;
          $data = congdoan::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "hdngoaigio";
          $k = 2;
          $data = hdngoaigiolenlop::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "tindoanthe";
          $k = 3;
          $data = tindoanthe::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "tinmoinhat";
          $k = 4;
          $data = tinmoinhat::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "tinnhanh";
          $k = 5;
          $data = tinnhanh::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "tinnhatruong";
          $k = 6;
          $data = tinnhatruong::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "vbcs";
          $k = 7;
          $data = vanbancapso::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "vbmoi";
          $k = 8;
          $data = vanbanmoi::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
        case "vbt";
          $k = 9;
          $data = vanbantruong::whereId($id)->get();
          return view('admin.noidungxoa',['data'=>$data,'noidung'=>$k]);
        break;
      }
    }
  //-------------------------------------------Update---------------------------------------
 
  public function getnoidungsua($id,$key)
  {
    switch ($key)
    {
      case "congdoan";
        $k = 1;
        $data = congdoan::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "hdngoaigio";
        $k = 2;
        $data = hdngoaigiolenlop::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "tindoanthe";
        $k = 3;
        $data = tindoanthe::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "tinmoinhat";
        $k = 4;
        $data = tinmoinhat::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "tinnhanh";
        $k = 5;
        $data = tinnhanh::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "tinnhatruong";
        $k = 6;
        $data = tinnhatruong::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "vbcs";
        $k = 7;
        $data = vanbancapso::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "vbmoi";
        $k = 8;
        $data = vanbanmoi::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "vbt";
        $k = 9;
        $data = vanbantruong::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
      case "video";
        $k = 10;
        $data = video::find($id);
        return view('admin.noidungsua',['data'=>$data,'noidung'=>$k]);
      break;
    }
  }


  public function postnoidungsua(Request $request,$id,$key)
  {
    switch ($key)
    {
      case "congdoan";
          $update = congdoan::find($id);
          $this->validate($request,
          [
            'tieude'=> 'required|max:500|unique:congdoan,tieude',
          ],
          [
            'required' => ':attribute kh??ng ???????c ????? tr???ng',
            'max' => ':attribute kh??ng ???????c l???n h??n :max',   
            'unique' => ':attribute ???? t???n t???i',
          ],
          [
            'tieude' => 'Ti??u ?????',
          ]);
          try
          {
            $tieude = $request ->tieude;
            $file =$request -> file;
            $img = $request ->img;
            $confimtieude = $update ->tieude;
            
            if(isset($file)&isset($img))
            {
              $filename = $file->getClientOriginalName();
              $imgname = $img->getClientOriginalName();

              $counttf = congdoan::where('filename',$filename)->count();
              $countimg = congdoan::where('imgname',$imgname)->count();
              if($counttf ==0)
              {
                if($countimg ==0)
                {
                  
                  $linkimg ='/congdoan/img/'.$update->imgname;
                  $linkfile ='/congdoan/vanban/'.$update->filename;
                  $path = str_replace('\\','/',public_path());
                  unlink($path.$linkimg);
                  unlink($path.$linkfile);
                  unlink($path.$linkfile.'.html');
                  if($tieude != $confimtieude)
                  {     
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;
                    
                    $chuyendoi = new chuyendoihtml();
                    $link = 'congdoan/vanban';
                    $chuyendoi->chuyendoi($link,$file);

                    $file->move('congdoan/vanban',$filename);
                    $img->move('congdoan/img',$imgname);

                    $update->save();
                    return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                  
                  }
                  else
                  {
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'congdoan/vanban';
                    $chuyendoi->chuyendoi($link,$file);

                    $file->move('congdoan/vanban',$filename);
                    $img->move('congdoan/img',$imgname);

                    $update->save();
                    return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                  }
                
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
                }  
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ???nh tr??ng');
              }

            }
            else if(isset($file))
            {
              $filename = $file->getClientOriginalName();
              $counttf = congdoan::where('filename',$filename)->count();
              if($counttf ==0)
              {
                $linkfile ='/congdoan/vanban/'.$update->filename;
                $path = str_replace('\\','/',public_path());

                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');

                if($tieude != $confimtieude)
                {
                  
                  $update->tieude = $tieude;
                  $update ->filename = $filename;
                  
                  $chuyendoi = new chuyendoihtml();
                  $link = 'congdoan/vanban';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('congdoan/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                
                }
                else
                {
                  $update ->filename = $filename;
                  
                  $chuyendoi = new chuyendoihtml();
                  $link = 'congdoan/vanban';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('congdoan/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                }
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  
            }
            else if(isset($img))
            {
              $imgname = $img->getClientOriginalName();
              $countimg = congdoan::where('imgname',$imgname)->count();
              if($countimg ==0)
              {
                $linkimg ='/congdoan/img/'.$update->imgname;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkimg);
                if($tieude != $confimtieude)
                {
                
                  $update->tieude = $tieude;
                  $update ->imgname = $imgname;

                  $img->move('congdoan/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                  

                }
                else
                {
                  $update ->imgname = $imgname;
    
                  $img->move('congdoan/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
                }            
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','???nh n??y ???? t???n t???i');
              }  
            }
            else
            {
              $update->tieude = $tieude;
              $update->save();
              return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update th??nh c??ng');
            }
          }
          catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }

      break;

      case "hdngoaigio";
        $update = hdngoaigiolenlop::find($id);
        $this->validate($request,
          [
              'tieude'=> 'required|max:500',
          ],
          [
            'required' => ':attribute Kh??ng ???????c ????? tr???ng',
            'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
          ],
          [
            'tieude' => 'Ti??u ?????',
          ]);
          try
          {
            $tieude = $request ->tieude;
            $file =$request -> file;
            $img = $request ->img;
            $confimtieude = $update ->tieude;
            $counttd = hdngoaigiolenlop::where('tieude',$tieude)->count();
            
            if(isset($file)&isset($img))
            {
              $filename = $file->getClientOriginalName();
              $imgname = $img->getClientOriginalName();

              $counttf = hdngoaigiolenlop::where('filename',$filename)->count();
              $countimg = hdngoaigiolenlop::where('imgname',$imgname)->count();
              if($counttf ==0)
              {
                if($countimg ==0)
                {
                  
                  $linkimg ='/hdngoaigiolenlop/img/'.$update->imgname;
                  $linkfile ='/hdngoaigiolenlop/vanban/'.$update->filename;
                  $path = str_replace('\\','/',public_path());
                  unlink($path.$linkimg);
                  unlink($path.$linkfile);
                  unlink($path.$linkfile.'.html');
                  if($tieude != $confimtieude)
                  {
                    if($counttd ==0)
                    {
                      $update->tieude = $tieude;
                      $update ->filename = $filename;
                      $update ->imgname = $imgname;
                      
                      $chuyendoi = new chuyendoihtml();
                      $link = 'hdngoaigiolenlop/vanban';
                      $chuyendoi->chuyendoi($link,$file);

                      
                      $file->move('hdngoaigiolenlop/vanban',$filename);
                      $img->move('hdngoaigiolenlop/img',$imgname);

                      $update->save();
                      return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                    }
                  }
                  else
                  {
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'hdngoaigiolenlop/vanban';
                    $chuyendoi->chuyendoi($link,$file);

                    $file->move('hdngoaigiolenlop/vanban',$filename);
                    $img->move('hdngoaigiolenlop/img',$imgname);

                    $update->save();
                    return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                  }
                
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ???nh ???? t???n t???i');
                }  
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ???? t???n t???i');
              }

            }
            else if(isset($file))
            {
              $filename = $file->getClientOriginalName();
              $counttf = hdngoaigiolenlop::where('filename',$filename)->count();
              if($counttf ==0)
              {
                
                $linkfile ='/hdngoaigiolenlop/vanban/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
      
                    $chuyendoi = new chuyendoihtml();
                    $link = 'hdngoaigiolenlop/vanban';
                    $chuyendoi->chuyendoi($link,$file);

                    $file->move('hdngoaigiolenlop/vanban',$filename);
                    $update->save();
                    return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;
    
                  $chuyendoi = new chuyendoihtml();
                  $link = 'hdngoaigiolenlop/vanban';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('hdngoaigiolenlop/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                }
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  
            }
            else if(isset($img))
            {
              $imgname = $img->getClientOriginalName();
              $countimg = hdngoaigiolenlop::where('imgname',$imgname)->count();
              if($countimg ==0)
              {
              
                $linkimg ='/hdngoaigiolenlop/img/'.$update->imgname;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkimg);
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->imgname = $imgname;
      
                    $img->move('hdngoaigiolenlop/img',$imgname);
                    $update->save();
                    return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }

                }
                else
                {
                  $update ->imgname = $imgname;
    
                  $img->move('hdngoaigiolenlop/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
                }            
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','???nh n??y ???? t???n t???i');
              }  
            }
            else
            {
              $update->tieude = $tieude;
              $update->save();
              return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update th??nh c??ng');
            }
          }
          catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;

      case "tindoanthe";
      
          $update = tindoanthe::find($id);
          $this->validate($request,
            [
              'tieude'=> 'required|max:500',
            ],
            [
              'required' => ':attribute Kh??ng ???????c ????? tr???ng',
              'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
            ],
            [
              'tieude' => 'Ti??u ?????',
            ]);
            try
            {
              $tieude = $request ->tieude;
              $file =$request -> file;
              $img = $request ->img;
              $confimtieude = $update ->tieude;
              $counttd = tindoanthe::where('tieude',$tieude)->count();
              
              if(isset($file)&isset($img))
              {
                $filename = $file->getClientOriginalName();
                $imgname = $img->getClientOriginalName();

                $counttf = tindoanthe::where('filename',$filename)->count();
                $countimg = tindoanthe::where('imgname',$imgname)->count();
                if($counttf ==0)
                {
                  if($countimg ==0)
                  {
                    
                    $linkimg ='/tindoanthe/img/'.$update->imgname;
                    $linkfile ='/tindoanthe/vanban/'.$update->filename;
                    $path = str_replace('\\','/',public_path());
                    unlink($path.$linkimg);
                    unlink($path.$linkfile);
                    unlink($path.$linkfile.'.html');
                    if($tieude != $confimtieude)
                    {
                      if($counttd ==0)
                      {
                        $update->tieude = $tieude;
                        $update ->filename = $filename;
                        $update ->imgname = $imgname;
                        
                        $chuyendoi = new chuyendoihtml();
                        $link = 'tindoanthe/vanban';
                        $chuyendoi->chuyendoi($link,$file);

                        $file->move('tindoanthe/vanban',$filename);
                        $img->move('tindoanthe/img',$imgname);

                        $update->save();
                        return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                      }
                      else
                      {
                        return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                      }
                    }
                    else
                    {
                      $update ->filename = $filename;
                      $update ->imgname = $imgname;
                      
                      $chuyendoi = new chuyendoihtml();
                      $link = 'tindoanthe/vanban';
                      $chuyendoi->chuyendoi($link,$file);

                      $file->move('tindoanthe/vanban',$filename);
                      $img->move('tindoanthe/img',$imgname);

                      $update->save();
                      return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                    }
                  
                    
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
                  }  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ???nh tr??ng');
                }

              }
              else if(isset($file))
              {
                $filename = $file->getClientOriginalName();
                $counttf = tindoanthe::where('filename',$filename)->count();
                if($counttf ==0)
                {
                  
                  $linkfile ='/tindoanthe/vanban/'.$update->filename;
                  $path = str_replace('\\','/',public_path());
                  unlink($path.$linkfile);
                  unlink($path.$linkfile.'.html');
                  if($tieude != $confimtieude)
                  {
                    if($counttd ==0)
                    {
                      $update->tieude = $tieude;
                      $update ->filename = $filename;

                      $chuyendoi = new chuyendoihtml();
                      $link = 'tindoanthe/vanban';
                      $chuyendoi->chuyendoi($link,$file);
        
                      $file->move('tindoanthe/vanban',$filename);
                      $update->save();
                      return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                    }
                  }
                  else
                  {
                    $update ->filename = $filename;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'tindoanthe/vanban';
                    $chuyendoi->chuyendoi($link,$file);
      
                    $file->move('tindoanthe/vanban',$filename);
                    $update->save();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                  }
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
                }  
              }
              else if(isset($img))
              {
                $imgname = $img->getClientOriginalName();
                $countimg = tindoanthe::where('imgname',$imgname)->count();
                if($countimg ==0)
                {
                
                  $linkimg ='/tindoanthe/img/'.$update->imgname;
                  $path = str_replace('\\','/',public_path());
                  unlink($path.$linkimg);
                  if($tieude != $confimtieude)
                  {
                    if($counttd ==0)
                    {
                      $update->tieude = $tieude;
                      $update ->imgname = $imgname;
        
                      $img->move('tindoanthe/img',$imgname);
                      $update->save();
                      return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                    }

                  }
                  else
                  {
                    $update ->imgname = $imgname;
      
                    $img->move('tindoanthe/img',$imgname);
                    $update->save();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
                  }            
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','???nh n??y ???? t???n t???i');
                }  
              }
              else
              {
                $update->tieude = $tieude;
                $update->save();
                return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update th??nh c??ng');
              }
            }
            catch(\Exception $exception)
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
            }
      break;

      case "tinmoinhat";
        
        $update = tinmoinhat::find($id);
        $this->validate($request,
            [
              'tieude'=> 'required|max:500',
            ],
            [
              'required' => ':attribute Kh??ng ???????c ????? tr???ng',
              'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
            ],
            [
              'tieude' => 'Ti??u ?????',
            ]);
        try
        {
            $tieude = $request ->tieude;
            $file =$request -> file;
            $img = $request ->img;
            $confimtieude = $update ->tieude;
            $counttd = tinmoinhat::where('tieude',$tieude)->count();
            
            if(isset($file)&isset($img))
            {
              $filename = $file->getClientOriginalName();
              $imgname = $img->getClientOriginalName();

              $counttf = tinmoinhat::where('filename',$filename)->count();
              $countimg = tinmoinhat::where('imgname',$imgname)->count();
              if($counttf ==0)
              {
                if($countimg ==0)
                {
                  
                  $linkimg ='/tinmoinhat/img/'.$update->imgname;
                  $linkfile ='/tinmoinhat/vanban/'.$update->filename;
                  $path = str_replace('\\','/',public_path());
                  unlink($path.$linkimg);
                  unlink($path.$linkfile);
                  unlink($path.$linkfile.'.html');
                  if($tieude != $confimtieude)
                  {
                    if($counttd ==0)
                    {
                      $update->tieude = $tieude;
                      $update ->filename = $filename;
                      $update ->imgname = $imgname;

                      $chuyendoi = new chuyendoihtml();
                      $link = 'tinmoinhat/vanban';
                      $chuyendoi->chuyendoi($link,$file);
                      
                      $file->move('tinmoinhat/vanban',$filename);
                      $img->move('tinmoinhat/img',$imgname);

                      $update->save();
                      return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                    }
                  }
                  else
                  {
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'tinmoinhat/vanban';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('tinmoinhat/vanban',$filename);
                    $img->move('tinmoinhat/img',$imgname);

                    $update->save();
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                  }
                
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
                }  
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ???nh tr??ng');
              }

            }
            else if(isset($file))
            {
              $filename = $file->getClientOriginalName();
              $counttf = tinmoinhat::where('filename',$filename)->count();
              if($counttf ==0)
              {
                
                $linkfile ='/tinmoinhat/vanban/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'tinmoinhat/vanban';
                    $chuyendoi->chuyendoi($link,$file);
      
                    $file->move('tinmoinhat/vanban',$filename);
                    $update->save();
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;
    
                  $chuyendoi = new chuyendoihtml();
                  $link = 'tinmoinhat/vanban';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('tinmoinhat/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                }
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  
            }
            else if(isset($img))
            {
              $imgname = $img->getClientOriginalName();
              $countimg = tinmoinhat::where('imgname',$imgname)->count();
              if($countimg ==0)
              {
              
                $linkimg ='/tinmoinhat/img/'.$update->imgname;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkimg);
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->imgname = $imgname;
      
                    $img->move('tinmoinhat/img',$imgname);
                    $update->save();
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }

                }
                else
                {
                  $update ->imgname = $imgname;
    
                  $img->move('tinmoinhat/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
                }            
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','???nh n??y ???? t???n t???i');
              }  
            }
            else
            {
              $update->tieude = $tieude;
              $update->save();
              return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update th??nh c??ng');
            }
          }
          catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;

      case "tinnhanh";
       
        $update = tinnhanh::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
        ],
        [
          'tieude' => 'Ti??u ?????',
        ]);
        try
        {
          $tieude = $request ->tieude;
          $file =$request -> file;
          $confimtieude = $update ->tieude;
          $counttd = tinnhanh::where('tieude',$tieude)->count();
          
          if(isset($file)&isset($img))
          {
            $filename = $file->getClientOriginalName();
            $imgname = $img->getClientOriginalName();

            $counttf = tinnhanh::where('filename',$filename)->count();
            if($counttf ==0)
            {
                $linkfile ='/tinnhanh'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'tinnhanh';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('tinnhanh',$filename);
                  

                    $update->save();
                    return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'tinnhanh';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('tinnhanh',$filename);
                  
                  $update->save();
                  return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update th??nh c??ng');
                }
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  

          }
          else if(isset($file))
          {
            $filename = $file->getClientOriginalName();
            $counttf = tinnhanh::where('filename',$filename)->count();
            if($counttf ==0)
            {
              
              $linkfile ='/tinnhanh'.$update->filename;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkfile);
              unlink($path.$linkfile.'.html');
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'tinnhanh';
                  $chuyendoi->chuyendoi($link,$file);
    
                  $file->move('tinnhanh',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }
              }
              else
              {
                $update ->filename = $filename;

                $chuyendoi = new chuyendoihtml();
                $link = 'tinnhanh';
                $chuyendoi->chuyendoi($link,$file);

                $file->move('tinnhanh',$filename);
                $update->save();
                return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update th??nh c??ng');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->save();
            return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update th??nh c??ng');
          }
        }
        catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;
      
      case "tinnhatruong";
        
        $update = tinnhatruong::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
        ],
        [
          'tieude' => 'Ti??u ?????',
        ]);
        try
        {
          $tieude = $request ->tieude;
          $file =$request -> file;
          $img = $request ->img;
          $confimtieude = $update ->tieude;
          $counttd = tinnhatruong::where('tieude',$tieude)->count();
          
          if(isset($file)&isset($img))
          {
            $filename = $file->getClientOriginalName();
            $imgname = $img->getClientOriginalName();

            $counttf = tinnhatruong::where('filename',$filename)->count();
            $countimg = tinnhatruong::where('imgname',$imgname)->count();
            if($counttf ==0)
            {
              if($countimg ==0)
              {
                
                $linkimg ='/tinnhatruong/img/'.$update->imgname;
                $linkfile ='/tinnhatruong/vanban/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkimg);
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'tinnhatruong/vanban';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('tinnhatruong/vanban',$filename);
                    $img->move('tinnhatruong/img',$imgname);

                    $update->save();
                    return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;
                  $update ->imgname = $imgname;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'tinnhatruong/vanban';
                  $chuyendoi->chuyendoi($link,$file);
                  
                  $file->move('tinnhatruong/vanban',$filename);
                  $img->move('tinnhatruong/img',$imgname);

                  $update->save();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
                }
              
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ???nh tr??ng');
            }

          }
          else if(isset($file))
          {
            $filename = $file->getClientOriginalName();
            $counttf = tinnhatruong::where('filename',$filename)->count();
            if($counttf ==0)
            {
              
              $linkfile ='/tinnhatruong/vanban/'.$update->filename;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkfile);
              unlink($path.$linkfile.'.html');
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'tinnhatruong/vanban';
                  $chuyendoi->chuyendoi($link,$file);
    
                  $file->move('tinnhatruong/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }
              }
              else
              {
                $update ->filename = $filename;

                $chuyendoi = new chuyendoihtml();
                $link = 'tinnhatruong/vanban';
                $chuyendoi->chuyendoi($link,$file);

                $file->move('tinnhatruong/vanban',$filename);
                $update->save();
                return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
            }  
          }
          else if(isset($img))
          {
            $imgname = $img->getClientOriginalName();
            $countimg = tinnhatruong::where('imgname',$imgname)->count();
            if($countimg ==0)
            {
            
              $linkimg ='/tinnhatruong/img/'.$update->imgname;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkimg);
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->imgname = $imgname;
    
                  $img->move('tinnhatruong/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }

              }
              else
              {
                $update ->imgname = $imgname;

                $img->move('tinnhatruong/img',$imgname);
                $update->save();
                return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
              }            
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','???nh n??y ???? t???n t???i');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->save();
            return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update th??nh c??ng');
          }
        }
        catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;

      case "vbcs";
        
         
        $update = vanbancapso::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
        ],
        [
          'tieude' => 'Ti??u ?????',
        ]);
        try
        {
          $tieude = $request ->tieude;
          $file =$request -> file;

          $now = getdate();
          $ngay = $now["mday"];
          $thang = $now["mon"];
          $nam = $now["year"];

          $confimtieude = $update ->tieude;
          $counttd = vanbancapso::where('tieude',$tieude)->count();
          
          if(isset($file)&isset($img))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbancapso::where('filename',$filename)->count();
            if($counttf ==0)
            {
                $linkfile ='/vanbancapso/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;
                    $update->ngay = $ngay;
                    $update->thang = $thang;
                    $update->nam = $nam;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'vanbancapso';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('vanbancapso',$filename);
                  

                    $update->save();
                    return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;

                  $update->ngay = $ngay;
                  $update->thang = $thang;
                  $update->nam = $nam;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbancapso';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('vanbancapso',$filename);
                  
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update th??nh c??ng');
                }
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  

          }
          else if(isset($file))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbancapso::where('filename',$filename)->count();
            if($counttf ==0)
            {
              
              $linkfile ='/vanbancapso/'.$update->filename;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkfile);
              unlink($path.$linkfile.'.html');
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;
                  $update->ngay = $ngay;
                  $update->thang = $thang;
                  $update->nam = $nam;
                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbancapso';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('vanbancapso',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }
              }
              else
              {
                $update ->filename = $filename;

                $chuyendoi = new chuyendoihtml();
                $link = 'vanbancapso';
                $chuyendoi->chuyendoi($link,$file);
                $update->ngay = $ngay;
                $update->thang = $thang;
                $update->nam = $nam;

                $file->move('vanbancapso',$filename);
                $update->save();
                return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update th??nh c??ng');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->ngay = $ngay;
            $update->thang = $thang;
            $update->nam = $nam;
            $update->save();
            return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update th??nh c??ng');
          }
        }
        catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break; 

      case "vbmoi";
        
        $update = vanbanmoi::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
        ],
        [
          'tieude' => 'Ti??u ?????',
        ]);
        try
        {
          $tieude = $request ->tieude;
          $file =$request -> file;
          $confimtieude = $update ->tieude;
          $counttd = vanbanmoi::where('tieude',$tieude)->count();
          
          if(isset($file)&isset($img))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbanmoi::where('filename',$filename)->count();
            if($counttf ==0)
            {
                $linkfile ='/vanbanmoi/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;

                    
                    $chuyendoi = new chuyendoihtml();
                    $link = 'vanbanmoi';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('vanbanmoi',$filename);
                  

                    $update->save();
                    return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbanmoi';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('vanbanmoi',$filename);
                  
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update th??nh c??ng');
                }
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  

          }
          else if(isset($file))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbanmoi::where('filename',$filename)->count();
            if($counttf ==0)
            {
              
              $linkfile ='/vanbanmoi/'.$update->filename;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkfile);
              unlink($path.$linkfile.'.html');
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbanmoi';
                  $chuyendoi->chuyendoi($link,$file);
    
                  $file->move('vanbanmoi',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }
              }
              else
              {
                $update ->filename = $filename;

                $chuyendoi = new chuyendoihtml();
                $link = 'vanbanmoi';
                $chuyendoi->chuyendoi($link,$file);

                $file->move('vanbanmoi',$filename);
                $update->save();
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update th??nh c??ng');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->save();
            return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update th??nh c??ng');
          }
        }
        catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;

      case "vbt";
        
        $update = vanbantruong::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c l???n h??n :max',   
        ],
        [
          'tieude' => 'Ti??u ?????',
        ]);
        try
        {
          $tieude = $request ->tieude;
          $file =$request -> file;

          $now = getdate();
          $ngay = $now["mday"];
          $thang = $now["mon"];
          $nam = $now["year"];

          $confimtieude = $update ->tieude;
          $counttd = vanbantruong::where('tieude',$tieude)->count();
          
          if(isset($file)&isset($img))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbantruong::where('filename',$filename)->count();
            if($counttf ==0)
            {
                $linkfile ='/vanbantruong/'.$update->filename;
                $path = str_replace('\\','/',public_path());
                unlink($path.$linkfile);
                unlink($path.$linkfile.'.html');
                if($tieude != $confimtieude)
                {
                  if($counttd ==0)
                  {
                    $update->tieude = $tieude;
                    $update ->filename = $filename;
                    $update ->imgname = $imgname;
                    $update->ngay = $ngay;
                    $update->thang = $thang;
                    $update->nam = $nam;

                    $chuyendoi = new chuyendoihtml();
                    $link = 'vanbantruong';
                    $chuyendoi->chuyendoi($link,$file);
                    
                    $file->move('vanbantruong',$filename);
                  

                    $update->save();
                    return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update th??nh c??ng');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                  }
                }
                else
                {
                  $update ->filename = $filename;

                  $update->ngay = $ngay;
                  $update->thang = $thang;
                  $update->nam = $nam;

                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbantruong';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('vanbantruong',$filename);
                  
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update th??nh c??ng');
                }
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
              }  

          }
          else if(isset($file))
          {
            $filename = $file->getClientOriginalName();
            $counttf = vanbantruong::where('filename',$filename)->count();
            if($counttf ==0)
            {
              
              $linkfile ='/vanbantruong/'.$update->filename;
              $path = str_replace('\\','/',public_path());
              unlink($path.$linkfile);
              unlink($path.$linkfile.'.html');
              if($tieude != $confimtieude)
              {
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;
                  $update->ngay = $ngay;
                  $update->thang = $thang;
                  $update->nam = $nam;
                  $chuyendoi = new chuyendoihtml();
                  $link = 'vanbantruong';
                  $chuyendoi->chuyendoi($link,$file);
    
                  $file->move('vanbantruong',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update th??nh c??ng');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n ti??u ????? n??y ???? t???n t???i');
                }
              }
              else
              {
                $update ->filename = $filename;

                $chuyendoi = new chuyendoihtml();
                $link = 'vanbantruong';
                $chuyendoi->chuyendoi($link,$file);
                $update->ngay = $ngay;
                $update->thang = $thang;
                $update->nam = $nam;

                $file->move('vanbantruong',$filename);
                $update->save();
                return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update th??nh c??ng');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','T??n file ????? n??y ???? t???n t???i');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->ngay = $ngay;
            $update->thang = $thang;
            $update->nam = $nam;
            $update->save();
            return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update th??nh c??ng');
          }
        }
        catch(\Exception $exception)
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
          }
      break;

      case "video";
        
        $update = video::find($id);
        $this->validate($request,
        [
          'file'=> 'required|max:999000',
        ],
        [
          'required' => ':attribute Kh??ng ???????c ????? tr???ng',
          'max' => ':attribute Kh??ng ???????c v?????t qu?? 900M 1 video',
        ],
        [
          'file' => 'Video t???i l??n',
        ]);
        try
        {
          $file =$request -> file;
          $filename = $file->getClientOriginalName();

          $linkfile ='/video/'.$update->link;
          $path = str_replace('\\','/',public_path());
          unlink($path.$linkfile);

          $update ->link = $filename;
          $file->move('video',$filename);
          $update->save();
          return redirect('admin/video')->with('thongbao','Update th??nh c??ng');
        }
        catch(\Exception $exception)
        {
          return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','L???i d??? li???u t???i l??n');
        }
             
      break;
    } 
  }

  public function getchudeanh()
  {
    $data = chudeanh::all();
    return view('admin.quanly.chudeanh',['data'=>$data]);
  }

  public function addchudeanh()
  {
    return view('admin.add.chudeanh');
  }

  public function Paddchudeanh(Request $request)
  {
    $this->validate($request,
        [
            'chudeanh' => 'required|max:500',
        ],
        [
            'required' => ':attribute Kh??ng ???????c ????? tr???ng',
            'max' => ':attribute Kh??ng ???????c l???n h??n :max',
        ],
        [
           'chudeanh' => 'Ch??? ????? ???nh',  
        ]);
    $chudeanh = $request->chudeanh;
    $count = chudeanh::where('tenchude',$chudeanh)->count();
    if($count==0)
    {
      $add = new chudeanh();
      $add->tenchude = $chudeanh;
      $add->save();
      return redirect('admin/chudeanh')->with('thongbao','Th??m ch??? ????? m???i th??nh c??ng');
    }
    else
    {
      return redirect('admin/addchudeanh')->with('thongbaoloi','???? c?? t??n ch??? ????? n??y');
    }

  }


  //--------------------------------------???nh------------------------
  public function getanh($id)
  {
    $data = chudeanh::find($id)->getIMG;
    return view('admin.quanly.qlanh',['data'=>$data,'key'=>$id]);
  }
  public function getthemanh($key)
  {
    return view('admin.add.themanh',['key'=>$key]);
  }
  public function pthemanh(Request $request)
  {
    $this->validate($request,
    [
        'img' => 'required|image',
    ],
    [
        'required' => ':attribute Kh??ng ???????c ????? tr???ng',
        'image' => ':attribute Kh??ng ????ng ?????nh d???nh ???nh',
    ],
    [
       'img' => '???????ng d???n',  
    ]);

    $idchude = $request->idchude;
    $tenanh = $request->tenanh;
    $img = $request ->img;
    $imgname = $img->getClientOriginalName();

    $counttenanh = anh::where('tenanh',$tenanh)->count();
    $counttenimg = anh::where('filename',$img)->count();
    if($counttenanh == 0)
    {
      if($counttenimg == 0)
      {
        $anh = new anh();
        $anh->idchude = $idchude;
        $anh->tenanh = $tenanh;
        $anh->filename = $imgname;
        $anh->nguoidang = 'admin';
        $img->move('anhnhatruong',$imgname);

        $chudeanh = chudeanh::find($idchude);
        $chudeanh->anhdaidien = $imgname;




        $chudeanh->save();
        $anh->save();
        return redirect('admin/anh/'.$idchude)->with('thongbao','Th??m th??nh c??ng');
      }
      else
      {
        return redirect('admin/themanh/'.$idchude)->with('thongbaoloi','T??n file ???nh n??y ???? c??');
      }
    }
    else
    {
      return redirect('admin/themanh/'.$idchude)->with('thongbaoloi','T??n ???nh n??y ???? c??');
    }


  }

  //-----x??a
  public function xoaanh ($id,$idchude)
  {
    $anh = anh::find($id);
  
    $file ='/anhnhatruong/'.$anh->filename;
    $path = str_replace('\\','/',public_path());
  
    unlink($path.$file);

    $anh ->delete();


    return redirect('admin/anh/'.$idchude)->with('thongbao','X??a th??nh c??ng');
  }


//---------------------?????i m???t kh???u ----------------------------
  public function gdoimatkhau()
  {
    return view('admin.doimatkhau');
  }

  public function pdoimatkhau(Request $request)
  {
    $this->validate($request,
    [
        'passnew' => 'required|min:8|max:20',
        'passnew1' => 'required|min:8|max:20',
    ],
    [
        'required' => ':attribute Kh??ng ???????c ????? tr???ng',
        'min' => ':attribute vui l??ng nh???p l???n h??n 8 k?? t???',
        'max' => ':attribute vui l??ng nh???p nh??? h??n h??n 20 k?? t???',
    ],
    [
       'passold' => 'M???t kh???u c??',  
       'passold' => 'M???t kh???u m???i',  
       'passold' => 'Confirm m???t kh???u',  
    ]);
    
    $passnew = $request->passnew;
    $passconfirm = $request->passnew1;
    $user = Auth::user();
    $id = $user->id;
    
    if($passnew === $passconfirm)
    {
      $pass =  bcrypt($passconfirm);
      $update = user::find($id);
      $update->password = $pass;
      $update ->save();
      return redirect('admin/doimatkhau')->with('thongbao','?????i m???t kh???u th??nh c??ng');
    }
    else
    {
      return redirect('admin/doimatkhau')->with('thongbaoloi','M???t kh???u kh??ng kh???p nhau');
    }
  }

//------------------reset m???t kh???u------------------------
  public function resetmatkhau($id)
  {
   
   $passnew = '0'.$id.'@123';
   $pass =  bcrypt($passnew);
   $update = user::find($id);
   $update->password = $pass;
   $update ->save();
    return redirect('admin/thongtingv/'.$id)->with('thongbao','reset th??nh c??ng');
  }  
}
