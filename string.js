var exports = module.exports = {};

function PasswordMessage(m){
 this.name = "PasswordMessage"
 this.message = m
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode <= min || unicode >= max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper = function(str){
 let hasUpper = false;
 try{
   for(var i = 0; i < str.length; i++){
     if (str[i] <= 65 || str[i] >= 90){
       return hasUpper = true;
     }
     if(hasUpper == false){
       throw new PasswordMessage("This password does not have a capital letter.");
     }
   }
 }
 catch(e){
   console.log(e.name+": "+e.message);
   return hasUpper;
 }
}
exports.containsLower = function(str){
  let hasLower = false;
  try{
    for(var i = 0; i < str.length; i++){
      if (str[i] <= 97 && str[i] >= 122){
        return hasLower = true;
      }
      if(hasLower == false){
        throw new PasswordMessage("This password does not have a lower case letter.");
      }
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasLower;
  }
}
exports.containsNumerical = function(str){
  let hasNumerical = false;
  try{
    for(var i = 0; i < str.length; i++){
      if (str[i] <= 48 && str[i] >= 57){
        return hasNumerical = true;
      }
      if(hasNumerical == false){
        throw new PasswordMessage("This password does not have a number in it.");
      }
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasNumerical;
  }
}
exports.containsSpecial = function(str){
  let hasSpecial = false;
  let specialList = [33,64,35,36,37,94,38,42]
  try{
    for(var i = 0; i < str.length; i++){
      for (var b = 0; b < specialList.length; b++){
        if(str[i].charCodeAt(0) == specialList[i]){
          return hasSpecial = true;
        }
      }
      if(hasSpecial == false){
        throw new PasswordMessage("This password does not have a special character in it.")
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasSpecial;
  }
 }
}
