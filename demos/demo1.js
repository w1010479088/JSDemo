var mNum = 1;
{
    var num1 = 1, num2 = 2, num3 = 3;
    console.log(num1, num2, num3, mNum, s1);
}
{
    {
        var s1, s2, s3;
        s1 = 'Hello';
        s2 = 'World';
        s3 = '!';
        console.log(s1, s2, s3, num3);
        console.log(num3);
    }

    // var for while class
    {
        var a = 1;
        var b = 2;
        var temp = a;
        a = b;
        b = temp;
        console.log(a, b);
    }

    {
        var a1 = 3;
        var b1 = 4;
        a1 = a1 + b1;
        b1 = a1 - b1;
        a1 = a1 - b1;
        console.log(a1, b1)
    }

    {
        var age = 16;
        var name = '大俊子';
        age = 0xD;
        var sum = 5 + '0';

        console.log(isNaN(sum), isNaN(name))
    }

    {
        var msg = '我\'是\'\"大俊\"子';
        console.log(msg);
    }
}