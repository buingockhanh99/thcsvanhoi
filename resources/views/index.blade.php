@extends('layout.LTindex')
@section('NoiDung')
            
    <div class="row">
        
        
        {{-- Tin mới nhất --}}
        <div class="col-sm-18 col-md-18 " style="background: white;">

            <div style="width: 840px; height: 420px;">
                <style>
                        .carousel {
                        position: relative;
                    }
                    
                    .carousel-item {
                        position: relative;
                        display: none;
                        float: left;
                        width: 100%;
                        margin-right: -100%;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        transition: -webkit-transform 0.6s ease-in-out;
                        transition: transform 0.6s ease-in-out;
                        transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-item {
                            transition: none;
                        }
                    }
                    
                    .carousel-item.active,
                    .carousel-item-next,
                    .carousel-item-prev {
                        display: block;
                    }
                    
                    .carousel-item-next:not(.carousel-item-left),
                    .active.carousel-item-right {
                        -webkit-transform: translateX(100%);
                        transform: translateX(100%);
                    }
                    
                    .carousel-item-prev:not(.carousel-item-right),
                    .active.carousel-item-left {
                        -webkit-transform: translateX(-100%);
                        transform: translateX(-100%);
                    }
                    
                    .carousel-fade .carousel-item {
                        opacity: 0;
                        transition-property: opacity;
                        -webkit-transform: none;
                        transform: none;
                    }
                    
                    .carousel-fade .carousel-item.active,
                    .carousel-fade .carousel-item-next.carousel-item-left,
                    .carousel-fade .carousel-item-prev.carousel-item-right {
                        z-index: 1;
                        opacity: 1;
                    }
                    
                    .carousel-fade .active.carousel-item-left,
                    .carousel-fade .active.carousel-item-right {
                        z-index: 0;
                        opacity: 0;
                        transition: opacity 0s 0.6s;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-fade .active.carousel-item-left,
                        .carousel-fade .active.carousel-item-right {
                            transition: none;
                        }
                    }
                    
                    .carousel-control-prev,
                    .carousel-control-next {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        z-index: 1;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        width: 15%;
                        color: #fff;
                        text-align: center;
                        opacity: 0.5;
                        transition: opacity 0.15s ease;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-control-prev,
                        .carousel-control-next {
                            transition: none;
                        }
                    }
                    
                    .carousel-control-prev:hover, .carousel-control-prev:focus,
                    .carousel-control-next:hover,
                    .carousel-control-next:focus {
                        color: #fff;
                        text-decoration: none;
                        outline: 0;
                        opacity: 0.9;
                    }
                    
                    .carousel-control-prev {
                        left: 0;
                    }
                    
                    .carousel-control-next {
                        right: 0;
                    }
                    
                    .carousel-control-prev-icon,
                    .carousel-control-next-icon {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: no-repeat 50% / 100% 100%;
                    }
                    
                    .carousel-control-prev-icon {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
                    }
                    
                    .carousel-control-next-icon {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
                    }
                    
                    .carousel-indicators {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: 15;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-pack: center;
                        justify-content: center;
                        padding-left: 0;
                        margin-right: 15%;
                        margin-left: 15%;
                        list-style: none;
                    }
                    
                    .carousel-indicators li {
                        box-sizing: content-box;
                        -ms-flex: 0 1 auto;
                        flex: 0 1 auto;
                        width: 30px;
                        height: 3px;
                        margin-right: 3px;
                        margin-left: 3px;
                        text-indent: -999px;
                        cursor: pointer;
                        background-color: #fff;
                        background-clip: padding-box;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        opacity: .5;
                        transition: opacity 0.6s ease;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-indicators li {
                            transition: none;
                        }
                    }
                    
                    .carousel-indicators .active {
                        opacity: 1;
                    }
                    
                    .carousel-caption {
                        position: absolute;
                        right: 15%;
                        bottom: 20px;
                        left: 15%;
                        z-index: 10;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        color: #fff;
                        text-align: center;
                    }
                    
                    .custom-range:focus::-webkit-slider-thumb {
                        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                    }
                    .custom-range::-webkit-slider-thumb {
                        width: 1rem;
                        height: 1rem;
                        margin-top: -0.25rem;
                        background-color: #007bff;
                        border: 0;
                        border-radius: 1rem;
                        -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                        transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                        -webkit-appearance: none;
                        appearance: none;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .custom-range::-webkit-slider-thumb {
                            -webkit-transition: none;
                            transition: none;
                        }
                    }
                    
                    .custom-range::-webkit-slider-thumb:active {
                        background-color: #b3d7ff;
                    }
                    
                    .custom-range::-webkit-slider-runnable-track {
                        width: 100%;
                        height: 0.5rem;
                        color: transparent;
                        cursor: pointer;
                        background-color: #dee2e6;
                        border-color: transparent;
                        border-radius: 1rem;
                    }
                    
                    
                    .custom-range:disabled::-webkit-slider-thumb {
                        background-color: #adb5bd;
                    }
                    
                    .custom-range:disabled::-webkit-slider-runnable-track {
                        cursor: default;
                    }
                    .carousel-indicators {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: 15;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-pack: center;
                        justify-content: center;
                        padding-left: 0;
                        margin-right: 15%;
                        margin-left: 15%;
                        list-style: none;
                    }
                    
                    .carousel-indicators li {
                        box-sizing: content-box;
                        -ms-flex: 0 1 auto;
                        flex: 0 1 auto;
                        width: 30px;
                        height: 3px;
                        margin-right: 3px;
                        margin-left: 3px;
                        text-indent: -999px;
                        cursor: pointer;
                        background-color: #fff;
                        background-clip: padding-box;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        opacity: .5;
                        transition: opacity 0.6s ease;
                    }
                    
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-indicators li {
                            transition: none;
                        }
                    }
                    
                    .carousel-indicators .active {
                        opacity: 1;
                    }
                    
                    .carousel-inner {
                        position: relative;
                        width: 100%;
                        overflow: hidden;
                    }
                    
                    .carousel-inner::after {
                        display: block;
                        clear: both;
                        content: "";
                    }
                    
                    .carousel-item {
                        position: relative;
                        display: none;
                        float: left;
                        width: 100%;
                        margin-right: -100%;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        transition: -webkit-transform 0.6s ease-in-out;
                        transition: transform 0.6s ease-in-out;
                        transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-item {
                            transition: none;
                        }
                    }
                    
                    .carousel-item.active,
                    .carousel-item-next,
                    .carousel-item-prev {
                        display: block;
                    }
                    
                    .carousel-item-next:not(.carousel-item-left),
                    .active.carousel-item-right {
                        -webkit-transform: translateX(100%);
                        transform: translateX(100%);
                    }
                    
                    .carousel-item-prev:not(.carousel-item-right),
                    .active.carousel-item-left {
                        -webkit-transform: translateX(-100%);
                        transform: translateX(-100%);
                    }
                    
                    .carousel-fade .carousel-item {
                        opacity: 0;
                        transition-property: opacity;
                        -webkit-transform: none;
                        transform: none;
                    }
                    
                    .carousel-fade .carousel-item.active,
                    .carousel-fade .carousel-item-next.carousel-item-left,
                    .carousel-fade .carousel-item-prev.carousel-item-right {
                        z-index: 1;
                        opacity: 1;
                    }
                    
                    .carousel-fade .active.carousel-item-left,
                    .carousel-fade .active.carousel-item-right {
                        z-index: 0;
                        opacity: 0;
                        transition: opacity 0s 0.6s;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-fade .active.carousel-item-left,
                        .carousel-fade .active.carousel-item-right {
                            transition: none;
                        }
                    }
                    
                    .d-block {
                        display: block !important;
                    }
                    
                    @media (min-width: 768px) {
                        .d-md-none {
                            display: none !important;
                        }
                        .d-md-inline {
                            display: inline !important;
                        }
                        .d-md-inline-block {
                            display: inline-block !important;
                        }
                        .d-md-block {
                            display: block !important;
                        }
                        .d-md-table {
                            display: table !important;
                        }
                        .d-md-table-row {
                            display: table-row !important;
                        }
                        .d-md-table-cell {
                            display: table-cell !important;
                        }
                        .d-md-flex {
                            display: -ms-flexbox !important;
                            display: flex !important;
                        }
                        .d-md-inline-flex {
                            display: -ms-inline-flexbox !important;
                            display: inline-flex !important;
                        }
                    }
                    .w-100 {
                        width: 100% !important;
                    }
                    .carousel-control-prev,
                    .carousel-control-next {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        z-index: 1;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        width: 15%;
                        color: #fff;
                        text-align: center;
                        opacity: 0.5;
                        transition: opacity 0.15s ease;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .carousel-control-prev,
                        .carousel-control-next {
                            transition: none;
                        }
                    }
                    
                    .carousel-control-prev:hover, .carousel-control-prev:focus,
                    .carousel-control-next:hover,
                    .carousel-control-next:focus {
                        color: #fff;
                        text-decoration: none;
                        outline: 0;
                        opacity: 0.9;
                    }
                    
                    .carousel-control-prev {
                        left: 0;
                    }
                    
                    .carousel-control-next {
                        right: 0;
                    }
                    
                    .carousel-control-prev-icon,
                    .carousel-control-next-icon {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: no-repeat 50% / 100% 100%;
                    }
                    
                    .carousel-control-prev-icon {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
                    }
                    
                    .carousel-control-next-icon {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
                    }
                </style>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style="width: 840px; height: 420px;" class="d-block w-100" src="{{asset('images/khaigiang1.jpg')}}" alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 style="color: #fff; font-size: 24px"> Khai giảng năm học mới</h1>
                        </div>
                    </div>
                    @foreach($tinmoinhat as $tmn)
                        <div class="carousel-item">
                            <a href="vanban/tinmoinhat">
                            <img style="width: 840px; height: 420px;" class="d-block w-100" src="tinmoinhat/img/{{$tmn->imgname}}" alt="Second slide">
                            </a>
                            <div class="carousel-caption d-none d-md-block">
                                <a style="color: #fff; font-size: 24px" href="vanban/tinmoinhat"><h1>{{$tmn->tieude}}</h1></a>
                            </div>
                        </div>
                    @endforeach
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    
                    </a>
                </div>
            </div>


        </div>
        
        
        <div class="col-sm-6 col-md-6">
            
            <div class="panel panel-green">
                <div class="panel-heading">
                    Văn bản mới
                </div>
                <div class="panel-body" style="height: 385px">
                    <div id="marquee-b141" class="news-home-marquee">
                        <div class="clearfix">
                            <ul>
                                @foreach($vanbanmoi as $vbm)
                                <li class="clearfix">
                                    <strong>
                                        <a  href="vanban/vbmoi/{{$vbm->tieude}}/{{$vbm->filename}}"><i class="fas fa-file-word"></i> {{$vbm->tieude}}</a>
                                    </strong>
                                    <div class="text-muted"><small></small>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    
    {{-- --------------------------------------- --}}
    <div class="row">
        <div class="col-sm-16 col-md-18">
            <div class="clearfix">
                {{-- Văn bản trường --}}
                <div class="col-xs-24 col-sm-12 col-md-12 left">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <span>Văn bản trường</span>
                        </div>
                        <div class="panel-body">
                            <ul>
                            @foreach($vanbantruong as $vbt)
                                <li class="clearfix">
                                    <div class="pull-left pubtime">
                                        <p>Th.{{$vbt->thang}}</p>
                                        <p>{{$vbt->ngay}}</p>
                                    </div>
                                    <a class="show"  href="vanban/vanbantruong/{{$vbt->tieude}}/{{$vbt->filename}}" >{{$vbt->tieude}}</a>
                                </li>
                            @endforeach
                            </ul>
                        </div>
                    </div>

                </div>
                {{-- văn bản sở --}}
                <div class="col-xs-24 col-sm-12 col-md-12 right">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <span>Văn bản cấp sở</span>
                        </div>
                        <div class="panel-body">
                            <ul>
                                @foreach($vanbanso as $vbs)
                                <li class="clearfix">
                                    <div class="pull-left pubtime">
                                        <p>Th.{{$vbs->thang}}</p>
                                        <p>{{$vbs->ngay}}</p>
                                    </div>
                                    <a class="show" href="vanban/vanbanso/{{$vbs->tieude}}/{{$vbs->filename}}" data-content="" data-img="" data-rel="block_tooltip">{{$vbs->tieude}}</a>
                                </li>
                            @endforeach
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            {{-- img --}}
            <div class="margin-bottom">
                <div class="nv-block-banners">
                    <img alt="Học tập và làm theo tấm gương đạo đức Hồ Chí Minh" src="images/baner_tam-guong-dao-duc_1.jpg" width="790">
                </div>

            </div>
            {{-- Tin nhà trường --}}
            <div class="news_column">
                <div class="panel panel-default clearfix">
                    <div class="panel-heading">
                        <ul class="list-inline sub-list-icon" style="margin: 0">
                            <li style="width:200px; text-align: center">
                                <h4><span>Tin nhà trường</span></h4>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-16 ">
                            @foreach($tinnhatruongnew as $tntn)
                                <a title="{{$tntn->tieude}}" href="vanban/tinnhatruong/{{$tntn->tieude}}/{{$tntn->filename}}"><img src="tinnhatruong/img/{{$tntn->imgname}}" alt="" style="width: 210px; height: 300px;"  class="img-thumbnail pull-left imghome" />
                                </a>
                                <h3>
                                    <a title="{{$tntn->tieude}}" href="vanban/tinnhatruong/{{$tntn->tieude}}/{{$tntn->filename}}" >{{$tntn->tieude}}</a>
                                </h3>
                            @endforeach                                              
                            </div>
                            <div class="col-md-8  border-left-content">
                                <ul class="related">
                                    @foreach($tinnhatruong as $tnt)
                                    <li class="icon_list">
                                        <a class="show h4" href="vanban/tinnhatruong/{{$tnt->tieude}}/{{$tnt->filename}}" title="{{$tnt->tieude}}" data-content="" data-img="tinnhatruong/vanban/{{$tnt->filename}}" data-rel="tooltip" data-placement="top">{{$tnt->tieude}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- công đoàn --}}
            <div class="news_column">
                <div class="panel panel-default clearfix">
                    <div class="panel-heading">
                        <ul class="list-inline sub-list-icon" style="margin: 0">
                            <li style="width:200px; text-align: center">
                                <h4><span>CÔNG ĐOÀN</span></h4>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-16 ">
                            @foreach($congdoannew as $cdn)
                                <a title="{{$cdn->tieude}}" href="vanban/congdoan/{{$cdn->tieude}}/{{$cdn->filename}}"><img src="congdoan/img/{{$cdn->imgname}}" alt="" style="width: 210px; height: 300px;"  class="img-thumbnail pull-left imghome" />
                                </a>
                                <h3>
                                    <a title="{{$cdn->tieude}}" href="vanban/congdoan/{{$cdn->tieude}}/{{$cdn->filename}}" >{{$cdn->tieude}}</a>
                                </h3>
                            @endforeach                                              
                            </div>
                            <div class="col-md-8  border-left-content">
                                <ul class="related">
                                    @foreach($congdoan as $cd)
                                    <li class="icon_list">
                                        <a class="show h4" href="vanban/congdoan/{{$cd->tieude}}/{{$cd->filename}}" title="{{$cd->tieude}}" data-content="" data-img="congdoan/vanban/{{$cd->filename}}" data-rel="tooltip" data-placement="top">{{$cd->tieude}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Tin đoàn thể --}}
            <div class="news_column">
                <div class="panel panel-default clearfix">
                    <div class="panel-heading">
                        <ul class="list-inline sub-list-icon" style="margin: 0">
                            <li style="width:200px; text-align: center">
                                <h4><span>Tin Đoàn Thể</span></h4>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-16 ">
                            @foreach($tindoanthenew as $tdtn)
                                <a title="{{$tdtn->tieude}}" href="vanban/tindoanthe/{{$tdtn->tieude}}/{{$tdtn->filename}}"><img src="tindoanthe/img/{{$tdtn->imgname}}" alt="" style="width: 210px; height: 300px;"  class="img-thumbnail pull-left imghome" />
                                </a>
                                <h3>
                                    <a title="{{$tdtn->tieude}}" href="vanban/tindoanthe/{{$tdtn->tieude}}/{{$tdtn->filename}}" >{{$tdtn->tieude}}</a>
                                </h3>
                            @endforeach                                              
                            </div>
                            <div class="col-md-8  border-left-content">
                                <ul class="related">
                                    @foreach($tindoanthe as $tdt)
                                    <li class="icon_list">
                                        <a class="show h4" href="vanban/tindoanthe/{{$tdt->tieude}}/{{$tdt->filename}}" title="{{$tdt->tieude}}" data-content="" data-img="tindoanthe/vanban/{{$tdt->filename}}" data-rel="tooltip" data-placement="top">{{$tdt->tieude}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Hoạt động ngoài giờ lên lớp --}}
            <div class="news_column">
                <div class="panel panel-default clearfix">
                    <div class="panel-heading">
                        <ul class="list-inline sub-list-icon" style="margin: 0">
                            <li style="width:250px; text-align: center">
                                <h4><span>HOẠT ĐỘNG NGOÀI GIỜ LÊN LỚP</span></h4>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-16 ">
                            @foreach($hdngllnew as $datahdn)
                            
                                <a title="{{$datahdn->tieude}}" href="vanban/hdngoaigiolenlop/{{$datahdn->tieude}}/{{$datahdn->filename}}"><img src="hdngoaigiolenlop/img/{{$datahdn->imgname}}" alt="" style="width: 210px; height: 300px;"  class="img-thumbnail pull-left imghome" />
                                </a>
                                <h3>
                                    <a title="{{$datahdn->tieude}}" href="vanban/hdngoaigiolenlop/{{$datahdn->tieude}}/{{$datahdn->filename}}" >{{$datahdn->tieude}}</a>
                                </h3>
                            @endforeach                                              
                            </div>
                            <div class="col-md-8  border-left-content">
                                <ul class="related">
                                    @foreach($hdngll as $datahd)
                                    <li class="icon_list">
                                        <a class="show h4" href="vanban/hdngoaigiolenlop/{{$datahdn->tieude}}/{{$datahdn->filename}}" title="{{$datahd->tieude}}" data-content="" data-img="hdngoaigiolenlop/vanban/{{$datahd->filename}}" data-rel="tooltip" data-placement="top">{{$datahd->tieude}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-7 col-md-6">
            <div class="panel panel-green">
                <div class="panel-heading">
                    VIDEO
                </div>
                
                <div class="panel-body">
                    @foreach($video as $vd)
                    <video width="237" height="239"  src="video/{{$vd->link}}" controls></video>
                    
                    @endforeach
                </div>
            </div>

            <div style="margin-top: 40px " class="panel panel-green">
                <div class="panel-heading">
                    BẢN ĐỒ VỊ TRÍ
                </div>
                <div class="panel-body">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.7989182745844!2d104.86588208390731!3d21.593196794050957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd89bf35f7104f6f0!2zVHLGsOG7nW5nIHRydW5nIGjhu41jIGPGoSBz4bufIFbDom4gSOG7mWk!5e0!3m2!1svi!2s!4v1620701498699!5m2!1svi!2s" 
                    width="237" height="347" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

            <div style="margin-top: 53px " class="panel panel-green">
                <div class="panel-heading">
                    QUẢN LÝ
                </div>
                <div class="panel-body">
                    <p>HT: Trần Thị Hồng Tuyến</p>
                   
                </div>
            </div>

            <div class="panel panel-white">
                <div class="panel-heading">
                    Thư viện ảnh
                </div>
                <div class="panel-body">
                    <ul class="list_album">
                        @foreach($chudeanh as $cna)
                           
                            <li class="text-center">
                                <a href="anh/{{$cna->id}}" title="{{$cna->tenchude}}">
                                    <img style="width: 105px; height: 130px;"  src="anhnhatruong/{{$cna->anhdaidien}}" class="img-thumbnail" alt="{{$cna->tenchude}}"  />
                                </a>
                                <b></b>
                                <a style="color: blue" href="anh/{{$cna->id}}" title="{{$cna->tenchude}}">{{$cna->tenchude}}</a>
                            </li>
                          
                        @endforeach
                        
                    </ul>
                </div>
            </div>
        
        </div>
    </div>

    

@endsection
    
  