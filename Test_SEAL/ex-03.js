//Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:

let replaceSize = function (url, widthRatio, heightRatio) {
   
        var regexPattern = /(\/width\/)(\d+)(\/height\/)(\d+)/;
        var newUrl = url.replace(regexPattern, "/width/" + widthRatio + "/height/" + heightRatio);
      
        return newUrl;
      }
      
      var imageUrl = "https://example.com/images/width/500/height/300/image.jpg";
      var newImageUrl = transformImageUrl(imageUrl, 800, 600);
      
      console.log("URL mới: " + newImageUrl);
      

 