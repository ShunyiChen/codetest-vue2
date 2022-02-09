<template>
  <el-form :model="form" 
  status-icon 
  :rules="rules" 
  ref="form" 
  label-width="100px"
   class="signin-container">
      
      <h1 class="signin-title">
        系统登录
      </h1>
      
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username">
        <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <br>
 
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password">
        <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item class="signin-submit">
        <el-button type="primary" @click="handleSignin" class="signin-submit">登录</el-button>
      </el-form-item>
  </el-form>

 
</template>

<script>
import {signIn} from '../../api/user'
 
export default {
    name: 'SignIn',
    data() {
        return {
          form: {

          },
          rules: {
            username: [
              {required: true, message: "请输入用户名", trigger: "blur"},
              {
                min: 3,
                message: "用户名长度不能小于3位",
                trigger: "blur"
              }
            ],
            password: [
              {required: true, message: "请输入密码", trigger: "blur"},
              {
                min: 3,
                message: "用户名长度不能小于3位",
                trigger: "blur"
              }
            ]
          }
        }
    },
    mounted() {
      // this.$http.get('/gekki')
      // .then(function(response){
      //   console.log(response)
      // }).catch(function(err) {
      //   console.log("输出错误：",err)
      // })
      signIn().then(res => {
        console.log("res=",res)
      })
    },
    methods: {
      handleSignin() {
        this.$router.push({ path: '/main/dashboard', query: this.otherQuery })
      }
    },
    
}
</script>

<style scoped>
  .signin-container {
     border-radius: 15px;
     background-clip: padding-box;
     margin: 180px auto;
     width: 350px;
     padding: 35px 35px 15px 35px;
     background-color: aliceblue;
     border: 1px solid #eaeaea;
     box-shadow: 0 0 25px #cac6c6;
  }
  .signin-title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>