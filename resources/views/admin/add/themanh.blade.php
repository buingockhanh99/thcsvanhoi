@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="text-align: center;padding-top: 3%;padding-bottom: 1%;">
        <?php $tenchude = DB::table('chudeanh')->where('id',$key)->get(); ?>
       @foreach($tenchude as $tcd)
        <h2>Thêm ảnh {{$tcd->tenchude}} </h2>
        @endforeach
       
    </div>
    
    <form  action="{{route('pthemanh')}}" method="POST" enctype="multipart/form-data" >
        {{ csrf_field() }}
        <div  style="padding-left: 38%;">
            <table>
                <tr>
                    <th>Tên ảnh</th>
                    <td style="padding-left: 5%;"><input type="text"  name="tenanh"></td>
                </tr>
                <tr style="height: 20px"></tr>
                <tr>
                    <th>Ảnh</th>
                    <td style="padding-left: 5%;"><input type="file"  name="img" accept="image/png, image/jpeg"></td>
                </tr>
                <tr style="height: 20px"></tr>
            </table> 
            <input type="hidden" value="{{$key}}" name="idchude" >
            <div style="padding-left: 5.3%">
                <input type="submit" class="btn btn-primary" value="Tải lên" style="width: 170px;" />
                <input type="reset" class="btn btn-primary"  value="Reset form">
            </div>

            <div style="height: 15px;"></div>
            @if(count($errors)>0)
                <div class="alert alert-danger" style="width: 45%">
                    @foreach($errors ->all() as $err)
                        {{$err}}<br>
                    @endforeach
                </div>
            @endif

            @if(session('thongbaoloi'))
                <div class="alert alert-danger" style="width: 45%">
                    {{session('thongbaoloi')}}
                </div>
            @endif    
            
        </div>
        
    </form>
    
</div>




@endsection