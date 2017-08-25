<template>
  <div id="homepage">
    <div class="title1">test-SPA</div>
    <div class="p">请利用一下相关资料完成le 基本需求</div>
    <div class="p">相关技术栈: vue2 vue-router2 vuex2 webpack2</div>

    <div class="title2">需求原型如下</div>
    <div style="width: 800px;">
      <img src="./../assets/images/test-vue.png" alt="">
    </div>

    <div class="title2">实现要求如下</div>
    <div class="quote">
      <ul class="ul">
        <li class="li">1. 可通过【配置右侧导航】或【直接修改地址栏】来控制路由</li>
        <li class="li">2. 修改用户信息 和 新增用户信息的表单是同一个页面, (提示: 可利用路由信息对象的属性来控制表单的状态)</li>
        <li class="li">3. 所有数据必须存储在store上。(提示:需要存储的信息包括, 1.列表信息,2.自己的信息,3.或其他需要补充的)</li>
        <li class="li">4. 对状态处理的操作必须按照【异步操作的规范】进行</li>
        <li class="li">5. 不考虑样式问题, 分页问题, 导航问题, 只要求实现基本数据的增删查改</li>
        <li class="li">6. 功能实现限时为5-8小时, 实现完成后, 要求能够初步理解vue生态圈的基本理念</li>
      </ul>
    </div>

    <div class="title2">项目基本目录结构介绍</div>
    <div class="quote">
      <ul class="ul">
        <li class="li">1. 前端人员目前只会操作根目录下的src文件夹, 以下说明中出现的路径, 均在src下</li>
        <li class="li">2. /config/routes 文件夹配置User的基本路径, 并将route配置加入router中</li>
        <li class="li">3. /pages/user 下完成两个页面, list 页面 + modify 页面, 和原型图对应</li>
        <li class="li">4. /vuex/modules/user/userlist.js 用来存储所有业务中会用到的状态管理操作</li>
      </ul>
    </div>

    <div class="title2">相关资料如下</div>
    <div class="quote">
      <ul class="ul">
        <li class="li">vue2官网文档: https://cn.vuejs.org/v2/guide/</li>
        <li class="li">vue-router2官网文档: https://router.vuejs.org/zh-cn/</li>
        <li class="li">vuex2官方文档: https://vuex.vuejs.org/zh-cn/index.html</li>
        <li class="li">参考博客: http://leenty.com/tags/vuejs/</li>
        <li class="li">参考资料1: https://ohovav7hg.qnssl.com/sonic/Vue2.0Base-4.html?t=1500601594</li>
        <li class="li">参考资料2: https://ohovav7hg.qnssl.com/sonic/Vue2.0Base-5.html?t=1500601622</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  #homepage {
    padding: 20px 25px;
  }

  .title1 {
    color: #10a3ee;
    font-size: 1.7em;
    line-height: 1.6em;
    margin: .8em 0 .6em 0;
  }

  .title2 {
    color: #10a3ee;
    font-size: 1.45em;
    line-height: 1.5em;
    margin: 1.5em 0 .8em 0;
  }

  .title3 {
    color: #10a3ee;
    font-size: 1.25em;
    line-height: 1.5em;
    margin: 1.5em 0 .8em 0;
  }

  .p {
    word-wrap: break-word;
    margin: 1.5em 0;
    color: #3c3c3c;
    line-height: 1.8;
  }

  .b {
    color: #000000;
    font-weight: bold;
  }

  .quote {
    box-sizing: border-box;
    margin: 1.6em 0;
    padding: 0 0 0 1.2em;
    border-left: 0.4em solid #dddddd;
    color: #888888;
    min-height: 20px;
    line-height: 1.8;
  }

  .img {
    max-width: 98%;
    margin: 0.8em auto 0.8em auto;
    border-radius: 5px;
  }

  .ul {
    padding: 5px 25px;
    margin: 0;
    list-style-type: disc;
  }

  .li {
    color: #3c3c3c;
    font-size: 16px;
  }
</style>

<script>
  export default{
    data() {
      return {};
    },
  };
</script>
