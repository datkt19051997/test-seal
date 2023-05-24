// Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arr = [1, 25, 7, -7, -3, 12, -22, 0];
  var sortedArr = bubbleSort(arr);
  
  console.log("Dãy số sau khi sắp xếp: " + sortedArr);


// Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)

function absoluteSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (Math.abs(arr[j]) > Math.abs(arr[j + 1]) || (Math.abs(arr[j]) === Math.abs(arr[j + 1]) && arr[j] < arr[j + 1])) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arr = [1, 25, 7, -7, -3, 12, -22, 0];
  var sortedArr = absoluteSort(arr);
  
  console.log("Dãy số sau khi sắp xếp: " + sortedArr);
  