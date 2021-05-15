@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-left: 41%;padding-top: 3%;padding-bottom: 1%;">
        <h2 >Tạo Khóa Học</h2>
    </div>
    <form action="{{route('PaddKhoahoc')}}" method="POST">
        {{ csrf_field() }}
        <div  style="padding-left: 28%;">
            <table>
                <tr style="height: 45px">
                    <th style="width: 80px;">Khóa học</th>
                    <td> <input type="text" name="nambatdau" class="form-control" placeholder="Năm bắt đầu"  ></td>
                    <th>-</th>
                    <td><input type="text" name="namketthuc" class="form-control" placeholder="Năm kết thúc" ></td>             
                </tr> 
            </table>
            <div style="height: 20px"></div>
            <div style="padding-left: 9%;">
                <input type="submit" class="btn btn-primary" value="Tạo" style="width: 38.5%;" />
                <input type="reset" class="btn btn-primary"  value="Reset form">
            </div>
            <div style="height: 30px"></div>
            @if(count($errors)>0)
            <div class="alert alert-danger" style="width: 55%; text-align: center">
                @foreach($errors ->all() as $err)
                    {{$err}}<br>
                @endforeach
            </div>
            @endif

            @if(session('thongbao'))
                <div class="alert alert-success" style="width: 55%; text-align: center">
                    {{session('thongbao')}}
                </div>
            @endif

            @if(session('thongbaoloi'))
                <div class="alert alert-danger" style="width: 55%; text-align: center">
                    {{session('thongbaoloi')}}
                </div>
            @endif

            
        </div>
    </form>
</div> 




@endsection