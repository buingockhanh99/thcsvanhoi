@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="text-align: center;padding-top: 3%;padding-bottom: 1%;">
        <h2>Tin Nhà Trường</h2>
    </div>
    
    <form  action="{{route('PaddTNT')}}" method="POST" enctype="multipart/form-data" >
        {{ csrf_field() }}
        <div  style="padding-left: 36%;">
            <table>
                <tr>
                    <th>Tiêu đề</th>
                    <td  style="padding-left: 5%;"><input type="text" value="{{ old('tieude') }}" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                </tr>
                <tr style="height: 20px">

                </tr>
                <tr>
                    <th>File</th>
                    <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx" ></td>
                </tr>

                <tr style="height: 20px"></tr>

                <tr>
                    <th>Ảnh</th>
                    <td style="padding-left: 5%;"><input type="file"  name="img" accept="image/png, image/jpeg" ></td>
                </tr>

                <tr style="height: 20px"></tr>
            </table> 
            
            <div style="padding-left: 8.5%">
                <input type="submit" class="btn btn-primary" value="Tải lên" style="width: 170px;" />
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