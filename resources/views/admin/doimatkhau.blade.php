@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="text-align: center;padding-top: 3%;padding-bottom: 1%;">
        <h2>Đổi mật khẩu</h2>
    </div>
    
    <form  action="{{route('pdoimatkhau')}}" method="POST" >
        {{ csrf_field() }}
        <div  style="padding-left: 36%;">
            <table>
                </tr>
                <tr>
                    <th>New password</th>
                    <td style="padding-left: 5%;"><input value="{{old('passnew')}}"  type="password" placeholder="Mật khẩu mới"  name="passnew"  ></td>
                </tr>
                <tr style="height: 20px"></tr>

                <tr>
                    <th>Confirm password</th>
                    <td style="padding-left: 5%;"><input  type="password" placeholder="Mật khẩu mới"  name="passnew1"  ></td>
                </tr>
                <tr style="height: 20px"></tr>
            </table> 
            
            <div style="padding-left: 8.5%">
                <input type="submit" class="btn btn-primary" value="Đổi mật khẩu" style="width: 170px;" />
                <input type="reset" class="btn btn-primary"  value="Reset form">
            </div>
            <div style="height: 30px;"></div>
            @if(count($errors)>0)
                <div class="alert alert-danger" style="width: 45%">
                    @foreach($errors ->all() as $err)
                        {{$err}}<br>
                    @endforeach
                </div>
            @endif

            @if(session('thongbao'))
                <div class="alert alert-success" style="width: 45%">
                    {{session('thongbao')}}
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