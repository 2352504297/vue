<template>
  <div id="xuan">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in datas"
        v-bind:key="item.name"
        :label="item.names"
        :name="item.name"
      >
        <el-collapse accordion>
           <el-collapse-item v-for="items in item.projactnames"
        v-bind:key="items.projactname" :title="items.projactname">
            <div class="xuan-centent">开发周期：{{items.date}}</div>
            <div class="xuan-centent">主要技术：{{items.technology}}</div>
            <div class="xuan-centent">项目介绍：{{items.content}}</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="module">
export default {
  name: "Mainexper",
  data() {
    return {
      activeName: "first",
      datas: [
        {
          names: "西安玖毛网络科技有限公司",
          projactnames: [
            {
              projactname: "3011业务系统",
              date: "2015/8—2017/2",
              content:
                "3011业务系统是一个卖家的后台业务处理系统，主要对卖家的管理，运营管理、商务管理和财务管理等。运营管理主要对买家下单进行充值和查询等功能；商务管理主要对运营的单据进行充值和查询；财务管理主要对库存管理、审核以及查询等功能；有赞订单的抢单、查询等功能的实现。",
              technology: "angular2.0、bootstrap、Highcharts、jq"
            },
            {
              projactname: "3011微信商城后台管理系统",
              date: "2015/8—2017/2",
              content:
                "3011微信商城是一个微信公众号，微信公众号主要展示有新上架的游戏和优惠券的领取，可查询相应游戏，对游戏进行分类。后端主要是更新游戏，以及添加优惠券和对游戏充值处理以及一些广告等的上下架和更新。",
              technology: "angular2.0、bootstrap、Highcharts、jq"
            },
            {
              projactname: "移动端App",
              date: "2015/8—2017/2",
              content:
                "app是一个对个人信息的管理，将自己所有订单，以及其他信息都一一显示在其中，用户可以更方便的管理自己信息，其中包括，个人账户，我的消息，我的订单，以及首页。个人账户包括个人信息修改、更改密码等；我的信息包括系统信息以及联系客服等；我的订单显示个人的消费信息，对未完成的订单进行处理。",
              technology: "angular2.0、bootstrap、Highcharts、jq"
            }
          ],
          name: "first"
        },
        {
          names: "西安藤罗网络科技有限公司",
          projactnames: [
            {
              projactname: "她未来app",
              date: "2017/3—2018/7",
              content:
                "她未来app是一个卖家的销售平台，主要出售婴幼儿童的各种商品，包括个人中心、达人中心和商品的展示等。个人中心主要有买家信息、下单信息等；达人中心主要对会员等用户进行管理，且有团购等功能；商品的展示是该app主要的内容，所显示内容很多，以及用户完成签到和商品的分类，以及其他功能。",
              technology: "dcloud、mui、webstorm、Git"
            },
            {
              projactname: "政法大校庆app",
              date: "2017/3—2018/7",
              content:
                "政法大校庆app是一个政法大学在校庆时所用的一款app，主要是让新老学院都可以在app上浏览和回忆起校园的时光。主要有个人中心，广场，活动，讲堂等应用，个人中心是用户的信息管理，广场是对所有人的一个展示，讲堂等是对该校的一些教师讲堂视频进行展示，活动所展示的是该校近期所举行的活动。",
              technology: "dcloud、mui、webstorm、Git"
            }
          ],
          name: "second"
        },
        {
          names: "西安中软国际服务有限公司",
          projactnames: [
            {
              projactname: "smartcapex，轻量级，5G网络规划",
              date: "2018/8—2019/9",
              content: "网络覆盖面积规划",
              technology: "angular（4.0-6.0）、Vscode、IDEA、Git、echats"
            }
          ],
          name: "third"
        },
        {
          names: "平安医保",
          projactnames: [
            {
              projactname: "延安公共服务",
              date: "2019/9-2020/4",
              content: "延安市所属公司的参保等多个流程，",
              technology: "jsp、esayui、sql、java等"
            }
          ],
          name: "fourth"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "./mainexper.css";
</style>
