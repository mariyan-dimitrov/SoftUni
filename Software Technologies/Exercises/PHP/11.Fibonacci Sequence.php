<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />

    <input type= "submit"/>
</form>
<?php
if(isset($_GET['num']))
{
    $num = intval($_GET['num']);
    $numbers = array($num);
    $numbers[0]=1;
    $numbers[1]=1;
    $sum=0;
    for($i=2;$i<$num;$i++)
    {
        $numbers[$i] = $numbers[$i-2]+$numbers[$i-1];
    }
    echo implode(" ",$numbers );

}
?>
</body>
</html>