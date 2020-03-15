<template>
  <div>
    <div class="page-field" v-if="NotDestory">
      <mt-header fixed title="工资管理app"></mt-header>
      <div class="page-part" style="margin-top: 40px;">
        <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }" v-model="loginName"  ></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"  v-model="password"></mt-field>
        <mt-button type="primary" @click.native="dologin()">登录</mt-button>
        <mt-spinner type="triple-bounce" v-if="loginstatus" :size="60"></mt-spinner>
      </div>
    </div>
  </div>
</template>

<script>

  import ApiPath from '@/router/ApiRequestPath.js'
  import storage from "@/router/storage.js"
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-field',
    data(){
      return{	loginName:"",
        password:"",
        NotDestory:true,
        loginstatus:false
      }
    },
    methods:{
      dologin(){
        this.loginstatus=true
        console.log("dologin方法")
        console.log(this.password+"=="+this.loginName)
        var api=ApiPath.login
        this.axios.get(api,{params:{loginName:this.loginName,password:this.password}}).then((resp)=>{
          var tag=resp.data.tag;
          if(tag==3){
            //跳转路由
            this.$router.push({
              path:"/main"
            })
          }else{
            this.loginstatus=false
            let  instance= Toast({
              message:resp.data.info,
              className:"toasts"
            });
            setTimeout(() => {
              instance.close();
            }, 2000);
          }

          console.log(tag)
        },(err)=>{

        })
      }
    }

    ,destroyed() {
      this.axios.get(ApiPath.getSession).then((resp)=>{
        storage.set("userNo",{userNo:resp.data.userNo})
        console.log(resp.data.userNo)
      },(err)=>{
        console.log("没有拿到服务器端的session数据")
      })
    }
  };
</script>

<style lang="css">
  .toasts {
    background: red ;
    font-style: normal;
    font-size: large;
  }
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

      & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
