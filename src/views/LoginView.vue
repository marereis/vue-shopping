<script setup>
import { ref, reactive, onMounted } from "vue";
import api from "../Services/api.js";

const user = reactive({
  email: "john@gmail.com",
  password: "m38rmF$",
});

async function login() {
  try {
    const { data } = await api.post("/users", user);
    console.log(data);
  } catch (error) {
    console.log(error?.response?.data);
  }

  // api
  //   .get("/users")
  //   .then((result) => {
  //     console.log(result.data);
  //   })
  //   .catch((err) => {
  //     console.log("error");
  //   });
}
</script>

<template>
  <section>
    <div class="content-login">
      <div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
          width="450px"
        />
      </div>

      <div>
        <form @submit.prevent="login">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              class="form-control form-control-lg"
              placeholder="Enter a valid email address"
              v-model="user.email"
            />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form3Example4"
              class="form-control form-control-lg"
              placeholder="Enter password"
              v-model="user.password"
            />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
section{
  width: 100%;
  display: flex ;
  height: ;  
}

input[type="text"],
input[type="password"],
input[type="email"]{
  width: 350px;
  height: 35px;
}
.content-login {
  display: flex ;
  flex-flow: row wrap;
  justify-content: space-evenly ;
  align-self: center;
  padding: 100px;
  width: 95%;
  height: 95%; 
}
.content-login img {
  width: 300px;
}

@media screen and (max-width:700px){
    :root{
     font-size: 80%;
    }   
    .content-login {
  display: flex ;
  flex-flow: row wrap;
  justify-content: space-evenly ;
  align-self: center;
  padding: 10px;
  width: 100%;
  height: 100%; 
}
.content-login img {
  width: 200px;
  margin: 40px;
}
}
</style>