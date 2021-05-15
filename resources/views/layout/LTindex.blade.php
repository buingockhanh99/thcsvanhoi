<!DOCTYPE html>
<html lang="vi">

<head>
    <title>Trường TH & THCS Vân Hội</title>
    <meta name="author" content="Trường THPT Vân Hội">
    
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta property="og:title" content="Trường THPT Vân Hội">
    <meta property="og:type" content="website">
    <meta property="og:description" content="Tin Tức - Tin Tức - https&#x3A;&#x002F;&#x002F;thptvanhoi.edu.vn&#x002F;">
    <meta property="og:site_name" content="Trường THPT Vân Hội">
    <meta property="og:url" content="https://thptvanhoi.edu.vn/">
    <meta name="keywords" content="thptvanhoi,trường vân hội,trường vân hội yên bái">
    <meta name="author" content="Bùi Ngọc Khánh">
    <meta http-equiv="refresh" content="300">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="shortcut icon" href="{{asset('images/logovanhoi.jpg')}}">

    <link rel="preload" as="script" href="{{asset('js/jquery.min.js')}}">
    <link rel="preload" as="script" href="{{asset('js/vi.js')}}">
    <link rel="preload" as="script" href="{{asset('js/global.js')}}">
    <link rel="preload" as="script" href="{{asset('js/news.js')}}">
    <link rel="preload" as="script" href="{{asset('js/main.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jquery.imgpreload.min.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jquery.slimmenu.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jquery-ui.min.js')}}">
    <link rel="preload" as="script" href="{{asset('js/users.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jquery.breakingnews.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jquery.marquee.min.js')}}">
    <link rel="preload" as="script" href="{{asset('js/jwplayer.js')}}">
    <link rel="preload" as="script" href="{{asset('js/bootstrap.min.js')}}">
    <link rel="preload" as="script" href="{{asset('js/contentslider.js')}}">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="StyleSheet" href="{{asset('css/bootstrap.min.css')}}">
    

    <link rel="StyleSheet" href="{{asset('css/style3.css')}}">
    <link rel="StyleSheet" href="{{asset('css/stylecss1.css')}}">
   
    <link rel="StyleSheet" href="{{asset('css/news.css')}}">
    <link rel="StyleSheet" href="{{asset('css/edu25.vi.1002.css')}}">
    <link rel="StyleSheet" href="{{asset('css/users.css')}}">
    <link rel="stylesheet" type="text/css" media="screen" href="{{asset('css/slimmenu.css')}}" />
    <link type="text/css" rel="stylesheet" href="{{asset('css/jquery.breakingnews.css')}}" />
    <link type="text/css" rel="stylesheet" href="{{asset('css/jquery.ui.tabs.css')}}" />
    <link type="text/css" rel="stylesheet" href="{{asset('css/contentslider1.css')}}" />
    <script src="{{asset('js/jquery.min.js')}}"></script>
    <base href="{{asset('')}}">
</head>

<body style="font-family: Arial, Helvetica, sans-serif, 'Times New Roman', Times, serif; font-size: 16px">
    @if (!isset($thongbao))

    @else
       {!!$thongbao!!}
    @endif  
   
    <div class="body-bg">
        
            <header style="margin-top: 45px">
                <div style="height: 250px;" >
                    <img style="margin-left: 12.8%" src="{{asset('images/vanhoi445.jpg')}}" width="74.4%" height="250px" />
                </div>
            </header>
            
            <nav class="second-nav" id="menusite">
                <div class="container">
                    <div class="row">
                        <div class="col-md-24">
                            <ul class="slimmenu">
                                <li>
                                    <a title="Trang chủ" href="{{route('thptvanhoi')}}"><em class="fa fa-lg fa-home">&nbsp;</em> <span class="hidden-sm"> Trang chủ </span></a>
                                </li>
                                <li><a title="Giới thiệu" href="vanban/gioithieu">Giới thiệu</a></li>
                                <li><a title="Tin Tức" href="#">Tin Tức</a></li>
                                <li><a title="Thời khóa biểu" href="#">Thời khóa biểu</a></li>
                                <li><a title="Tổ chức" href="#">Tổ chức</a></li>
                                <li><a title="TỔ BỘ MÔN" href="#">TỔ BỘ MÔN</a></li>
                                <li><a title="Kế Hoạch" href="#">Kế Hoạch</a></li><li>
                                <li><a title="Tuyển sinh" href="vanban/tuyensinh">Tuyển sinh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div style="background: rgb(241, 241, 241); height: 40px; width: 74.5%; margin-left: 12.7%; margin-bottom: 5px  ">
                <div style="float: left; height: 40px; width: 9%; line-height: 40px; text-align: center">
                    <?php $today = date("d/m/Y");
                    echo $today;  $timestamp = time(); ?>
                </div>
                <marquee style="float: right;height: 40px; width: 91%;line-height: 40px" direction="left">
                    CHÀO MỪNG TỚI TRANG THÔNG TIN ĐIỆN TỬ CỦA TRƯỜNG TH & THCS VÂN HỘI              
                </marquee>
               
               
            </div>
        
            <section class="container">
                <div  id="body">
                   
                    @yield('NoiDung')
                   
                </div>
            </section>
        
        
        <footer id="footer">
            <div class="wraper">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-24 col-sm-24 col-md-16">
                            <span style="color:rgb(231, 76, 60);"><strong>Bản quyền thuộc về trường THPT Vân Hội<br />Địa chỉ: Thôn 8, Xã Vân Hội, Huyện Trấn Yên, Yên Bái
                                <br />Thiết kế website: Bùi Ngọc Khánh - 0368699895</strong></span>

                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
        


        
    </div>
    {{-- header --}}
    <nav class="header-navv" >
        <div style="text-align: center">
                <ul class="slimmenuu">
                
                    <button class="btn btn-primary" style="margin-right: 11%" ><a style="color: #fff" href="{{route('getlogin')}}">Đăng nhập</a></button> 
                    
                    <li>
                        <a  target="_blank" href="http://yenbai.edu.vn/van-ban-cong-van/van-ban-so-gd-dt"><b> XEM CÔNG VĂN</b></a>
                        
                    </li>
                    <li>
                        <a  target="_blank" href="https://viettelstudy.vn/?page=landingPage"><b>HỌC TRỰC TUYẾN</b> </a>
                        
                    </li>
                    <li>
                        <a  target="_blank" href="https://web.cloudcam.vn/login"><b>XEM CAMERA</b></a>
                        
                    </li>
                    <li>
                        <a  target="_blank" href="http://smsedu.smas.vn/User/Login?ReturnUrl=%2f"><b>TRA CỨU ĐIỂM</b></a>
                        
                    </li>
        
                    <li>
                        <a  target="_blank" href="https://accounts.google.com/signin/v2/identifier?hl=vi&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession"><b>THƯ ĐIỆN TỬ</b></a>
                        
                    </li>
                    <li>
                        <a   href="vanban/tuyensinh"><b>TUYỂN SINH</b></a>
                    </li>
                </ul>
        </div>
    </nav>

    
    







    
    
  

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
     
    <script src="{{asset('js/jquery.min.js')}}"></script>
    {{-- javascript dangky --}}
    
    {{-- <script>
    function dangky()
    {
        $(document).ready(function() {    
           
                    $.ajaxSetup({
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                    });
                    
                    var _token = $("#token").val();
                    var username = $("#username").val().trim();
                    var password = $("#password").val().trim();
                    var confimpassword = $("#confimpassword").val().trim();
                    var email = $("#email").val().trim();
                    
                    if(username.length ==0)
                    {
                        showError('Vui lòng nhập tên đăng nhập')
                    }
                    else if (username.length <3 || username.length >30)
                    {
                        showError('Vui lòng nhập tên đăng nhập lớn hơn 3 và nhỏ hơn 30 ký tự')
                    }
                    else if(email.length == 0)
                    {
                        showError('Vui lòng nhập email')
                    }
                    else if(!email.includes('@'))
                    {
                        showError('Địa chỉ email không hợp  lệ')
                    }
                    else if (password.length == 0)
                    {
                        showError('Vui lòng nhập mật khẩu')
                    }
                    else if(password.length <8 || password.length >100)
                    {
                        showError('Vui lòng nhập mật khẩu lớn hơn 8 nhỏ hơn 100 ký tự')
                    }
                    else if(password != confimpassword)
                    {
                        showError('Mật khẩu nhập lại không khớp! Vui lòng nhập lại')
                    }
                   
                    else
                    {
                        $.ajax({
                            
                            url: "{{route('dangky')}}",
                            type:'POST',
                            data: {_token:_token, username:username, password:password, email:email},
                            success:function(data){ //dữ liệu nhận về
                            $('#thongbao').show();  
                            $('#thongbao').html(data);}
                        }); 
                    }    
            });
    }


   
        
    function showError(message){
        $('#thongbao').html(message)
        $('#thongbao').show()
    }
    </script> --}}

    <script>
        var nv_base_siteurl = "/",
            nv_lang_data = "vi",
            nv_lang_interface = "vi",
            nv_name_variable = "nv",
            nv_fc_variable = "op",
            nv_lang_variable = "language",
            nv_module_name = "news",
            nv_func_name = "main",
            nv_is_user = 0,
            nv_my_ofs = 7,
            nv_my_abbr = "+07",
            nv_cookie_prefix = "nv4c_Cgoz2",
            nv_check_pass_mstime = 1738000,
            nv_area_admin = 0,
            nv_safemode = 0,
            theme_responsive = 1,
            nv_is_recaptcha = 1,
            nv_recaptcha_sitekey = "6LcNwC8UAAAAAMm8ZTYNygweLUQtOU0IapbDRk69",
            nv_recaptcha_type = "image",
            nv_recaptcha_elements = [];
    </script>
    <script src="{{asset('js/vi.js?t=1614914252')}}"></script>
    <script src="{{asset('js/global.js?t=1614914252')}}"></script>
    <script src="{{asset('js/news.js?t=1614914252')}}"></script>
    <script src="{{asset('js/main.js?t=1614914252')}}"></script>
    <script type="text/javascript" src="{{asset('js/jquery.imgpreload.min.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        function nv_update_picture_views(id, viewed) {
            if (id > 0) {
                $.post(script_name + '?' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=albums&nocache=' + new Date().getTime(), 'updatepicview=1&viewed=' + viewed + '&id=' + id + '&num=' + nv_randomPassword(8), 'viewed' + id, function(res) {});
            }
            return false;
        }
        $(document).ready(function() {
            $('[rel="modalimg"]').click(function(e) {
                e.preventDefault();
                var a, b;

                a = $(this).attr('title');
                b = '<img src="' + $(this).attr('href') + '" style="width:100%">';
                modalShow(a, b);
            });

        });
    </script>
    <script type="text/javascript" src="{{asset('js/jquery.slimmenu.js?t=1614914252')}}"></script>
    <script src="{{asset('js/jquery-ui.min.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        $('ul.slimmenu').slimmenu({
            resizeWidth: (theme_responsive == '1') ? 768 : 0,
            collapserTitle: '',
            easingEffect: 'easeInOutQuint',
            animSpeed: 'medium',
            indentChildren: true,
            childrenIndenter: '&nbsp;&nbsp; '
        });
    </script>
    <script type="text/javascript">
        $(".icon_user a").click(function() {
            $("#nv-block-login").slideToggle("slow");
        });
    </script>
    <script src="{{asset('js/users.js?t=1614914252')}}"></script>
    <script type="text/javascript" src="{{asset('js/jquery.breakingnews.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $(".breakingNews").breakingNews({
                effect: "slide-h",
                autoplay: true,
                timer: 3000,
                color: "yellow"
            });

        });
    </script>
    <script type="text/javascript" src="{{asset('js/jquery.marquee.min.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#marquee-b141').marquee({
                duration: 2000 * $('#marquee-b141 li').length,
                gap: 10,
                duplicated: true,
                direction: 'up',
                startVisible: true
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("[data-rel='block_tooltip'][data-content!='']").tooltip({
                placement: "bottom",
                html: true,
                title: function() {
                    return ($(this).data('img') == '' ? '' : '<img class="img-thumbnail pull-left margin_image" src="' + $(this).data('img') + '" width="90" />') + '<p class="text-justify">' + $(this).data('content') + '</p><div class="clearfix"></div>';
                }
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("[data-rel='block_tooltip'][data-content!='']").tooltip({
                placement: "bottom",
                html: true,
                title: function() {
                    return ($(this).data('img') == '' ? '' : '<img class="img-thumbnail pull-left margin_image" src="' + $(this).data('img') + '" width="90" />') + '<p class="text-justify">' + $(this).data('content') + '</p><div class="clearfix"></div>';
                }
            });
        });
    </script>
    <script type="text/javascript" src="{{asset('js/jwplayer.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        jwplayer.key = "KzcW0VrDegOG/Vl8Wb9X3JLUql+72MdP1coaag==";
    </script>
    <script type="text/javascript">
        $(function() {
            var ele = "videoCont_bl145_v8";
            var a = $("#videoContCtn_bl145_v8").outerWidth(),
                b;
            640 < a && (a = 640);
            b = a;
            a = Math.ceil(45 * a / 80) + 4;
            $("#" + ele).parent().css({
                width: b,
                height: a,
                margin: "0 auto"
            });
            jwplayer(ele).setup({
                file: "/uploads/thptlequydon/.mp4",
                width: b,
                height: a,
                autostart: false
            });
        });
    </script>
    <script src="{{asset('js/bootstrap.min.js?t=1614914252')}}"></script>
    <script type="text/javascript" src="{{asset('js/contentslider.js?t=1614914252')}}"></script>
    <script type="text/javascript">
        //<![CDATA[
        $(document).ready(function() {
            var b = ["/uploads/thptlequydon/news/hanh.jpg", "/uploads/thptlequydon/news/image-20210225163055-1.jpeg", "/uploads/thptlequydon/news/image-20210118140701-2.jpeg"];
            $.imgpreload(b, function() {
                for (var c = b.length, a = 0; a < c; a++) $("#slImg" + a).attr("src", b[a]);
                featuredcontentslider.init({
                    id: "slider1",
                    contentsource: ["inline", ""],
                    toc: "#increment",
                    nextprev: ["&nbsp;", "&nbsp;"],
                    revealtype: "click",
                    enablefade: [true, 0.2],
                    autorotate: [true, 3E3],
                    onChange: function() {}
                });
                $("#tabs").tabs({
                    ajaxOptions: {
                        error: function(e, f, g, d) {
                            $(d.hash).html("Couldnt load this tab.")
                        }
                    }
                });
                $("#topnews").show()
            })
        });
        //]]>
    </script>


	
	
</body>

</html>


