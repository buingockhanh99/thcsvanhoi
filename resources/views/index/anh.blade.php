
@extends('layout.LTindex')
@section('NoiDung')



<div>
    <button class="btn btn-primary" style="margin-left: 0.5% ;height: 40px;width: 110px;" onclick="history.back();"><i class="fas fa-arrow-left"></i></button>
</div>
<div style="height: 20px"></div>


<div class="container">
    <div class="row">
        @foreach($data as $dt)
        <div class="col-md-7 col-xs-7"  style="margin-left: 3%; margin-bottom: 3%">
            <img style="width: 300px; height: 400px;"  src="anhnhatruong/{{$dt->filename}}"   />
            <div style="height: 20px"></div>
            <div style="text-align: center"><b>{{$dt->tenanh}}</b></div>
        </div>
        @endforeach
    </div>
</div>


@endsection





    
    
  


