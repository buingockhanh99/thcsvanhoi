
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

    

        @case("vbmoi")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/vanbanmoi/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/vanbanmoi/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

      

        @case("vanbantruong")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/vanbantruong/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/vanbantruong/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("vanbanso")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/vanbancapso/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/vanbancapso/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("tinnhatruong")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/tinnhatruong/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/tinnhatruong/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("congdoan")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/congdoan/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%;">
                    <?php include '../public/congdoan/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("tindoanthe")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/tindoanthe/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/tindoanthe/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("hdngoaigiolenlop")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="../../../../public/hdngoaigiolenlop/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include '../public/hdngoaigiolenlop/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        
    @endswitch
        
    </div>
    
</div>


        




    
    


@endsection





    
    
  


