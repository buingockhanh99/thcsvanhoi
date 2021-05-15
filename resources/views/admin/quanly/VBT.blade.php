@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2 >Quản lý Văn bản trường</h2>
    </div>
    <div><button class="btn btn-primary" style="width: 150px;"><i class="fas fa-plus"></i><a style="color: #fff" href="{{route('addVBT')}}"> Thêm tin mới</a></button></div>
    <div style="height: 30px;"></div>
    @if(session('thongbao'))
    <div class="alert alert-success" style="width: 500px; margin-left: 29%; text-align: center">
        {{session('thongbao')}}
    </div>
    @endif

    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Thời gian đăng</th>
            <th>Xem</th>
            <th>Sửa</th>
            <th>Xóa</th>
        </tr>
        <?php $i =1; ?>
         @foreach($data as $dt)
         <tr class="odd gradeX" align="center" >
             <td>{{$i++}}</td>
             <td>{{$dt->tieude}}</td>
             <td>{{$dt->ngay}}-{{$dt->thang}}-{{$dt->nam}}</td>
             <td><a target="_blank" href="vanban/vanbantruong/{{$dt->tieude}}/{{$dt->filename}}">{{$dt->tieude}}</a></td>
             <td><button class="btn btn-primary"><a style="color: seashell" href="admin/noidungsua/{{$dt->id}}/key/{{$key='vbt'}}"><i class="fas fa-edit"></i></a></button></td>
             <td><button class="btn btn-danger"><a style="color: seashell" href="admin/noidungxoa/{{$dt->id}}/key/{{$key='vbt'}}"><i class="far fa-trash-alt"></i></a></button></td>
         </tr>
         @endforeach
    </table>

   
</div>
@endsection