<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <p class="lead text-muted">오늘의 여행 어쩌구</p>
        <p>
            <input type="text" placeholder="검색어를 입력하세요."/>
        </p>
      </div>
    </div>


<b-table-simple hover small caption-top responsive>

  <colgroup>
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
  </colgroup>
  <b-thead head-variant="dark">
    <b-tr>
      <b-th>제목</b-th>
      <b-th>내용</b-th>
      <b-th>여행사</b-th>
      <b-th>여행사 여행 이름</b-th>
      <b-th>작성자</b-th>
      <b-th>작성일</b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr @click="articleDetailClick">
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
   <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
     <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
     <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
     <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
     <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
         <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
         <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
         <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
    <b-tr>
      <b-th>Belgium</b-th>
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td>23</b-td>
    </b-tr>
  </b-tbody>
  <button @click="writer">글 쓰기</button>
</b-table-simple>
  </section>
  <Pagination :pageListItem="pageListItem"></Pagination>
</template>
<script>
import Pagination from '../layout/Pagination';

export default {
	data: function () {
    return {
      pageListItem : 9
    }
  },
  components: {
    Pagination
  },
  methods: {
    articleDetailClick() {
      this.$router.push("/articleDetail");
    },
    writer(){
        this.$router.push("/articleWrite");
    }
  }

}
</script>