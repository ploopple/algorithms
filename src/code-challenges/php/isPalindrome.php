
<?php 
function isPalindrome($x) {
  $xToString = strval($x);
  $xToStringReversed = "";
  
  for($i = strlen($xToString) - 1; $i >= 0;$i--){
      $xToStringReversed =  "$xToStringReversed"."$xToString[$i]";
  }
  return $xToStringReversed == $xToString ? 1 : 0;
}
print isPalindrome(-121)
?>
