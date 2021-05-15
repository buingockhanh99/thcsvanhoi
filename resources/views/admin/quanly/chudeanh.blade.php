@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2 >Quản lý chủ đề Ảnh</h2>
    </div>
    <div><button class="btn btn-primary" style="width: 200px;"><i class="fas fa-plus"></i><a style="color: #fff" href="{{route('addcda')}}"> Thêm chủ đề mới</a></button></div>
    <div style="height: 30px;"></div>
    @if(session('thongbao'))
    <div class="alert alert-success" style="width: 500px; margin-left: 29%; text-align: center">
        {{session('thongbao')}}
    </div>
    @endif
    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
            <th>STT</th>
            <th>Chủ đề</th>
            <th>Số lượng ảnh</th>
            <th>Xem</th>
        </tr>
        <?php $i =1; ?>
         @foreach($data as $dt)
         <tr class="odd gradeX" align="center" style="line-height: 100px">
             <td>{{$i++}}</td>
             <td>{{$dt->tenchude}}</td>
            <?php 
            $idchude = $dt->id;
            $count = DB::table('anh')->where('idchude',$idchude)->count(); 
            ?>
             <td>{{$count}}</td>
             <td><a target="_blank" href="anh/{{$dt->id}}"><i class="fas fa-eye"></i></a></td>
         </tr>
      
         @endforeach
    </table>
    <div style="height: 30px;"></div>
  
  

    


</div>
@endsection