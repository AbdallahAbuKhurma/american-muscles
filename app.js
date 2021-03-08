var order = prompt ("which car do you prefer charger or corvette?")

var choice = function() {
    while(order != 'charger' && order != 'corvette')
{
    order = prompt  ("which car do you prefer charger or corvette?")

}
}

choice();

var itemorder = '';
if(order == 'charger')
{
    itemorder = '<img src="images/car1.png" />';
}
else
{
    itemorder = '<img src="images/car2.png" />';
}

var numofcars = prompt("How many car would you like to see?")
var result = '';
for(var i = 0;i < numofcars; i++)
{
    result = result + itemorder
}


document.write(result);


