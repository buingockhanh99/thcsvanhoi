<?php

namespace App\Http;
class WordPHP
{
	function text_read_word($input_file){	
		$word_strip_texts = ''; 
			$found_texts = ''; 	
	   if(!$input_file || !file_exists($input_file)) return false;	
	   $zip = zip_open($input_file);	
	   if (!$zip || is_numeric($zip)) return false;
	   while ($zip_entry = zip_read($zip)) {
		   if (zip_entry_open($zip, $zip_entry) == FALSE) continue;
		   if (zip_entry_name($zip_entry) != "word/document.xml") continue;
		   $found_texts = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));	
		   zip_entry_close($zip_entry);
	   }
	   zip_close($zip);
	   $found_texts = str_replace('</w:r></w:p></w:tc><w:tc>', " ", $found_texts);
	   $found_texts = str_replace('</w:r></w:p>', "\r\n", $found_texts);
	   $word_strip_texts = nl2br(strip_tags($found_texts,''));
	   return $word_strip_texts;
   }


   function read_file_docx($filename){  
	$striped_content = '';  
	$content = '';  
	if(!$filename || !file_exists($filename)) return false;  
	$zip = zip_open($filename);  
	if (!$zip || is_numeric($zip)) return false;  
	while ($zip_entry = zip_read($zip)) {  
	if (zip_entry_open($zip, $zip_entry) == FALSE) continue;  
	if (zip_entry_name($zip_entry) != "word/document.xml") continue;  
	$content .= zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));  
	zip_entry_close($zip_entry);  
	}// end while  
	zip_close($zip);  
	$content = str_replace('</w:r></w:p></w:tc><w:tc>', " ", $content);  
	$content = str_replace('</w:r></w:p>', "\r\n", $content);  
	$striped_content = strip_tags($content);  
	return $striped_content;  
}  



}

?>