<template>
  <div class="post-box">
    <span class="post-views">{{ viwes }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <div class="post-content">{{ content }}</div>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-sm-6">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["viwes", "title", "date", "content", "author", "category"],
  name: "ArticalPost"
};
</script>

<style lang="scss" scope>
.post-box {
  padding: 15px;
  background-color: rgb(247, 244, 244);
  box-shadow: rgb(184, 184, 184);
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4ca;
    border-radius: 5px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #777;
    font-size: 12px;
  }
  .post-content {
    line-height: 1.7;
    color: #666;
    margin-bottom: 15px;
  }
  .post-author {
    background-color: #494c57;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
  }
  .post-category {
    background-color: #df40aa;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
  }
}
</style>
