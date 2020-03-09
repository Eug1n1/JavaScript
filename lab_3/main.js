function first(){
    NumArray = new Array();
    document.write('<body style="color: red; font-family: Ariel, sans-serif">')
    NumArray[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
    NumArray[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
    NumArray[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    NumArray[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);


    for(i = 0; i < NumArray.length; i++){
        document.writeln(`NumArray[${i}] = ` + NumArray[i].toFixed(1) + '<br>')
    }

    min = NumArray[0];
    max = NumArray[0];
    maxInd = 0;
    minInd = 0;
    for(i = 0; i < NumArray.length; i++){
        if(NumArray[i] > max){
            max = NumArray[i];
            maxInd = i;
        }
        if(NumArray[i] < min){
            min = NumArray[i];
            minInd = i;
        }
    }
    document.writeln(`<p class="main"> max = NumArray[${maxInd}] = ` + max.toFixed(1) + '</p>')
    document.writeln(`<p class="main"> min = NumArray[${minInd}] = ` + min.toFixed(1) + '</p>')
}

function two(){
    document.write('<body style="color: green; font-family: Ariel, sans-serif">')
    Arr = new Array('pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort')

    document.writeln('Arr = ')
    for(i = 0; i < Arr.length; i++){
        document.writeln(Arr[i] + ' ');
    }
    document.writeln('<br>');
    
    document.writeln('Arr.length = ' + Arr.length);

    document.writeln('<br>');

    MathArr = new Array();
    ArrayArr = new Array();

    MathInd = 0;
    ArrInd = 0;

    for (i = 0; i < Arr.length; i++){
        if(Arr[i] == 'pow' || Arr[i] == 'round' || Arr[i] == 'floor'){
            MathArr[MathInd] = Arr[i]; 
            MathInd++;
        }else{
            ArrayArr[ArrInd] = Arr[i];
            ArrInd++;
        }
    }

    MathArr.unshift('PI');
    ArrayArr.push('length');

    document.writeln('MathArr = ')
    for(i = 0; i < MathArr.length; i++){
        document.writeln(MathArr[i] + ' ');
    }
    document.writeln('<br>');
    
    document.writeln('MathArr.length = ' + MathArr.length);

    document.writeln('<br>');

    document.writeln('ArrayArr = ')
    for(i = 0; i < ArrayArr.length; i++){
        document.writeln(ArrayArr[i] + ' ');
    }
    document.writeln('<br>');

    document.writeln('ArrayArr.length = ' + ArrayArr.length)
}

function three(){
    document.write('<body style="color: blue; font-family: Ariel, sans-serif">')
    str = new String('Shumskiy Evgeniy Sergeevich');

    document.write(str + '<br>');

    document.write(str.toUpperCase() + '<br>');
    document.write(str.toLowerCase() + '<br>');

    document.write(str.toLowerCase().concat(str.toUpperCase()) + '<br>');

    document.write(str.replace('Shumskiy Evgeniy Sergeevich', 'FIO') + '<br>');
}

function finale(){
    document.write('<body style="color: yellow; font-family: Ariel, sans-serif; background-color: black;">')
    date = new Date();
    document.write('<table border="1px" style="box-shadow: 10px 10px 50px white"><tr><td>Год</td><td>' + date.getFullYear() + '</td></tr>');
    document.write('<tr><td>Месяц</td><td>' + date.getMonth() + '</td></tr>');
    document.write('<tr><td>День</td><td>' + date.getDay() + '</td></tr>');
    document.write('<tr><td>Час</td><td>' + date.getHours() + '</td></tr>');
    document.write('<tr><td>Минуты</td><td>' + date.getMinutes() + '</td></tr>');
    document.write('<tr><td>Секунды</td><td>' + date.getSeconds() + '</td></tr>');
}