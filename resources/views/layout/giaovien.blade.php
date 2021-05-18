<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Giáo Viên</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{asset('css/all.min.css')}}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="{{asset('css/tempusdominus-bootstrap-4.min.css')}}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{asset('css/icheck-bootstrap.min.css')}}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{asset('css/jqvmap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('css/adminlte.min.css')}}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{asset('css/OverlayScrollbars.min.css')}}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{asset('css/daterangepicker.css')}}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{asset('css/summernote-bs4.css')}}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  <base href="{{asset('')}}">
  <link rel="shortcut icon" href="{{asset('images/logovanhoi.jpg')}}">
</head>
<body class="hold-transition sidebar-mini layout-fixed" style="font-family: 'Times New Roman', Times, serif">
<?php $user =Auth::user(); ?>
@if(Auth::check())
  @if($user->level ==2)


        <div class="wrapper">

          <!-- Navbar -->
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="{{route('idadmingv')}}" class="nav-link"><i class="fas fa-home"></i> <b>Home</b> </a>
              </li>
            </ul>

            <!-- SEARCH FORM -->
            <form class="form-inline ml-3">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <!-- Right navbar links -->

            <div class="dropdown ml-auto">
              <button class="btn btn-secondary" type="button"  data-toggle="dropdown" >
                <i class="fas fa-user"></i>
              </button>
              <div class="dropdown-menu" >
                <a class="dropdown-item" href="{{url('logout')}}">Logout <i style="margin-left: 50%" class="fas fa-sign-out-alt"></i></a>
              </div>
            </div>
          </nav>
          <!-- /.navbar -->

          <!-- Main Sidebar Container -->
          <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="" class="brand-link">
              <img src="{{asset('images/logo_114_114.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                  style="opacity: .8">
              <span class="brand-text font-weight-light">Trường THPT Vân Hội</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
              <!-- Sidebar user panel (optional) -->
              

              <!-- Sidebar Menu -->
              <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  <!-- Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library -->
            
                 <?php 
                 
                 $data = DB::table('chudeanh')->get()
                 
                 ?>
                  <li class="nav-item has-treeview">
                    <a href="" class="nav-link">
                      <i class="nav-icon fas fa-tasks"></i>
                      <p>
                         Danh mục ảnh
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      @foreach($data as $dt)
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="giaovien/anh/{{$dt->id}}" class="nav-link">
                          <i class="nav-icon fas fa-image"></i>
                          <p>{{$dt->tenchude}}</p>
                        </a>
                      </li>
                      @endforeach
                    </ul>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="{{route('gvdoimatkhau')}}" class="nav-link">
                      <i class="nav-icon fas fa-key"></i>
                      <p>
                           Đổi mật khẩu
                      </p>
                    </a>
                  </li>

                  
                  
              </nav>
              <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
          </aside>

          <!-- Content Wrapper. Contains page content -->
          <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
              
              @yield('NoiDung')
            
            
            </section>
            <!-- /.content -->
          </div>
          <!-- /.content-wrapper -->
          <footer class="main-footer">
            <strong>Copyright &copy; THPT Vân Hội </strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
              <b>Nhận thiết kế website</b> BNK 0368699895
            </div>
          </footer>

        </div>
      @else

        <h1>Bạn không có quyền truy cập vào trang này</h1>
        <button class="btn btn-primary" onclick="history.back();">Quay lại</button>
        
      @endif
@else
    <h1>Bạn chưa đăng nhập</h1>
    <span>Quay lại trang đăng nhập <a href="{{route('getlogin')}}">tại đây</a> </span>
@endif
<!-- ./wrapper -->

<!-- jQuery -->

<script src="{{asset('js/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{asset('js/jquery-ui.min.js')}}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  text = $('#usngv').val();
  regex = /^[a-zA-Z]+$/; // Chỉ chấp nhận ký tự alphabet thường hoặc ký tự hoa
  if (regex.test(text)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 
  } else {
  }
</script>

<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
{{-- Quay lại --}}
<script>
  function quay_lai(){
      history.back();
  }
</script>

<!-- Bootstrap 4 -->
<script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>
<!-- ChartJS -->
<script src="{{asset('js/Chart.min.js')}}"></script>
<!-- Sparkline -->
<script src="{{asset('js/sparkline.js')}}"></script>
<!-- JQVMap -->
<script src="{{asset('js/jquery.vmap.min.js')}}"></script>
<script src="{{asset('js/jquery.vmap.usa.js')}}"></script>
<!-- jQuery Knob Chart -->
<script src="{{asset('js/jquery.knob.min.js')}}"></script>
<!-- daterangepicker -->
<script src="{{asset('js/moment.min.js')}}"></script>
<script src="{{asset('js/daterangepicker.js')}}"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{asset('js/tempusdominus-bootstrap-4.min.js')}}"></script>
<!-- Summernote -->
<script src="{{asset('js/summernote-bs4.min.js')}}"></script>
<!-- overlayScrollbars -->
<script src="{{asset('js/jquery.overlayScrollbars.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('js/adminlte.js')}}"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{asset('js/dashboard.js')}}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{asset('js/demo.js')}}"></script>
</body>
</html>
