<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="pagination" >
    <b-card style="justify-content: center;">
      <div class="overflow-auto">
        <div class="mt-3">
          <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" @page-click="pageClick"></b-pagination>
        </div>
      </div>
    </b-card>
  <slot/>
</div>
</template>


<style>

.card {
  --bs-card-border-width:0px !important
}

.pagination {
  justify-content : center;
}

</style>

<script>
export default {
	data: function () {
    return {
    ex4CurrentPage:1,
    ex4Rows:200
    }
  },
  methods: {
    pageClick: function (button, page){ 
         this.ex4CurrentPage = page;
      // this.getNoticeListByPage(page);
			},
			// getNoticeListByPage: function (page) {
      //           var limit = 20;
      //           var offset = (page - 1) * limit;

      //           this.loading = true;
      //           this.$http
      //               .get('/notice/list' + `?offset=${offset}&limit=${limit}`)
      //               .then(response => {
      //                   this.items = response.data;
      //               })
      //               .catch(error => {
      //                   console.log(error);
      //               })
      //               .finally(() => this.loading = false);
			// }

  }

}

</script>