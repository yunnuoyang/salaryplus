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
            prop="start"
            label="开始时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="end"
            label="终止时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ANo"
            label="编号"
            width="180">
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
      this.axios.get(ApiPath.attendances,{params:{eno:this.userNo}}).then((resp)=>{

        this.list=resp.data.data

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
