<template>
  <div>

    <div>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <el-table
          :data="list"
          style="width: 100%">
          <el-table-column
            prop="basic"
            label="基本工资"
            width="180">
          </el-table-column>
          <el-table-column
            prop="performance"
            label="绩效奖金"
            width="180">
          </el-table-column>
          <el-table-column
            prop="wage"
            label="罚金">
          </el-table-column>
          <el-table-column
            prop="insuranceSalary"
            label="五险一金">
          </el-table-column>
          <el-table-column
            prop="permitTime"
            label="下发时间">
          </el-table-column>
          <el-table-column
            prop="finnalSalary"
            label="实发薪资">
          </el-table-column>

        </el-table>

      </ul>

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
        list:[],
        userNo:""

      }
    },
    beforeCreate() {
      this.userNo=storage.get("userNo").userNo;
      console.log(storage.get("userNo"))
      this.axios.get(ApiPath.mySalary,{params:{userNo:this.userNo}}).then((resp)=>{

        this.list=resp.data.data
        console.log(resp.data.data)

      },(err)=>{

      })
    },
    methods: {
      loadMore() {
        // this.loading = true;
        // setTimeout(() => {
        //   let last = this.list[this.list.length - 1];
        //   for (let i = 1; i <= 10; i++) {
        //     this.list.push(last + i);
        //   }
        //   this.loading = false;
        // }, 2500);
      }
    },
    components:{
      Main
    },

  };
</script>

<style>



</style>
