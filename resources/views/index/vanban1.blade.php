
@extends('layout.LTindex')
@section('NoiDung')

<div class="row">
    <div class="col-sm-23 col-md-24">

        <div style="height: 20px"></div>
        <div>
            <button class="btn btn-primary" style="height: 40px;width: 110px;" onclick="history.back();"><i class="fas fa-arrow-left"></i></button>
        </div>
        <div style="height: 20px"></div>

        @switch($k)

        @case("tuyensinh")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                @foreach($tuyensinh as $ts)
                <div>
                    <h1><i class="fas fa-file-word"></i><span style="color:black;">{{$ts->tieude}}</span> </h1>
                    <p>Tải văn bản <a href="../../../../public/tinmoinhat/{{$ts->filename}}">tại đây</a></p>
                </div>
                @endforeach
            
                </div>
            </div>
        @break

        

        @case("tinmoinhat")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                @foreach($tinmoinhat as $tmn)
                <div>
                    <h1><i class="fas fa-file-word"></i><span style="color: black">{{$tmn->tieude}}</span> </h1>
                    <p>Tải văn bản <a href="../../../../public/tinmoinhat/vanban/{{$tmn->filename}}">tại đây</a></p>
                </div>
                @endforeach
                
                </div>
            </div>
        @break

        @case("gioithieu")
        <div>
            <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
            
            <div style="color: black">
                <h1 style="text-align: center; padding-bottom: 20px ;font-size: 30px">NỘI QUY NHÀ TRƯỜNG</h1>
                <span><b>1.</b> Kính trọng, lễ phép với thầy cô, cán bộ CNV. Giúp đỡ bạn bè trong học tập và rèn luyện hạnh kiểm.</span><br><br>
                <span><b>2.</b> Thuộc bài và làm bài đầy đủ theo yêu cầu của giáo viên bộ môn trước khi lên lớp.</span><br><br>
                <span><b>3.</b> Có ý thức bảo vệ tài sản chung của nhà trường, giữ gìn vệ sinh và cảnh quang môi trường XANH - SẠCH - ĐẸP.</span><br><br>
                <span><b>4.</b> Tuyệt đối không uống rượu bia, hút thuốc lá và dùng các chất kích thích khác.</span><br><br>
                <span><b>5.</b> Khi đến trường phải mặc đồng phục theo qui định, mang bảng tên và huy hiệu Đoàn (Nếu là đoàn viên).</span><br><br>
                <span><b>6.</b> Thật thà trung thực trong học tập, dũng cảm, biết bảo vệ lẽ phải, cái đúng, cái tốt.</span><br><br>
                <span><b>7.</b> Không gây gỗ, bè phái đánh nhau trong và ngoài nhà trường. Tuyệt đối không mang theo hung khí, chất nổ vào trong trường học.</span><br><br>
                <span><b>8.</b> Khi nghỉ học phải có đơn xin phép với lý do chính đáng và được cha mẹ xác nhận.</span><br><br>
                <span><b>9.</b> Hàng tháng học sinh phải trình cho gia đình sổ liên lạc và ghi rõ kết quả học tập và rèn luyện đạo đức đã được giáo viên chủ nhiệm và nhà trương xác nhận.</span><br><br>
                <span><b>10.</b> Tham gia tích cực và đầy đủ các ngày lễ, sinh hoạt chủ điểm do nhà trường và các đoản thể tổ chức.</span><br><br>

            </div>
            
            
            </div>
        </div>
    @break

        
    @endswitch
        
    </div>
    
</div>

<div style="height: 25px"></div>



@endsection




        


    

    
    







    
    
  
