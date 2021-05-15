<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\anh;
use App\user;
use App\chudeanh;
use App\giaovien;

use Illuminate\Support\Facades\Auth;

class ControllerGiaoVien extends Controller
{
    public function getanh($id)
    {
      $data = chudeanh::find($id)->getIMG;
      return view('giaovien.quanly.qlanh',['data'=>$data,'key'=>$id]);
    }
    public function getthemanh($key)
    {
      return view('giaovien.add.themanh',['key'=>$key]);
    }
    public function pthemanh(Request $request)
  {
    $this->validate($request,
    [
        'tenanh' =>'required|max:200',
        'img' => 'required|image',
    ],
    [
        'required' => ':attribute Không được để trống',
        'image' => ':attribute Không đúng định dạnh ảnh',
        'max' => ':attribute Không được vượt quá 200 ký tự',
    ],
    [
       'tenanh' => 'Tên ảnh',
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

        $thongtin = Auth::user();
        $name = $thongtin->name;
        

        $anh->nguoidang = $name ;
      
        $chudeanh = chudeanh::find($idchude);
        $chudeanh->anhdaidien = $imgname;
        
        $img->move('anhnhatruong',$imgname);

        $chudeanh->save();
        $anh->save();
        return redirect('giaovien/anh/'.$idchude)->with('thongbao','Thêm thành công');
      }
      else
      {
        return redirect('giaovien/themanh/'.$idchude)->with('thongbaoloi','Tên file ảnh này đã có');
      }
    }
    else
    {
      return redirect('giaovien/themanh/'.$idchude)->with('thongbaoloi','Tên ảnh này đã có');
    }
  }
  public function pxoaanh (Request $request)
  {
    $id =  $request ->id;
    $tkdang = $request ->tkdang;
    $idchude = $request ->idchude;

    $anh = anh::find($id);
    $nguoidang = $anh->nguoidang;

    if($nguoidang == $tkdang)
    {
      $file ='/anhnhatruong/'.$anh->filename;
      $path = str_replace('\\','/',public_path());
    
      unlink($path.$file);
      $anh ->delete();
  
      return redirect('giaovien/anh/'.$idchude)->with('thongbao','Xóa thành công');
    }
    else
    {
      return redirect('giaovien/anh/'.$idchude)->with('thongbaoloi','Bạn không có quyền xóa ảnh này');
    }

   
  }

  //---------------------đổi mật khẩu ----------------------------
  public function gvdoimatkhau()
  {
    return view('giaovien.doimatkhau');
  }

  public function gvpdoimatkhau(Request $request)
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
      return redirect('giaovien/gvdoimatkhau')->with('thongbao','Đổi mật khẩu thành công');
    }
    else
    {
      return redirect('giaovien/gvdoimatkhau')->with('thongbaoloi','Mật khẩu không khớp nhau');
    }
  }
}
