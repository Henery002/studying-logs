<?php
$bookList = [];
$bookList[] = ['name'=>'西游记','price'=>35.5,'pubdate'=>'2015-10-25','isOnSale'=>true];
$bookList[] = ['name'=>'三国志','price'=>45.5,'pubdate'=>'2015-11-15','isOnSale'=>false];
$bookList[] = ['name'=>'红楼梦','price'=>55.5,'pubdate'=>'2015-12-12','isOnSale'=>false];

#var_dump($bookList);
?>
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
 </head>
 <body>
  <h1>数组练习</h1>
  <table border="1" width="100%">
  	<thead>
  		<tr>
  			<th>书名</th>
  			<th>单价</th>
  			<th>出版日期</th>
  			<th>是否特价</th>
  		</tr>
  	</thead>
	<tbody>
	<?php
	foreach($bookList as $book){
	  echo '<tr>';
	  echo "  <td>$book[name]</td>";
	  echo "  <td>$book[price]</td>";
	  echo "  <td>$book[pubdate]</td>";
	  
	  $msg = $book['isOnSale']?'是':'否';
	  echo "  <td>$msg</td>";

	  echo '</tr>';
	}
	?>
	</tbody>
  </table>
 </body>
</html>
