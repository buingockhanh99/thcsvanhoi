@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        <h2 >Quản lý Video</h2>
    </div>
    <div style="height: 30px;"></div>
    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
        <tr align="center">
           
            <th>VIDEO</th>
            <th>THAY ĐỔI</th>
           
        </tr>
      
         @foreach($data as $dt)
         <tr class="odd gradeX" align="center" style="line-height: 100px">
             
             <td>  
                <video width="500px" height="200"  src="video/{{$dt->link}}" controls></video>
               
                </td>
             <td><button class="btn btn-primary"><a style="color: seashell" href="admin/noidungsua/{{$dt->id}}/key/{{$key='video'}}"><i class="fas fa-edit"></i></a></button></td>
         </tr>
      
         @endforeach
    </table>
    <div style="height: 30px;"></div>
  
    @if(session('thongbao'))
    <div class="alert alert-success" style="width: 500px; margin-left: 29%; text-align: center">
        {{session('thongbao')}}
    </div>
    @endif

    


</div>
@endsection