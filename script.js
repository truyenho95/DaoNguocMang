var x = prompt('Mời nhập mảng');
var arr = x.split(',');

document.write('Mảng bạn nhập vào là: <br>');
for (var i=0; i<arr.length; i++)
  document.write((i===arr.length-1) ? (arr[i]+'<br>') : (arr[i]+', '));

var first = 0;
var last = arr.length - 1;
while (first < last) {
  var b = arr[first];
  arr[first] = arr[last];
  arr[last] = b;
  first++;
  last--;
}

document.write('Mảng sau khi đảo ngược là: ');
for (var i=0; i<arr.length; i++)
  document.write((i===arr.length-1) ? (arr[i]) : (arr[i]+', '));