<style lang="less" scoped>
 .hello{
   position: fixed;
   top: 70px;
   bottom: 20px;
   right: 20px;
   background: hotpink;
   left: 320px;
 }
.eca{
  width: 100%;
  height: 600px;
}
</style>
<template>
  <div class="hello">
    <div id="eca" class="eca"></div>
  </div>
</template>

<script>
import chongqing from "../../node_modules/echarts/map/json/province/chongqing.json";
const echarts = require("echarts");
echarts.registerMap("重庆", chongqing);
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      echart:null
    }
  },
  beforeCreate(){

  },
  created(){
    
  },
  methods: {
  },
  mounted(){
    var data = {"重庆市":[106.55, 29.57],"万州":[ 108.4, 30.82],}
    var dataValue = [{"name":"重庆市","value":[106.55, 29.57,480]},{"name":"万州","value":[108.4, 30.82,480]},]
    this.echart= echarts.init(document.getElementById("eca"));
    var chongqingMapOption ={
      backgroundColor: '#020925',
      //值域选择,值域范围
      //提示框
      tooltip: {
        trigger: 'item', //触发类型，默认数据触发
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        formatter: function (params) {
            return params.name + '<br/> ' +
                (params.value > 0 ? '停车场: ' + params.value + '家' : '')
        },
        textStyle: {
            fontSize: 13 //字体大小
        }
      },
      geo: {
        show: true,
        map: '重庆',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        label: {
          show: true,
          textStyle: {
            color: "#466cb2"
          }
        },
      //图形样式
        itemStyle: {
          //默认
          //区域色块样式
          areaColor: '#020925',
          borderColor: 'rgba(100,149,237,1)', //边框线颜色
          borderWidth: 0.6, //边框线宽度
        },
        data: data,
      },
      series: [{
        name: '点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin', //气泡
        symbolSize: 30,
        label: {
          normal: {
              show: true,
              textStyle: {
                  color: '#fff',
                  fontSize: 9,
              }
          },
          formatter: function (params) {
            console.log(params)
          },
        },
        itemStyle: {
          normal: {
            color: '#F62157', //标志颜色
          }
        },
        zlevel: 6,
        data: dataValue,
        },
      ]
    }
    this.echart.setOption(chongqingMapOption);
  }
}
</script>


