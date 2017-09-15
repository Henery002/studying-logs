<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <style>
	img {
		width: 80px;
	}	
  </style>	
 </head>
 <body>
  <h1>查询数据库中的所有书籍</h1>
  <table border="1" width="100%">
	<thead>
		<tr>
			<th>编号</th>
			<th>书名</th>
			<th>图片</th>
			<th>价格</th>
			<th>日期</th>
			<th>特价</th>
			<th>操作</th>
		</tr>
	</thead>
	<tbody>
	<?php
	//1 连接数据库服务器
	$conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);
	//2 提交SQL命令
	$sql = "SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql = "SELECT * FROM dd_book";
	$result = mysqli_query($conn,$sql);
	//3 查看执行结果
	if($result){ //查询结果的描述对象
		while(($b=mysqli_fetch_assoc($result))!==null){
			echo '<tr>';
			echo "	<td>$b[bid]</td>";
			echo "	<td>$b[name]</td>";
			echo "	<td><img src='$b[pic]'></td>";
			echo "	<td>￥$b[price]</td>";
			echo "	<td>$b[birthday]</td>";
			$os = $b['isOnsale']?'是':'否';
			echo "	<td>$os</td>";
			echo "	<td>";
			echo "	 <a href='4_book_del.php?bid=$b[bid]'>删除</a><br>";
			echo "	 <a href='8_book_select_for_update.php?bid=$b[bid]'>修改</a>";
			echo "	</td>";
			echo '</tr>';
		}
	}else {
	  echo "<tr><td colspan='7'>查询失败！请查看SQL：$sql</td></tr>";
	}
	?>
	</tbody>
  </table>
  <hr>
  <a href="3_book_add.html">添加新书籍</a>
  
  <script src="js/jquery-1.11.3.js">
  </script>
  <script>
  $('table tbody td:nth-child(5)').each(function(i,td){
	var v = td.innerHTML;
	var d = new Date(parseInt(v));
	console.log(d);
	var s = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
	td.innerHTML = s;
  });
  </script>
 </body>
</html>
