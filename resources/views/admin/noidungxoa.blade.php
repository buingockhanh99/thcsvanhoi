@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        @if($noidung==1)
        <h2>Nội dung xóa tin Công Đoàn</h2>
        @elseif($noidung==2)
        <h2>Nội dung xóa Hoạt động ngoài giờ lên lớp</h2>
        @elseif($noidung==3)
        <h2>Nội dung xóa tin Đoàn thể</h2>
        @elseif($noidung==4)
        <h2>Nội dung xóa tin Mới nhất</h2>
        @elseif($noidung==5)
        <h2>Nội dung xóa Tin Tuyển Sinh</h2>
        @elseif($noidung==6)
        <h2>Nội dung xóa tin Nhà trường</h2>
        @elseif($noidung==7)
        <h2>Nội dung xóa văn bản Cấp Sở</h2>
        @elseif($noidung==8)
        <h2>Nội dung xóa văn bản Mới</h2>
        @elseif($noidung==9)
        <h2>Nội dung xóa văn bản Trường</h2>
        @else
        <h1>Null</h1>
        @endif
    </div>


    @if(isset($data))
        @if($noidung==1)

            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>id</th>
                    <th>tieude</th>
                    <th>data</th>
                    <th>Ảnh</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" style="line-height: 100px">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/congdoan/vanban/{{$dt->filename}}">{{$dt->filename}}</a></td>
                    <td><img src="../public/congdoan/img/{{$dt->imgname}}" alt="" width="100px"></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='congdoan'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==2)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                    <th>Ảnh</th>
                    
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" style="line-height: 100px">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/hdngoaigiolenlop/vanban/{{$dt->filename}}">{{$dt->filename}}</a></td>
                    <td><img src="../public/hdngoaigiolenlop/img/{{$dt->imgname}}" alt="" width="100px"></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='hdngoaigio'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==3)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                    <th>Ảnh</th>
                    
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" style="line-height: 100px">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/tindoanthe/vanban/{{$dt->filename}}">{{$dt->filename}}</a></td>
                    <td><img src="../public/tindoanthe/img/{{$dt->imgname}}" alt="admin/xoa/{{$dt->id}}/key/{{$key='tindoanthe'}}" width="100px"></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='tindoanthe'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==4)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                    <th>Ảnh</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" style="line-height: 100px">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/tinmoinhat/vanban/{{$dt->filename}}">{{$dt->filename}}</a></td>
                    <td><img src="../public/tinmoinhat/img/{{$dt->imgname}}" alt="" width="100px"></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='tinmoinhat'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==5)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" >
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/tinnhanh/{{$dt->filename}}">{{$dt->filename}}</a></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='tinnhanh'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==6)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                    <th>Ảnh</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center" style="line-height: 100px">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/tinnhatruong/vanban/{{$dt->filename}}">{{$dt->filename}}</a></td>
                    <td><img src="../public/tinnhatruong/img/{{$dt->imgname}}" alt="" width="100px"></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='tinnhatruong'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==7)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Thời gian đăng</th>
                    <th>Data</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td>{{$dt->ngay}}-{{$dt->thang}}-{{$dt->nam}}</td>
                    <td><a href="../public/vanbantruong/{{$dt->filename}}">{{$dt->filename}}</a></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='vbcs'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==8)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Data</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td><a href="../public/vanbanmoi/{{$dt->filename}}">{{$dt->filename}}</a></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='vbmoi'}}" style="color: seashell">Xác nhận xóa</a></button>
        @elseif($noidung==9)
            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                <tr align="center">
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Thời gian đăng</th>
                    <th>Data</th>
                </tr>
                @foreach($data as $dt)
                <tr class="odd gradeX" align="center">
                    <td>{{$dt->id}}</td>
                    <td>{{$dt->tieude}}</td>
                    <td>{{$dt->ngay}}-{{$dt->thang}}-{{$dt->nam}}</td>
                    <td><a href="../public/vanbantruong/{{$dt->filename}}">{{$dt->filename}}</a></td>
                </tr>
                @endforeach
            </table>
            <button class="btn btn-primary" onclick="quay_lai()">Trở lại</button>
            <button class="btn btn-danger" style="margin-left: 43%"><a href="admin/xoa/{{$dt->id}}/key/{{$key='vbt'}}" style="color: seashell">Xác nhận xóa</a></button>
        @else
        <h1 style="text-align: center">Chưa có nội dung được gửi tới</h1>
        @endif
        

    @else
    <h1 style="text-align: center">Chưa có nội dung được gửi tới</h1>
    @endif
        
   
</div>



@endsection