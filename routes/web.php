<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','ControllerUser@trangchu');



Route::get('admin/login','ControllerUser@getlogin')->name('getlogin');
Route::post('admin','ControllerUser@login')->name('login');

Route::get('vanban/{k}/{tieude}/{vanban}','ControllerUser@getvanban');

Route::get('vanban/{k}','ControllerUser@getvanban1');

Route::get('anh/{k}','ControllerUser@getanh');

Route::prefix('giaovien')->group(function () {
    Route::get('Homegv','ControllerAdmin@indexgv')->name('idadmingv');

     //-----------------------------------------thêm ảnh---------------------------------
     Route::get('anh/{id}','ControllerGiaoVien@getanh')->name('getanh');
     Route::get('themanh/{key}','ControllerGiaoVien@getthemanh');
     Route::post('themanh','ControllerGiaoVien@pthemanh')->name('pthemanh1');
     
     //------------------------------------------xóa ảnh----------------------------------
     Route::post('xoaanh','ControllerGiaoVien@pxoaanh')->name('pxoaanh');

     //----------------------------------------đổi mật khẩu----------------------------
     Route::get('gvdoimatkhau','ControllerGiaoVien@gvdoimatkhau')->name('gvdoimatkhau');
     Route::post('gvdoimatkhau','ControllerGiaoVien@gvpdoimatkhau')->name('gvpdoimatkhau');
});

Route::prefix('admin')->group(function () {
    Route::get('Home','ControllerAdmin@index')->name('idadmin');
    //-------------------------------------Add------------------------------------//
    Route::get('tao-tai-khoan-giao-vien','ControllerAdmin@addAccoutGV')->name('addAccoutGV');
    Route::post('tao-tai-khoan-giao-vien','ControllerAdmin@PaddAccoutGV')->name('PaddAccoutGV');

    Route::get('tao-tai-khoan-hoc-sinh','ControllerAdmin@addAccoutHS')->name('addAccoutHS');
    Route::post('tao-tai-khoan-hoc-sinh','ControllerAdmin@PaddAccoutHS')->name('PaddAccoutHS');

    Route::get('tao-khoa-hoc','ControllerAdmin@addkhoahoc')->name('addKhoahoc');
    Route::post('tao-khoa-hoc','ControllerAdmin@PaddKhoahoc')->name('PaddKhoahoc');

    Route::get('tao-tin-tuyen-sinh','ControllerAdmin@addTN')->name('addTN');
    Route::post('tao-tin-tuyen-sinh','ControllerAdmin@PaddTN')->name('PaddTN');

    Route::get('tao-van-ban-moi','ControllerAdmin@addVBM')->name('addVMB');
    Route::post('tao-van-ban-moi','ControllerAdmin@PaddVBM')->name('PaddVBM');

    Route::get('tao-tin-moi-nhat','ControllerAdmin@addTMN')->name('addTMN');
    Route::post('tao-tin-moi-nhat','ControllerAdmin@PaddTMN')->name('PaddTMN');

    Route::get('tao-van-ban-truong','ControllerAdmin@addVBT')->name('addVBT');
    Route::post('tao-van-ban-truong','ControllerAdmin@PaddVBT')->name('PaddVBT');

    Route::get('tao-van-ban-cap-so','ControllerAdmin@addVBCS')->name('addVBCS');
    Route::post('tao-van-ban-cap-so','ControllerAdmin@PaddVBCS')->name('PaddVBCS');

    Route::get('tao-tin-nha-truong','ControllerAdmin@addTNT')->name('addTNT');
    Route::post('tao-tin-nha-truong','ControllerAdmin@PaddTNT')->name('PaddTNT');

    Route::get('tao-tin-cong-doan','ControllerAdmin@addcongdoan')->name('addcongdoan');
    Route::post('tao-tin-cong-doan','ControllerAdmin@Paddcongdoan')->name('Paddcongdoan');

    Route::get('tao-tin-doan-the','ControllerAdmin@addtindoanthe')->name('addtindoanthe');
    Route::post('tao-tin-doan-the','ControllerAdmin@Paddtindoanthe')->name('Paddtindoanthe');

    Route::get('tao-tin-hdngoaigiolenlop','ControllerAdmin@addhdngoaigiolenlop')->name('addhdngoaigiolenlop');
    Route::post('tao-tin-hdngoaigiolenlop','ControllerAdmin@Paddhdngoaigiolenlop')->name('Paddhdngoaigiolenlop');


    //-------------------------------Giáo viên-----------------------------------------//
    Route::get('QuanLyTKGV','ControllerAdmin@QuanLyTKGV')->name('QuanLyTKGV');
    Route::get('thongtingv/{id}','ControllerAdmin@getthongtingv');
  


    // Route::get('Quản-lý-khóa-học','ControllerAdmin@QLkhoahoc')->name('QLKhoahoc');
    Route::get('quan-ly-tin-tuyen-sinh','ControllerAdmin@QLTN')->name('QLTN');
    Route::get('quan-ly-van-ban-moi','ControllerAdmin@QLVBM')->name('QLVMB');
    Route::get('quan-ly-tin-moi-nhat','ControllerAdmin@QLTMN')->name('QLTMN');
    Route::get('quan-ly-van-ban-truong','ControllerAdmin@QLVBT')->name('QLVBT');
    Route::get('quan-ly-van-ban-cap-so','ControllerAdmin@QLVBCS')->name('QLVBCS');
    Route::get('quan-ly-tin-nha-truong','ControllerAdmin@QLTNT')->name('QLTNT');
    Route::get('quan-ly-tin-cong-doan','ControllerAdmin@QLcongdoan')->name('QLcongdoan');
    Route::get('quan-ly-tin-doan-the','ControllerAdmin@QLtindoanthe')->name('QLtindoanthe');
    Route::get('quan-ly-tin-hdngoaigiolenlop','ControllerAdmin@QLhdngoaigiolenlop')->name('QLhdngoaigiolenlop');
    Route::get('video','ControllerAdmin@video')->name('video');

    //------------------------------------noi dung xoa-----------------------
    
    Route::get('noidungxoa/{id}/key/{key}','ControllerAdmin@getnoidungxoa');
    Route::get('xoa/{id}/key/{key}','ControllerAdmin@getxoa');
     //------------------------------------noi dung sua-----------------------
    Route::get('noidungsua/{id}/key/{key}','ControllerAdmin@getnoidungsua');
    Route::post('noidungsua/{id}/key/{key}','ControllerAdmin@postnoidungsua');
   

    Route::get('thongtingv/{id}','ControllerAdmin@getthongtingv');
    //---------------------------------------chủ đề ảnh --------------------------------
    Route::get('chudeanh','ControllerAdmin@getchudeanh')->name('getcda');
    Route::get('addchudeanh','ControllerAdmin@addchudeanh')->name('addcda');
    Route::post('chudeanh','ControllerAdmin@Paddchudeanh')->name('Paddcda');
    
    //-----------------------------------------thêm ảnh---------------------------------
    Route::get('anh/{id}','ControllerAdmin@getanh')->name('getanh');
    Route::get('themanh/{key}','ControllerAdmin@getthemanh');
    Route::post('themanh','ControllerAdmin@pthemanh')->name('pthemanh');
    
    //------------------------------------------xóa ảnh----------------------------------
    Route::get('xoaanh/{id}/{idchude}','ControllerAdmin@xoaanh');

    //------------------------------------------Đổi mật khẩu----------------------------------
    Route::get('doimatkhau','ControllerAdmin@gdoimatkhau')->name('gdoimatkhau');
    Route::post('doimatkhau','ControllerAdmin@pdoimatkhau')->name('pdoimatkhau');

    //--------------------------------------------reset mật khẩu------------------------------
    Route::get('resetpass/{id}','ControllerAdmin@resetmatkhau');
    
});


Route::get('logout','ControllerUser@logout');

Route::get('dangkytkk', function () {
    return view('dangkytk');
});
Route::post('dangkytaikhoan','ControllerUser@registration')->name('dangkytaikhoan');

Route::get('search', 'ControllerUser@getSearch');
Route::post('search/name', 'ControllerUser@getSearchAjax')->name('search');


//ajax

Route::get('my-form','ControllerAjax@myform');
Route::post('my-form','ControllerAjax@myformPost');


Route::get('dangkykk','ControllerAjax@myformm');
Route::post('ajaxdk','ControllerAjax@myformmPost')->name('ajaxdk');

