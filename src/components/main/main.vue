<template>

  <div>
    <div>

    </div>

    <div >
      <mt-tabbar v-model="selected">
        <mt-tab-item id="salary">
          <img slot="icon" src="../../assets/100x100.png">
          上月工资
        </mt-tab-item>
        <mt-tab-item id="leaveRecord">
          <img slot="icon" src="../../assets/100x100.png">
          请假记录
        </mt-tab-item>
        <mt-tab-item id="attendRecord">
          <img slot="icon" src="../../assets/100x100.png">
          缺勤记录
        </mt-tab-item>
        <mt-tab-item id="mySelf">
          <img slot="icon" src="../../assets/100x100.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>

</template>

<script>
  import ApiPath from '@/router/ApiRequestPath.js'
  import storage from "@/router/storage.js"
  export default{
    name: 'page-tabbar',
    data() {
      return {
        selected: '',
      };
    },
    updated: function () {
      console.log(this.selected)
      console.log(ApiPath.mySalary)
      if(this.selected=="salary"){
        this.$router.push({
          path:'/salary'

        })
      }
      if(this.selected=="leaveRecord"){
        this.$router.push({
          path:'/leave'
        })
      }
      if(this.selected=="attendRecord"){
        this.$router.push({
          path:'/attendances'
        })
      }
      if(this.selected=="mySelf"){
        this.$router.push({
          path:'/baseinfoApp'
        })
      }


    }

  }

</script>

<style>
</style>
