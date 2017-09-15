<table width='500' height='20' border='1'>
	<thead>
		<tr>
			<td>书名</td>
			<td>单价</td>
			<td>数量</td>
			<td>出版日期</td>
			<td>是否特价</td>
		</tr>
	</thead>
	<tbody>
		<?php
			foreach($bookList as $book){
				echo '<tr>';
				echo "<td>$book[bName]</td>";
				echo "<td>$book[price]</td>";
				echo "<td>$book[amount]</td>";		//两种方式
				echo "<td>".$book['pDate']."</td>";		//
				$msg = $book['isOnSale']?'是':'否';
				echo "<td>".$msg."</td>";
				echo '</tr>';
			}
		?>
	</tbody>
</table>
<?php
//练习：创建PHP脚本文件：
//创建一个空数组：$bookList
$book = [];
$bookList[] = [
	'bName'  => '数据结构',
	'price'  => '35.50', 
	'amount' => '100', 
	'pDate'  => '2012-10-10', 
	'isOnSale' => false
];
$bookList[] = [
	'bName'  => '数据结构',
	'price'  => '35.50', 
	'amount' => '100', 
	'pDate'  => '2012-10-10', 
	'isOnSale' => false
];
$bookList[] = [
	'bName'  => '操作系统',
	'price'  => '40.50', 
	'amount' => '60', 
	'pDate'  => '2015-10-10', 
	'isOnSale' => true	
];
var_dump(bookList);
//使用foreach循环，把上面三本书籍信息，输出在一个TABLE中。

?>