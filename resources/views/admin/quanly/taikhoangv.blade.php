@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2 >Quản lý tài khoản</h2>
    </div>
    <div><button class="btn btn-primary" style="width: 200px;"><i class="fas fa-plus"></i><a style="color: #fff" href="{{route('addAccoutGV')}}"> Thêm tài khoản mới</a></button></div>
    <div style="height: 30px;"></div>

    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
            <th>SĐT</th>
            <th>Tên đăng nhập</th>
            <th>Tên giáo viên</th>
            <th>Email</th>
            <th>Xem thông tin</th>
            
        </tr>
         @foreach($user as $us)
         <tr class="odd gradeX" align="center">
             <td>0{{$us->id}}</td>
             <td>{{$us->name}}</td>
             <td>{{$us->getGV->hoten}}</td>
             <td>{{$us->email}}</td>
             <td><a href="admin/thongtingv/{{$us->id}}"><i class="fas fa-eye"></i></a></td>
             
         </tr>
         @endforeach
    </table>

    @if(session('thongbao'))
    <div class="alert alert-success" style="width: 500px; margin-left: 29%; text-align: center">
        {{session('thongbao')}}
    </div>
    @endif
</div>

@endsection