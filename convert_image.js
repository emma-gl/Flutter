function toBase64(file){
  //const fileInput = document.getElementById('file-input');

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    try {
      const base64String = await convertImageToBase64(file);
      console.log(base64String);
      return base64String;
    } catch (error) {
      console.error(error);
    }
  });
}

async function fileToBase64(file) {
  //alt function (using promises) https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
}

function base64ToImage(base64String) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = base64String;
  });
}