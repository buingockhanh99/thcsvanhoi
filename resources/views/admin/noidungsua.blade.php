@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="padding-top: 3%;padding-bottom: 1%; text-align: center">
        @switch($noidung)
            @case(1)
            <h2>Nội dung sửa tin Công Đoàn</h2>
            @break
            @case(2)
            <h2>Nội dung sửa Hoạt động ngoài giờ lên lớp</h2>
            @break
            @case(3)
            <h2>Nội dung sửa tin Đoàn thể</h2>
            @break
            @case(4)
            <h2>Nội dung sửa tin Mới nhất</h2>
            @break
            @case(5)
            <h2>Nội dung sửa Tin Nhanh</h2>
            @break
            @case(6)
            <h2>Nội dung sửa tin Nhà trường</h2>
            @break
            @case(7)
            <h2>Nội dung sửa văn bản Cấp Sở</h2>
            @break
            @case(8)
            <h2>Nội dung sửa văn bản Mới</h2>
            @break
            @case(9)
            <h2>Nội dung sửa văn bản Trường</h2>
            @break
            @case(10)
            <h2>Update Video</h2>
            @break
            @default
            <h2>Không có nội dung</h2>
        @endswitch
        
    </div>

    
     @if(count($errors)>0)
            <div class="alert alert-danger" style="width: 40%; text-align: center; margin-left: 30%">
                @foreach($errors ->all() as $err)
                    {{$err}}<br>
                @endforeach
            </div>
        @endif

        @if(session('thongbaoloi'))
            <div class="alert alert-danger" style="width: 40%; text-align: center;">
                {{session('thongbaoloi')}}
            </div>
        @endif
    @if(isset($data))
        @switch($noidung)
            @case(1)
                <form  action="admin/noidungsua/{{$data->id}}/key/congdoan" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input type="text" value="{{$data->tieude}}" name="tieude" style="width: 270px;" ></td>
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
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                        
                    </div>
                </form>
            @break

            @case(2)
                <form  action="admin/noidungsua/{{$data->id}}/key/hdngoaigio" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input type="text" value="{{$data->tieude}}" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
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
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break

            @case(3)
                <form  action="admin/noidungsua/{{$data->id}}/key/tindoanthe" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input type="text" value="{{$data->tieude}}" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
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
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break

            @case(4)
                <form  action="admin/noidungsua/{{$data->id}}/key/tinmoinhat"  method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                            <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input type="text" value="{{$data->tieude}}" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
                            <tr style="height: 20px">
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx"></td>
                            </tr>
                            <tr style="height: 20px">
                            </tr>
                            <tr>
                                <th>Ảnh</th>
                                <td style="padding-left: 5%;"><input type="file"  name="img" accept="image/png, image/jpeg"></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 

                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
            
                        <div style="height: 15px;"></div>
                </form>
            @break

            @case(5)
                <form  action="admin/noidungsua/{{$data->id}}/key/tinnhanh" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                            <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input value="{{$data->tieude}}" type="text" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
            
                            <tr style="height: 20px">
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx"></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 15px;"></div>
                </form>
            @break

            @case(6)
                <form  action="admin/noidungsua/{{$data->id}}/key/tinnhatruong" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input value="{{$data->tieude}}" type="text" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
                            <tr style="height: 20px">
            
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx"></td>
                            </tr>
            
                            <tr style="height: 20px"></tr>
            
                            <tr>
                                <th>Ảnh</th>
                                <td style="padding-left: 5%;"><input type="file"  name="img" accept="image/png, image/jpeg" ></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break

            @case(7)
                <form  action="admin/noidungsua/{{$data->id}}/key/vbcs" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input value="{{$data->tieude}}" type="text" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
                            <tr style="height: 20px">
            
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx" ></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
            
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break

            @case(8)
                <form  action="admin/noidungsua/{{$data->id}}/key/vbmoi" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                            <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input value="{{$data->tieude}}" type="text"  placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
                            <tr style="height: 20px">
            
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file" name="file" accept=".doc,.docx" ></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break

            @case(9)
                <form  action="admin/noidungsua/{{$data->id}}/key/vbt" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%;">
                        <table>
                            <tr>
                                <th>Tiêu đề</th>
                                <td  style="padding-left: 5%;"><input value="{{$data->tieude}}" type="text" placeholder="Tiêu đề" name="tieude" style="width: 270px;" ></td>
                            </tr>
                            <tr style="height: 20px">
            
                            </tr>
                            <tr>
                                <th>File</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".doc,.docx" ></td>
                            </tr>
            
                            <tr style="height: 50px"></tr>
                            <tr style="color: red">
                                <th>Lưu ý</th>
                                <td>Nếu không thay đổi Ảnh hoặc File thì để nguyên</td>
                            </tr>
                            <tr style="height: 20px"></tr>
                        </table> 
                        
                        <div style="padding-left: 13%">
                            <input type="submit" class="btn btn-primary" value="Sửa" style="width: 170px;" />
                        </div>
                        <div style="height: 30px;"></div>
                    </div>
                </form>
            @break


            @case(10)
                <form  action="admin/noidungsua/{{$data->id}}/key/video" method="POST" enctype="multipart/form-data" >
                    {{ csrf_field() }}
                    <div  style="padding-left: 36%; padding-bottom: 25px">
                        <table>
                            <tr>
                                <th>VIDEO</th>
                                <td style="padding-left: 5%;"><input type="file"  name="file" accept=".mp4" ></td>
                            </tr>

                            
                        </table> 
                        <div style="height: 30px;"></div>
                        <div style="padding-left: 8%">
                            <input type="submit" class="btn btn-primary" value="THAY ĐỔI" style="width: 270px;" />
                        </div>
                        
                    </div>
                </form>
            @break

            @default
            <h1>Không có nội dung gửi tới</h1>
        @endswitch
      
       
    @endif
   
</div>



@endsection