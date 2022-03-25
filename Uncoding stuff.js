function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let rot = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let arr = str.split("");
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (/[A-Z]/ig.test(arr[i])){ 
        newArr.push(rot.charAt(abc.indexOf(arr[i])))
      } else {
        newArr.push(arr[i])
      }
    }
    console.log(newArr);
    return newArr.join("");
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");