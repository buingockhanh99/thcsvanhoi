@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2>Thông tin giáo viên</h2>
    </div>

    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
            <th>Ảnh</th>
            <th>Họ Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Reset mật khẩu</th>
            
        </tr>
    @foreach($data as $dt)
         <tr class="odd gradeX" align="center">
             <td><img src="../public/imggv/{{$dt->anh}}" alt="" height="100px" width="100px"></td>
             <td style="padding-top: 5%; ">{{$dt->hoten}}</td>
             <td style="padding-top: 5%; ">{{$dt->diachi}}</td>
             <td style="padding-top: 5%; ">{{$dt->sdt}}</td>
             <td style="padding-top: 5%;">{{$dt->gioitinh}}</td>
             <td style="padding-top: 5%;">{{$dt->ngaysinh}}</td>
             <td style="padding-top: 5%"><a href="admin/resetpass/{{$dt->id_gv}}"><i class="fas fa-lock-open"></i></a></td>
         </tr>
        
    </table>
    <div style="height: 20px"></div>
    <button class="btn btn-primary"><a href="{{route('QuanLyTKGV')}}" style="color: seashell">Trở lại</a></button>
    @endforeach
    <button class="btn btn-danger" style="float: right"><a href="admin/xoa/{{$dt->id_gv}}/key/giaovien" style="color: seashell"><i class="fas fa-trash-alt"></i></a></button>
</div>

    <div style="height: 30px"></div>

    @if(session('thongbao'))
    <div class="alert alert-primary" style="margin-left: 35%;width: 40%; text-align: center;">
        {{session('thongbao')}}
    </div>
    @endif


@endsection