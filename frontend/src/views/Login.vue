<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="" style="">
        <div class="card-body card-custom">
            <img class="nav-logo-l" alt="Vue logo" src="../assets/images/kotakode-logo.png" style="">
          <form>
            <div class="form-group plus-margin-20">
              <label for="email" class="font-medium">Email / Username</label>
              <input type="email" class="form-control input-custom" placeholder="">
            </div>
            <div class="form-group plus-margin-20">
              <label for="password" class="font-medium">Password</label>
              <input type="password" class="form-control input-custom input-custom2" placeholder="">
            </div>
            <div class="form-group plus-margin-20">
              <label for="password" class="lupa-password">Lupa Password?</label>
            </div>
            <button type="submit" class="btn btn-primary button1">Masuk</button>
          </form>
          <div class="">
              <label class="masuk-dengan">atau masuk dengan</label>
          </div>
          <div class="">
              <label class="belum-daftar">Belum Memiliki Akun? Daftar</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.belum-daftar{
    width: 100%; 
    text-align:center;
    font-weight: 300;
}
.masuk-dengan{
    width: 100%; 
    text-align:center;
    font-weight: 300;
}
.card-custom{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* display: flex; */
}
.nav-logo-l{
    width: 50%;
    margin-top: 100px;
    margin-bottom: 10px;
}
.button1 {
    width: 100%;
    height: 60px;
    background-color: #0f8346;
    border: 0;
    border-radius: 11px;
    font-family: Quicksand;
    font-weight: 700;
}
.input-custom{
    color: rgb(51, 51, 51);
    width: 100%;
    border: 2px solid rgb(241, 242, 244);
    height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    margin-top: 8px;
    padding-left: 10px;
    border-radius: 11px;
    margin-bottom: 5px;
}
.plus-margin-20{
    margin-top: 20px;
}
.font-medium{
    font-weight: bolder;
}
.lupa-password{
    color: #0f8346;
    width: 300px; 
    text-align:right;
    float: right;
    font-weight: 500;
}
label{
    color: rgb(117, 117, 117);
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    font-family: Quicksand;
}
body{
    margin: 0;
    font-family: Quicksand,sans-serif;
    color: #191919;
    background-color: #fefefe;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --color-primary: #13a458;
    --color-primary-light: #42b679;
    --color-primary-dark: #0f8346;
    --color-muted: #425a70;
    --color-accepted: #d0edde;
    --color-danger: #cf6f6f;
    --color-accent: #f9813a;
}
</style>