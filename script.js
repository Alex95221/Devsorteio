function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  if (min >= max) {
    alert("Minimum value cannot be greater than maximum value.");
    return;
  } else {const result = Math.floor(
    Math.random() * (max - min + 1) + min
  );
  alert(result);
}
  
}

