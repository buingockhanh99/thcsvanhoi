<?php

namespace App\Http;
use Exception;

class chuyendoihtml
{
    public function chuyendoi($link,$file)
{
  require_once '../vendor/autoload.php';
  $filename = $file->getClientOriginalName();
  $phpWord = new \PhpOffice\PhpWord\PhpWord();

  $objReader =  \PhpOffice\PhpWord\IOFactory::createReader('Word2007');
  $phpWord = $objReader->load($file);
  $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'HTML');
  $objWriter->save($link.'/'.$filename.'.html');
}
}
?>