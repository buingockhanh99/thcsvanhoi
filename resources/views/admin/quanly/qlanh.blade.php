@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
       <?php $tenchude = DB::table('chudeanh')->where('id',$key)->get(); ?>
       @foreach($tenchude as $tcd)
        <h2>Quản lý ảnh {{$tcd->tenchude}} </h2>
        @endforeach
    </div>
    @if(session('thongbao'))
    <div class="alert alert-success" style="width: 500px; margin-left: 29%; text-align: center">
        {{session('thongbao')}}
    </div>
    @endif
    <div><button class="btn btn-primary" style="width: 150px;"><i class="fas fa-plus"></i><a style="color: #fff" href="admin/themanh/{{$key}}"> Thêm ảnh</a></button></div>
    <div style="height: 30px;"></div>

    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
            <th>STT</th>
            <th>Tiêu đề ảnh</th>
            <th>Ảnh</th>
            <th>Người đăng</th>
            <th>Xóa</th>
        </tr>
        <?php $i =1; ?>
         @foreach($data as $dt)
         <tr class="odd gradeX" align="center" style="line-height: 200px" >
             <td>{{$i++}}</td>
             <td>{{$dt->tenanh}}</td>
             <td><img height="200px" width="200px" src="anhnhatruong/{{$dt->filename}}" alt=""></td>
             <?php $idnd =  DB::table('users')->where('name',$dt->nguoidang)->get() ?>
             @foreach($idnd as $indnd)
             <td><a href="admin/thongtingv/{{$indnd->id}}">{{$dt->nguoidang}}</a></td>
             @endforeach
             <td><a href="admin/xoaanh/{{$dt->id}}/{{$key}}"><i class="fas fa-trash-alt"></i></a></td>
         </tr>

        
         @endforeach
    </table>
    <div style="height: 30px;"></div>
   
  
</div>
@endsection