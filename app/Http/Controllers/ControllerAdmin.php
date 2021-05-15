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
        'username' => 'bail|required|min:3|max:100',
        'myname' => 'bail|required|min:3|max:20',
        'email' => 'bail|required|min:3|max:100',
        'diachi'=> 'bail|required|min:3|max:100',
        'sdt'=> 'bail|required|min:10|max:10',
        'date'=> 'bail|required',
        'file'=> 'bail|required',
        'sex'=> 'bail|required',
        'file'=>'required|image',
    ],
    [
        'username.required' =>'Bạn chưa nhập tên',
        'username.min' => 'username phải có độ dài lớn hơn 3',
        'username.max' => 'username phải có độ nhỏ hơn 100',
        'myname.required' =>'Bạn chưa nhập tên đăng nhập',
        'myname.min' => 'username phải có độ dài lớn hơn 3',
        'myname.max' => 'username phải có độ nhỏ hơn 20',
        'email.required' =>'Bạn chưa nhập email',
        'email.min' => 'email phải có độ dài lớn hơn 3',
        'email.max' => 'email phải có độ nhỏ hơn 100',
        'diachi.required' =>'Bạn chưa nhập địa chỉ',
        'diachi.min' => 'Địa chỉ phải có độ dài lớn hơn 3',
        'diachi.max' => 'Địa chỉ phải có độ nhỏ hơn 100',
        'sdt.required' =>'Bạn chưa nhập số điện thoại',
        'sdt.min' => 'Số điện thoại phải có độ dài là 10',
        'sdt.max' => 'Số điện thoại phải có độ dài là 10',
        'date.required' =>'Bạn chưa nhập ngày tháng năm sinh',
        'file.required' =>'Bạn chưa tải ảnh',
        'sex.required' =>'Bạn chưa chọn giới tính',
        'file.required' =>'Chưa chọn ảnh',
        'file.image' =>'Chọn không đúng định dạng ảnh'
    ]);

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

    
    $countsdt =  User::where('id',$sdt)->count();
    $count = User::where('name',$username)->count();
    $count1 = User::where('email',$email)->count();
    $count2 = giaovien::where('anh',$namefile)->count();

    if($countsdt ==0)
    {
      if($count == 0)
      {
        if($count1 ==0)
        {
            if($count2 ==0)
            {
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
                'title' => 'Tài khoản mật khẩu',
                'taikhoan' => 'Bùi Ngọc Khánh',
                'matkhau' => $pass,
              ];
            
              Mail::to($email)->send(new SendMail($details));

              return redirect('admin/QuanLyTKGV')->with('thongbao','Tạo tài khoản thành công');
            }
            else
            {
              return redirect('admin/tao-tai-khoan-giao-vien')->with('thongbaoloi','Tên ảnh trùng');
            }
        }
        else
        {
          return redirect('admin/tao-tai-khoan-giao-vien')->with('thongbaoloi','Email này hiện tại đã có người sử dụng');
        
        }
      
      }
      else
      {
        return redirect('admin/tao-tai-khoan-giao-vien')->with('thongbaoloi','Tài khoản này đã có người dùng');
      }
    }
    else
    {
      return redirect('admin/tao-tai-khoan-giao-vien')->with('thongbaoloi','Số điện thoại trùng');
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
        'username.required' =>'Bạn chưa nhập tên',
        'username.min' => 'username phải có độ dài lớn hơn 3',
        'username.max' => 'username phải có độ nhỏ hơn 100',
        'myname.required' =>'Bạn chưa nhập tên đăng nhập',
        'myname.min' => 'username phải có độ dài lớn hơn 3',
        'myname.max' => 'username phải có độ nhỏ hơn 20',
        'email.required' =>'Bạn chưa nhập email',
        'email.min' => 'email phải có độ dài lớn hơn 3',
        'email.max' => 'email phải có độ nhỏ hơn 100',
        'diachi.required' =>'Bạn chưa nhập địa chỉ',
        'diachi.min' => 'Địa chỉ phải có độ dài lớn hơn 3',
        'diachi.max' => 'Địa chỉ phải có độ nhỏ hơn 100',
        'sdt.required' =>'Bạn chưa nhập số điện thoại',
        'sdt.min' => 'Số điện thoại phải có độ dài là 10',
        'sdt.max' => 'Số điện thoại phải có độ dài là 10',
        'date.required' =>'Bạn chưa nhập ngày tháng năm sinh',
        'file.required' =>'Bạn chưa tải ảnh',
        'sex.required' =>'Bạn chưa chọn giới tính',
        'khoahoc.required' =>'Bạn chưa chọn khóa học'
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
              return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbao','Tạo tài khoản thành công');
            }
            else
            {
              return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','Tên ảnh trùng');
            }
        }
        else
        {
          return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','Email này hiện tại đã có người sử dụng');
        
        }
      
      }
      else
      {
        return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','Tài khoản này đã có người dùng');
      }
    }
    else
    {
      return redirect('admin/tao-tai-khoan-hoc-sinh')->with('thongbaoloi','Số điện thoại trùng');
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
        'required' => ':attribute Không được để trống',
        'min' => ':attribute Không được nhỏ hơn :min',
        'max' => ':attribute Không được lớn hơn :max',
        'integer' => ':attribute Chỉ được nhập số',
    ],
    [
        'nambatdau' => 'Năm bắt đầu khóa học',
        'namketthuc' => 'Năm kết thúc'
        
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
      return redirect('admin/tao-khoa-hoc')->with('thongbao','Tạo khóa học thành công');

    }
    else
    {
      return redirect('admin/tao-khoa-hoc')->with('thongbaoloi','Khóa học này đã tồn tài');
    }
}
public function PaddVBM (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE'   
    ]);

    $tieude = $request ->tieude;
    $file =$request -> file;
    

    $filename = $file->getClientOriginalName();

    $vbm = new vanbanmoi();
    
    $counttd = vanbanmoi::where('tieude',$tieude)->count();
    $counttf = vanbanmoi::where('filename',$filename)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        $vbm->tieude = $tieude;
        $vbm ->filename = $filename;
        $chuyendoi = new chuyendoihtml();
        $link = 'vanbanmoi';
        $chuyendoi->chuyendoi($link,$file);
        $file->move('vanbanmoi',$filename);
      
        $vbm->save();
        return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Tải lên thành công');
      }
      else
      {
        return redirect('admin/tao-van-ban-moi')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-van-ban-moi')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function PaddTMN (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        'img' => 'required'
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
    ]);

    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request -> img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $tmn = new tinmoinhat();
    
    
    $counttd = tinmoinhat::where('tieude',$tieude)->count();
    $counttf = tinmoinhat::where('filename',$filename)->count();
    $countimg = tinmoinhat::where('imgname',$imgname)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        if($countimg ==0)
        {
        $tmn->tieude = $tieude;
        $tmn ->filename = $filename;
        $tmn ->imgname = $imgname;
        $chuyendoi = new chuyendoihtml();
        $link = 'tinmoinhat/vanban';
        $chuyendoi->chuyendoi($link,$file);
        $file->move('tinmoinhat/vanban',$filename);
        $img->move('tinmoinhat/img',$imgname);
        

        $tmn->save();
        return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Tải lên thành công');
        }
        else
        {
          return redirect('admin/tao-tin-moi-nhat')->with('thongbaoloi','Tên ảnh này đã tồn tại');
        }
      }
      else
      {
        return redirect('admin/tao-tin-moi-nhat')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-moi-nhat')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function PaddVBT (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
      
    ]);
    $now = getdate();
    $ngay = $now["mday"];
    $thang = $now["mon"];
    $nam = $now["year"];
    $tieude = $request ->tieude;
    $file =$request -> file;
    
    $filename = $file->getClientOriginalName();

    $vbt = new vanbantruong();
    
    
    $counttd = vanbantruong::where('tieude',$tieude)->count();
    $counttf = vanbantruong::where('filename',$filename)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
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
        return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Tải lên thành công');
      }
      else
      {
        return redirect('admin/tao-van-ban-truong')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-van-ban-truong')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function PaddVBCS (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
    ]);
    
    $now = getdate();
    $ngay = $now["mday"];
    $thang = $now["mon"];
    $nam = $now["year"];
    $tieude = $request ->tieude;
    $file =$request -> file;
    
    $filename = $file->getClientOriginalName();

    $vbcs = new vanbancapso();
    
    
    $counttd = vanbancapso::where('tieude',$tieude)->count();
    $counttf = vanbancapso::where('filename',$filename)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
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
        return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Tải lên thành công');
      }
      else
      {
        return redirect('admin/tao-van-ban-cap-so')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-van-ban-cap-so')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function PaddTNT (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        'img' =>'required'
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
      
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',

      
    ]);
    
    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request ->img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $tnt = new tinnhatruong();
    
    
    $counttd = tinnhatruong::where('tieude',$tieude)->count();
    $counttf = tinnhatruong::where('filename',$filename)->count();
    $countimg = tinnhatruong::where('imgname',$imgname)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        if($countimg ==0)
        {
      
        $tnt->tieude = $tieude;
        $tnt ->filename = $filename;
        $tnt ->imgname = $imgname;
        $chuyendoi = new chuyendoihtml();
        $link = 'tinnhatruong/vanban';
        $chuyendoi->chuyendoi($link,$file);
        $file->move('tinnhatruong/vanban',$filename);
        $img->move('tinnhatruong/img',$imgname);

        $tnt->save();
        return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Tải lên thành công');
        }
        else
        {
          return redirect('admin/tao-tin-nha-truong')->with('thongbaoloi','Tên ảnh trùng');
        }
      }
      else
      {
        return redirect('admin/tao-tin-nha-truong')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-nha-truong')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function Paddcongdoan (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        'img' =>'required'
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
      'img' =>'Ảnh',
      
    ]);
    
    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request ->img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $cd = new congdoan();
    
    
    $counttd = congdoan::where('tieude',$tieude)->count();
    $counttf = congdoan::where('filename',$filename)->count();
    $countimg = congdoan::where('imgname',$imgname)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        if($countimg ==0)
        {
      
        $cd->tieude = $tieude;
        $cd ->filename = $filename;
        $cd ->imgname = $imgname;

        $chuyendoi = new chuyendoihtml();
        $link = 'congdoan/vanban';
        $chuyendoi->chuyendoi($link,$file);

        $file->move('congdoan/vanban',$filename);
        $img->move('congdoan/img',$imgname);

        $cd->save();
        return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Tải lên thành công');
        }
        else
        {
          return redirect('admin/tao-tin-cong-doan')->with('thongbaoloi','Tên ảnh trùng');
        }
      }
      else
      {
        return redirect('admin/tao-tin-cong-doan')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-cong-doan')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function Paddtindoanthe (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        'img' =>'required'
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
      
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
      'img' =>'Ảnh',
      
    ]);
    
    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request ->img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $tindt = new tindoanthe();
    
    
    $counttd = tindoanthe::where('tieude',$tieude)->count();
    $counttf = tindoanthe::where('filename',$filename)->count();
    $countimg = tindoanthe::where('imgname',$imgname)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        if($countimg ==0)
        {
      
        $tindt->tieude = $tieude;
        $tindt ->filename = $filename;
        $tindt ->imgname = $imgname;

        $chuyendoi = new chuyendoihtml();
        $link = 'tindoanthe/vanban';
        $chuyendoi->chuyendoi($link,$file);

        $file->move('tindoanthe/vanban',$filename);
        $img->move('tindoanthe/img',$imgname);

        $tindt->save();
        return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Tải lên thành công');
        }
        else
        {
          return redirect('admin/tao-tin-doan-the')->with('thongbaoloi','Tên ảnh trùng');
        }
      }
      else
      {
        return redirect('admin/tao-tin-doan-the')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-doan-the')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function Paddhdngoaigiolenlop (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        'img' =>'required'
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE',
      'img' =>'Ảnh',
      
    ]);
    
    $tieude = $request ->tieude;
    $file =$request -> file;
    $img = $request ->img;
    
    $filename = $file->getClientOriginalName();
    $imgname = $img->getClientOriginalName();

    $hdngll = new hdngoaigiolenlop();
    
    
    $counttd = hdngoaigiolenlop::where('tieude',$tieude)->count();
    $counttf = hdngoaigiolenlop::where('filename',$filename)->count();
    $countimg = hdngoaigiolenlop::where('imgname',$imgname)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        if($countimg ==0)
        {
      
        $hdngll->tieude = $tieude;
        $hdngll ->filename = $filename;
        $hdngll ->imgname = $imgname;
        
        $chuyendoi = new chuyendoihtml();
        $link = 'hdngoaigiolenlop/vanban';
        $chuyendoi->chuyendoi($link,$file);

        $file->move('hdngoaigiolenlop/vanban',$filename);
        $img->move('hdngoaigiolenlop/img',$imgname);

        $hdngll->save();
        return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Tải lên thành công');
        }
        else
        {
          return redirect('admin/tao-tin-hdngoaigiolenlop')->with('thongbaoloi','Tên ảnh trùng');
        }
      }
      else
      {
        return redirect('admin/tao-tin-hdngoaigiolenlop')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-hdngoaigiolenlop')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
    }
}
public function PaddTN (Request $request)
{
  $this->validate($request,
    [
        'tieude'=> 'required|max:500',
        'file' => 'required',
        
    ],
    [
      'required' => ':attribute Không được để trống',
      'max' => ':attribute Không được lớn hơn :max',
      
    ],
    [
      'tieude' => 'Tiêu Đề',
      'file' => 'Dữ liệu FILE'   
    ]);

    $tieude = $request ->tieude;
    $file =$request -> file;
    
    $filename = $file->getClientOriginalName();

    $tn = new tinnhanh();
    
    
    $counttd = tinnhanh::where('tieude',$tieude)->count();
    $counttf = tinnhanh::where('filename',$filename)->count();
    
    if($counttd ==0)
    {
      if($counttf ==0)
      {
        $tn->tieude = $tieude;
        $tn ->filename = $filename;

        $chuyendoi = new chuyendoihtml();
        $link = 'tinnhanh';
        $chuyendoi->chuyendoi($link,$file);

        $file->move('tinnhanh',$filename);
        $tn->save();
        return redirect('admin/quan-ly-tin-tuyen-sinh')->with('thongbao','Tải lên thành công');
      }
      else
      {
        return redirect('admin/tao-tin-tuyen-sinh')->with('thongbaoloi','Tên file này đã tồn tại');
      }       
      
    }
    else
    {
      return redirect('admin/tao-tin-tuyen-sinh')->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/QuanLyTKGV')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Xóa thành công');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Xóa thành công');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Xóa thành công');
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
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Xóa thành công');
                  }
                  else
                  {
                    unlink($path.$img);
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Xóa thành công');
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
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Xóa thành công');
                  }
                  else
                  {
                    $delete ->delete();
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Xóa thành công');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Xóa thành công');
                }
                else
                {
                  
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Xóa thành công');
                }
                else
                {
                  unlink($path.$img);
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Xóa thành công');
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
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Xóa thành công');
              }
              else
              {
                $delete ->delete();
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Xóa thành công');
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
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Xóa thành công');
                }
                else
                {
                  $delete ->delete();
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Xóa thành công');
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
              'tieude'=> 'required|max:500',
          ],
          [
            'required' => ':attribute Không được để trống',
            'max' => ':attribute Không được lớn hơn :max',   
          ],
          [
            'tieude' => 'Tiêu Đề',
          ]);
          $tieude = $request ->tieude;
          $file =$request -> file;
          $img = $request ->img;
          $confimtieude = $update ->tieude;
          $counttd = congdoan::where('tieude',$tieude)->count();
          
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
                  if($counttd ==0)
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
                    return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                  }
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
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
                }
              
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
              }  
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên ảnh trùng');
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
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->filename = $filename;
                  
                  $chuyendoi = new chuyendoihtml();
                  $link = 'congdoan/vanban';
                  $chuyendoi->chuyendoi($link,$file);

                  $file->move('congdoan/vanban',$filename);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                }
              }
              else
              {
                $update ->filename = $filename;
                
                $chuyendoi = new chuyendoihtml();
                $link = 'congdoan/vanban';
                $chuyendoi->chuyendoi($link,$file);

                $file->move('congdoan/vanban',$filename);
                $update->save();
                return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                if($counttd ==0)
                {
                  $update->tieude = $tieude;
                  $update ->imgname = $imgname;
    
                  $img->move('congdoan/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                }

              }
              else
              {
                $update ->imgname = $imgname;
  
                $img->move('congdoan/img',$imgname);
                $update->save();
                return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
              }            
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Ảnh này đã tồn tại');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->save();
            return redirect('admin/quan-ly-tin-cong-doan')->with('thongbao','Update thành công');
          }

      break;

      case "hdngoaigio";
        $update = hdngoaigiolenlop::find($id);
        $this->validate($request,
          [
              'tieude'=> 'required|max:500',
          ],
          [
            'required' => ':attribute Không được để trống',
            'max' => ':attribute Không được lớn hơn :max',   
          ],
          [
            'tieude' => 'Tiêu Đề',
          ]);
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
                    return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
                }
              
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên ảnh đã tồn tại');
              }  
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đã tồn tại');
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
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
              }
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                  return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                }

              }
              else
              {
                $update ->imgname = $imgname;
  
                $img->move('hdngoaigiolenlop/img',$imgname);
                $update->save();
                return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
              }            
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Ảnh này đã tồn tại');
            }  
          }
          else
          {
            $update->tieude = $tieude;
            $update->save();
            return redirect('admin/quan-ly-tin-hdngoaigiolenlop')->with('thongbao','Update thành công');
          }
      break;

      case "tindoanthe";
      
          $update = tindoanthe::find($id);
          $this->validate($request,
            [
              'tieude'=> 'required|max:500',
            ],
            [
              'required' => ':attribute Không được để trống',
              'max' => ':attribute Không được lớn hơn :max',   
            ],
            [
              'tieude' => 'Tiêu Đề',
            ]);
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
                      return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                  }
                
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
                }  
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên ảnh trùng');
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
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                  return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                }
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                    return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                  }

                }
                else
                {
                  $update ->imgname = $imgname;
    
                  $img->move('tindoanthe/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
                }            
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Ảnh này đã tồn tại');
              }  
            }
            else
            {
              $update->tieude = $tieude;
              $update->save();
              return redirect('admin/quan-ly-tin-doan-the')->with('thongbao','Update thành công');
            }
      break;

      case "tinmoinhat";
        
        $update = tinmoinhat::find($id);
        $this->validate($request,
            [
              'tieude'=> 'required|max:500',
            ],
            [
              'required' => ':attribute Không được để trống',
              'max' => ':attribute Không được lớn hơn :max',   
            ],
            [
              'tieude' => 'Tiêu Đề',
            ]);
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
                      return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                    }
                    else
                    {
                      return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                  }
                
                  
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
                }  
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên ảnh trùng');
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
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                }
                
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                    return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                  }
                  else
                  {
                    return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
                  }

                }
                else
                {
                  $update ->imgname = $imgname;
    
                  $img->move('tinmoinhat/img',$imgname);
                  $update->save();
                  return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
                }            
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Ảnh này đã tồn tại');
              }  
            }
            else
            {
              $update->tieude = $tieude;
              $update->save();
              return redirect('admin/quan-ly-tin-moi-nhat')->with('thongbao','Update thành công');
            }
      break;

      case "tinnhanh";
       
        $update = tinnhanh::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được lớn hơn :max',   
        ],
        [
          'tieude' => 'Tiêu Đề',
        ]);
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
                  return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update thành công');
              }
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update thành công');
            }
            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
          }  
        }
        else
        {
          $update->tieude = $tieude;
          $update->save();
          return redirect('admin/quan-ly-tin-nhanh')->with('thongbao','Update thành công');
        }
      break;
      
      case "tinnhatruong";
        
        $update = tinnhatruong::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được lớn hơn :max',   
        ],
        [
          'tieude' => 'Tiêu Đề',
        ]);
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
                  return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
              }
            
              
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
            }  
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên ảnh trùng');
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
                return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
            }
            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
              }

            }
            else
            {
              $update ->imgname = $imgname;

              $img->move('tinnhatruong/img',$imgname);
              $update->save();
              return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
            }            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Ảnh này đã tồn tại');
          }  
        }
        else
        {
          $update->tieude = $tieude;
          $update->save();
          return redirect('admin/quan-ly-tin-nha-truong')->with('thongbao','Update thành công');
        }
      break;

      case "vbcs";
        
         
        $update = vanbancapso::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được lớn hơn :max',   
        ],
        [
          'tieude' => 'Tiêu Đề',
        ]);
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
                  return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update thành công');
              }
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update thành công');
            }
            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
          }  
        }
        else
        {
          $update->tieude = $tieude;
          $update->ngay = $ngay;
          $update->thang = $thang;
          $update->nam = $nam;
          $update->save();
          return redirect('admin/quan-ly-van-ban-cap-so')->with('thongbao','Update thành công');
        }
      break; 
      case "vbmoi";
        
        $update = vanbanmoi::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được lớn hơn :max',   
        ],
        [
          'tieude' => 'Tiêu Đề',
        ]);
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
                  return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update thành công');
              }
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update thành công');
            }
            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
          }  
        }
        else
        {
          $update->tieude = $tieude;
          $update->save();
          return redirect('admin/quan-ly-van-ban-moi')->with('thongbao','Update thành công');
        }
      break;
      case "vbt";
        
        $update = vanbantruong::find($id);
        $this->validate($request,
        [
          'tieude'=> 'required|max:500',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được lớn hơn :max',   
        ],
        [
          'tieude' => 'Tiêu Đề',
        ]);
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
                  return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update thành công');
                }
                else
                {
                  return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update thành công');
              }
            }
            else
            {
              return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
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
                return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update thành công');
              }
              else
              {
                return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên tiêu đề này đã tồn tại');
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
              return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update thành công');
            }
            
          }
          else
          {
            return redirect('admin/noidungsua/'.$id.'/key/'.$key)->with('thongbaoloi','Tên file đề này đã tồn tại');
          }  
        }
        else
        {
          $update->tieude = $tieude;
          $update->ngay = $ngay;
          $update->thang = $thang;
          $update->nam = $nam;
          $update->save();
          return redirect('admin/quan-ly-van-ban-truong')->with('thongbao','Update thành công');
        }
      break;

      case "video";
        
        $update = video::find($id);
        $this->validate($request,
        [
          'file'=> 'required|max:999000',
        ],
        [
          'required' => ':attribute Không được để trống',
          'max' => ':attribute Không được vượt quá 900M 1 video',
        ],
        [
          'file' => 'Đường dẫn video',
        ]);
        $file =$request -> file;
        $filename = $file->getClientOriginalName();

        $linkfile ='/video/'.$update->link;
        $path = str_replace('\\','/',public_path());
        unlink($path.$linkfile);

        $update ->link = $filename;
        $file->move('video',$filename);
        $update->save();
        return redirect('admin/video')->with('thongbao','Update thành công');
             
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
            'required' => ':attribute Không được để trống',
            'max' => ':attribute Không được lớn hơn :max',
        ],
        [
           'chudeanh' => 'Chủ đề ảnh',  
        ]);
    $chudeanh = $request->chudeanh;
    $count = chudeanh::where('tenchude',$chudeanh)->count();
    if($count==0)
    {
      $add = new chudeanh();
      $add->tenchude = $chudeanh;
      $add->save();
      return redirect('admin/chudeanh')->with('thongbao','Thêm chủ đề mới thành công');
    }
    else
    {
      return redirect('admin/addchudeanh')->with('thongbaoloi','Đã có tên chủ đề này');
    }

  }


  //--------------------------------------Ảnh------------------------
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
        'required' => ':attribute Không được để trống',
        'image' => ':attribute Không đúng định dạnh ảnh',
    ],
    [
       'img' => 'Đường dẫn',  
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
        return redirect('admin/anh/'.$idchude)->with('thongbao','Thêm thành công');
      }
      else
      {
        return redirect('admin/themanh/'.$idchude)->with('thongbaoloi','Tên file ảnh này đã có');
      }
    }
    else
    {
      return redirect('admin/themanh/'.$idchude)->with('thongbaoloi','Tên ảnh này đã có');
    }


  }

  //-----xóa
  public function xoaanh ($id,$idchude)
  {
    $anh = anh::find($id);
  
    $file ='/anhnhatruong/'.$anh->filename;
    $path = str_replace('\\','/',public_path());
  
    unlink($path.$file);

    $anh ->delete();


    return redirect('admin/anh/'.$idchude)->with('thongbao','Xóa thành công');
  }


//---------------------đổi mật khẩu ----------------------------
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
        'required' => ':attribute Không được để trống',
        'min' => ':attribute vui lòng nhập lớn hơn 8 ký tự',
        'max' => ':attribute vui lòng nhập nhỏ hơn hơn 20 ký tự',
    ],
    [
       'passold' => 'Mật khẩu cũ',  
       'passold' => 'Mật khẩu mới',  
       'passold' => 'Confirm mật khẩu',  
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
      return redirect('admin/doimatkhau')->with('thongbao','Đổi mật khẩu thành công');
    }
    else
    {
      return redirect('admin/doimatkhau')->with('thongbaoloi','Mật khẩu không khớp nhau');
    }
  }

//------------------reset mật khẩu------------------------
  public function resetmatkhau($id)
  {
   
   $passnew = '0'.$id.'@123';
   $pass =  bcrypt($passnew);
   $update = user::find($id);
   $update->password = $pass;
   $update ->save();
    return redirect('admin/thongtingv/'.$id)->with('thongbao','reset thành công');
  }  
}
