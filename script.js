function check(form) {
    if (form.userid.value == "admin" && form.pwd.value == "admin") {
      return true;
    } else {
      alert("Incorrect Password or Username")
      return false;
    }
  }