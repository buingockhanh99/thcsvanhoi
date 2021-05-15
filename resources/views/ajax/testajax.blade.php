<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Đăng Ký</title>
	<title>Laravel Ajax Validation Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
</head>
<body>


@if(count($errors) > 0 )
    <div>
        @foreach($errors->all() as $err)
        {{$err}}<br>

        @endforeach()
    </div>
@endif

@if (!isset($thongbao))

@else
    {{$thongbao}}
@endif 

<form action="{{route('ajaxdk')}}" method="POST">
    {{ csrf_field() }}

    <h1>Đăng ký</h1>
	<br>
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<input type="text" name="username"  placeholder="user - name">
	<br>
	<input type="password" name="password"  placeholder="Mật Khẩu" >
	<br>
	<input type="text" name="email" placeholder="Email" >
	<br>
	<button type="submit" id="btnsubmit">đăng ký</button>


</form>




	
</body>
</html>