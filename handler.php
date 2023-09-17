<?php

$name = $_POST['first'];

$names = array("mary", "maria", "marcello",
    "mark", "max", "mike");
$name = strtolower($name);
$response=[];
if ($name=='')die();

foreach($names as $n)
{
    if(substr($n,0,strlen($name)) === $name)
    {
        $response[] = $n;
    }
}
var_dump($response);
echo
  '<table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>';
foreach ($response as $res){
    echo "<td>{$res}</td>
          <td>Otto</td>
          <td>@mdo</td>
          </tr>";
}
echo ' </tbody>
</table>';

