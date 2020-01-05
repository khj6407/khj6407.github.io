<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        error_reporting(E_ALL);

        ini_set("display_errors", 1);


        $conn = mysqli_connect(
            'localhost', //ip
            'root', //account
            'root1234', //password
            'testphp' //schema name
        );
        $sql = "SELECT * FROM board";
        
        $result = mysqli_query($conn, $sql);
    

       while($row = mysqli_fetch_array($result)){
            echo $row['b_id'];
            echo $row['b_title'];
            echo $row['b_content'];
            echo $row['b_createAt'];
            echo "<br> <br>";
       }
    ?>
</body>
</html>