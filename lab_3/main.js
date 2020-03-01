
function first(){
    NumArray = new Array();

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
    Arr = new Array('pow', 'pop', 'push', 'shift', 'tound', 'floor', 'sline', 'sort')
}