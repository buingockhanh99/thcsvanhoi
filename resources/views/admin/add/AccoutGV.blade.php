@extends('layout.admin')
@section('NoiDung')
<div class="container-fluid">
    <div style="padding-left: 35%;padding-top: 3%;padding-bottom: 1%;">
        <h2 >Tạo tài khoản Giáo Viên</h2>
    </div>
    
    <form  action="{{route('PaddAccoutGV')}}" method="POST" enctype="multipart/form-data" >
        {{ csrf_field() }}
        <div  style="padding-left: 35%;">
            <table>
            <tr style="height: 45px">
            <th>Tên đăng nhập</th>
                <td  style="padding-left: 5%;"><input value="{{ old('username') }}" type="text" placeholder="Tên đăng nhập" name="username" id="usngv"></td>
                <td>@error('username')
                    {{ $message }} 
                @enderror</td>
            </tr>
            <tr style="height: 45px">
                <th>Họ tên</th>
                <td  style="padding-left: 5%;"><input value="{{ old('myname') }}" type="text" placeholder="Họ và tên giáo viên" name="myname"></td>
                <td>@error('myname')
                    {{ $message }} 
                @enderror</td>
            </tr>
            <tr style="height: 45px">
            <th>Gmail</th>
                <td style="padding-left: 5%;"><input value="{{ old('email') }}" type="email" placeholder="Gmail" name="email"></td>
                <td>@error('email')
                    {{ $email }} 
                 @enderror</td>
            </tr>
            <tr style="height: 45px">
                <th>Địa chỉ</th>
                <td style="padding-left: 5%;"><input value="{{ old('diachi') }}" type="text" placeholder="Địa chỉ" name="diachi"></td>
                <td>@error('diachi')
                     {{ $message }} 
                @enderror</td>
            </tr>
            <tr style="height: 45px">
                <th>Số điện thoại</th>
                <td style="padding-left: 5%;"><input value="{{ old('sdt') }}" type="text" placeholder="Số điện thoại" name="sdt" maxlength="10"></td>
                <td>@error('sdt')
                    {{ $message }} 
                @enderror</td>
            </tr>
            <tr style="height: 45px">
                <th>Ngày Sinh</th>
                <td style="padding-left: 5%;"><input value="{{ old('date') }}" type="date" name="date"></td>
                <td>@error('date')
                    {{ $message }} 
                 @enderror</td>
            </tr>
            <tr style="height: 45px">
                <th>Ảnh</th>
                <td style="padding-left: 5%;"><input  type="file"  name="file" id="file"></td>
            </tr>
            <tr style="height: 45px">
                <th>Giới tính</th>
                <td  style="padding-left: 5%;">
                    <input style="width: 30px;" type="radio" name="sex" value="Nam" checked>Nam
                    
                    <input style="width: 30px;" type="radio" name="sex" value="Nữ">Nữ
                </td>
            </tr>
            <tr style="height: 20px"></tr>
        </table> 
        
       

        @if(session('thongbao'))
            <div class="alert alert-success" style="width: 40%">
                {{session('thongbao')}}
            </div>
        @endif

        @if(session('thongbaoloi'))
            <div class="alert alert-danger" style="width: 40%">
                {{session('thongbaoloi')}}
            </div>
        @endif

      
        <div style="padding-left: 10%">
            <input type="submit" class="btn btn-primary" value="Đăng ký thành viên" />
            <input type="reset" class="btn btn-primary"  value="Reset form">
        </div>
        
        </div>
        
    </form>
    
</div>



@endsection