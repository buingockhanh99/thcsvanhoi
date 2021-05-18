<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Admin</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="{{asset('images/logovanhoi.jpg')}}">
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
 
</head>
<body class="hold-transition sidebar-mini layout-fixed" style="font-family: 'Times New Roman', Times, serif">

<?php $user =Auth::user(); ?>
@if(Auth::check())
  @if($user->level ==1)

        <div class="wrapper">

          <!-- Navbar -->
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="{{route('idadmin')}}" class="nav-link"><i class="fas fa-home"></i> <b>Home</b> </a>
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
            
                  <li class="nav-item has-treeview">
                    <a href="" class="nav-link">
                      <i class="nav-icon fas fa-plus-square"></i>
                      <p>
                        QL tài khoản
                        <i class="fas fa-angle-left right"></i>
                        <span class="right badge badge-danger">New</span>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QuanLyTKGV')}}" class="nav-link">
                          <i class="fas fa-user"></i>
                          <p>Giáo Viên</p>
                        </a>
                      </li>
                      {{-- <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addAccoutHS')}}" class="nav-link">
                          <i class="fas fa-user-graduate"></i>
                          <p>Học Sinh</p>
                        </a>
                      </li> --}}
                    </ul>
                  </li>
                 {{-- <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-tasks"></i>
                      <p>
                        Quản lý tài khoản
                        <i class="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="{{route('addAccoutGV')}}" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Tài khoản GV</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="admin/index" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Tài khoản HS</p>
                        </a>
                      </li>
                    </ul>
                  </li> --}}
                  {{-- <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-edit"></i>
                      <p>
                         Đăng Tin Tức
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addTN')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Tin nhanh</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addVMB')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Văn bản mới</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addTMN')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Tin mới nhất</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addVBT')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Văn bản trường</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addVBCS')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Văn bản cấp sở</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addTNT')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Tin nhà trường</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addcongdoan')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Công Đoàn</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addtindoanthe')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>Tin đoàn thể</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('addhdngoaigiolenlop')}}" class="nav-link">
                          <i class="fas fa-plus-square nav-icon"></i>
                          <p>HĐ ngoài giờ lên lớp</p>
                        </a>
                      </li>
                    </ul>
                  </li> --}}

                  <li class="nav-item has-treeview">
                    <a href="" class="nav-link">
                      <i class="nav-icon fas fa-boxes"></i>
                      <p>
                         Quản lý tin tức
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      {{-- <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLTN')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Tin nhanh</p>
                        </a>
                      </li> --}}
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLVMB')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Văn bản mới</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLVBT')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Văn bản trường</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLVBCS')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Văn bản cấp sở</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLTNT')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Tin nhà trường</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLcongdoan')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Công Đoàn</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLtindoanthe')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>Tin đoàn thể</p>
                        </a>
                      </li>
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="{{route('QLhdngoaigiolenlop')}}" class="nav-link">
                          <i class="nav-icon fas fa-tasks"></i>
                          <p>HĐ ngoài giờ lên lớp</p>
                        </a>
                      </li>
                    </ul>
                  </li>


                  <li class="nav-item has-treeview">
                    <a href="{{route('QLTMN')}}" class="nav-link">
                      <i class="nav-icon fas fa-images"></i>
                      <p>
                           Slide Show
                      </p>
                    </a>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="{{route('QLTN')}}" class="nav-link">
                      <i class="nav-icon  fas fa-graduation-cap"></i>
                      <p>
                           Tuyển sinh
                      </p>
                    </a>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="{{route('getcda')}}" class="nav-link">
                      <i class="nav-icon fas fa-list"></i>
                      <p>
                        Quản lý chủ đề ảnh
                      </p>
                    </a>
                  </li>
                 <?php 
                 
                 $data = DB::table('chudeanh')->get()
                 
                 ?>
                  <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-tasks"></i>
                      <p>
                         Danh mục ảnh
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      @foreach($data as $dt)
                      <li class="nav-item" style="padding-left: 5%">
                        <a href="admin/anh/{{$dt->id}}" class="nav-link">
                          <i class="nav-icon fas fa-image"></i>
                          <p>{{$dt->tenchude}}</p>
                        </a>
                      </li>
                      @endforeach
                    </ul>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="{{route('video')}}" class="nav-link">
                      <i class="nav-icon fab fa-youtube"></i>
                      <p>
                           VIDEO
                      </p>
                    </a>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="{{route('gdoimatkhau')}}" class="nav-link">
                      <i class="nav-icon fas fa-key"></i>
                      <p>
                           Đổi mật khẩu
                      </p>
                    </a>
                  </li>
                  {{-- <li class="nav-item has-treeview">
                    <a href="{{route('addKhoahoc')}}" class="nav-link">
                      <i class="nav-icon fas fa-tree"></i>
                      <p>
                        Tọa khóa học
                      </p>
                    </a>
                  </li> --}}
                 
                  {{-- <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-table"></i>
                      <p>
                        Tables
                        <i class="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="pages/tables/simple.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Simple Tables</p>
                        </a>
                      </li>             
                    </ul>
                  </li> --}}
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
            <strong>Copyright &copy; 2020-2026 </strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.0.5
            </div>
          </footer>

        </div>

        @else

          <h1>Bạn không có quyền truy cập vào trang này</h1>
          <button class="btn btn-primary" onclick="history.back();">Quay lại</button>
          
        @endif
@else

  <h1>Bạn chưa đăng nhập hoặc không có quyền truy cập vào trang này</h1>
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
