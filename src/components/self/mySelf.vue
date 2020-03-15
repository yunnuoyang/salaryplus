<template>
  <div>

    <div>


      <mt-field label="用户名" placeholder="请输入用户名" v-model="userName">{{userName}}</mt-field>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="loginName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
      <mt-field label="数字" placeholder="请输入数字" type="number" v-model="workAge"></mt-field>
      <mt-button @click.native="sheetVisible = true" size="large">退出</mt-button>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>


    <Main></Main>
  </div>


</template>

<script>
  import Main from "@/components/main/main.vue"
  import ApiPath from '@/router/ApiRequestPath.js'
  import storage from "@/router/storage.js"
  export default {
    data() {
      return {
        sheetVisible: false,
        actions: [],
        userName:"",
        loginName:"",
        password:"",
        email:"",
        workAge:"",
        tel:""


      }
    },
    beforeCreate() {
      this.userNo=storage.get("userNo").userNo;
      console.log(storage.get("userNo"))
      this.axios.get(ApiPath.selfInfo,{params:{userNo:this.userNo}}).then((resp)=>{
        this.userName=resp.data.realName
        this.loginName=resp.data.loginName
        this.password=resp.data.password
        this.email=resp.data.email
        this.workAge=resp.data.workAge
        this.tel=resp.data.tel

      },(err)=>{

      })
    },
    methods:{
      logOut(){
        storage.remove("userNo")
        this.$router.push({
          path:'/login'

        })
      }
    },
    mounted() {
      this.actions = [{
        name: '确认退出',
        method: this.logOut
      }];
    },
    components:{
      Main
    },

  };


</script>

<style>
</style>
