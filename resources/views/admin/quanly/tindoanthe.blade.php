@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2 >Quản lý Tin Đoàn thể</h2>
    </div>
    <div><button class="btn btn-primary" style="width: 150px;"><i class="fas fa-plus"></i><a style="color: #fff" href="{{route('addtindoanthe')}}"> Thêm tin mới</a></button></div>
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
            <th>Xem</th>
            <th>Ảnh</th>
            <th>Sửa</th>
            <th>Xóa</th>
        </tr>
        <?php $i =1; ?>
         @foreach($data as $dt)
         <tr class="odd gradeX" align="center" style="line-height: 100px">
             <td>{{$i++}}</td>
             <td>{{$dt->tieude}}</td>
             <td><a target="_blank" href="vanban/tindoanthe/{{$dt->tieude}}/{{$dt->filename}}">{{$dt->tieude}}</a></td>
             <td><img src="tindoanthe/img/{{$dt->imgname}}" alt="" width="100px"></td>
             <td><button class="btn btn-primary"><a style="color: seashell" href="admin/noidungsua/{{$dt->id}}/key/{{$key='tindoanthe'}}"><i class="fas fa-edit"></i></a></button></td>
             <td><button class="btn btn-danger"><a style="color: seashell" href="admin/noidungxoa/{{$dt->id}}/key/{{$key='tindoanthe'}}"><i class="far fa-trash-alt"></i></a></button></td>
         </tr>
         @endforeach
         
    </table>

    
</div>
@endsection