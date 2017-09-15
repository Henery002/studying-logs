<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
 </head>
 <body>
  <h1>修改书籍信息</h1>
  <?php
  //1接收客户端提交的待修改的书籍编号
  $bid = $_REQUEST['bid'];
  //2连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);
  //3提交SQL语句
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql = "SELECT * FROM dd_book WHERE bid=$bid";
  $result = mysqli_query($conn,$sql);
  //4读取一行——结果集中只有一行记录！	
  $b = mysqli_fetch_assoc($result);
  //var_dump($b);
  ?>
  <form action="8_book_update.php">
  <!-- 使用隐藏字段提交书籍的编号 -->
  <input type="hidden" name="bid" value="<?php echo $b['bid']?>">
	书名： <input name="name" value="<?php echo $b['name']?>"><br>
	价格： <input name="price" value="<?php echo $b['price']?>"><br>
	特价： <input name="isOnsale" value="<?php echo $b['isOnsale']?>"><br>
	图片： <input name="pic" value="<?php echo $b['pic']?>"><br>

	<input type="submit" value="保存修改后的信息">
  </form>
 </body>
</html>
