
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
                    <a href="vanbanmoi/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                     @include ( asset('vanbanmoi.A2_vip.docx'))  
                 
                </div>
                </div>
            </div>
        @break

      

        @case("vanbantruong")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="vanbantruong/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include 'vanbantruong/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("vanbanso")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="vanbancapso/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include 'vanbancapso/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("tinnhatruong")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="tinnhatruong/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include 'tinnhatruong/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("congdoan")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="congdoan/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%;">
                    <?php include 'congdoan/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("tindoanthe")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="tindoanthe/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include 'tindoanthe/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        @case("hdngoaigiolenlop")
            <div>
                <div style="width: 100% ;border: slategrey solid 1px; text-align: left; ">
                <div><h1 style="text-align: center; padding-bottom: 20px; font-size: 32px; ">{{$tieude}}</h1></div>
                <div style="margin-left: 95%; height: 30px;">
                    <a href="hdngoaigiolenlop/vanban/{{$vanban}}"  class="dimgray" title="Lưu bài viết này">
                        <em class="fa fa-save fa-lg" >&nbsp;</em>
                    </a> 
                </div>
                <div style="margin-left: 5%">
                    <?php include 'hdngoaigiolenlop/vanban/'.$vanban.'.html'?>
                </div>
                </div>
            </div>
        @break

        
    @endswitch
        
    </div>
    
</div>


        




    
    


@endsection





    
    
  


