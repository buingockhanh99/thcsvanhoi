@extends('layout.admin')
@section('NoiDung')

<div class="container-fluid">
    <div style="text-align: center;padding-top: 3%;padding-bottom: 1%;">
        <h2>Thêm chủ đề ảnh</h2>
    </div>
    
    <form  action="{{route('Paddcda')}}" method="POST" >
        {{ csrf_field() }}
        <div  style="padding-left: 36%;">
            <table>
                <tr>
                    <th>Chủ đề ảnh</th>
                    <td  style="padding-left: 5%;"><input type="text"  placeholder="Chủ đề ảnh" name="chudeanh" style="width: 270px;" ></td>
                </tr>
                <tr style="height: 20px">

                </tr>
                
            </table> 
            
            <div style="padding-left: 11%">
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

            @if(session('thongbaoloi'))
                <div class="alert alert-danger" style="width: 45%">
                    {{session('thongbaoloi')}}
                </div>
            @endif

        
            
            
        </div>
        
    </form>
    
</div>




@endsection