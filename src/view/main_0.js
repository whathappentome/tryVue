$.get('./city/chongqing.json', function (chongqingJson) {
    echarts.registerMap('重庆', chongqingJson);
    //获取对象
    // var myChart = document.getElementById('con_m_top');
    //自适应宽高
    var myChartContainer0 = function () {
        $('#con_m_top').height((window.screen.height - 112) * 0.65);
        $('#con_m_top').width((window.screen.width * 0.98) * 0.480);
        //alert(window.innerWidth);
    };

    $(function () {
        // 默认加载数据
        $.ajax({
            url: 'http://10.10.10.37:9812/nation?r=' + Math.random(),
            type: 'GET',
            dataType: 'JSON',
            //加载
            beforeSend: function () {
                $(".loading").show();
            },
            //成功
            success: function (data) {
                //如果有数据
                if (data.data.resultList) {
                    var geoCoordMap = {
                        "万州":[ 108.4, 30.82],
                        "涪陵":[ 107.4, 29.72],
                        "渝中区":[ 106.57, 29.55],
                        "大渡口":[ 106.48, 29.48],
                        "江北区":[ 106.57, 29.6],
                        "沙坪坝":[ 106.45, 29.53],
                        "九龙坡":[ 106.5, 29.5],
                        "南岸":[ 106.57, 29.52],
                        "北碚":[ 106.4, 29.8],
                        "万盛":[ 106.92, 28.97], 
                        "双桥":[ 105.78, 29.48],
                        "渝北":[ 106.63, 29.72],
                        "巴南":[ 106.52, 29.38],
                        "黔江":[ 108.77, 29.53],
                        "长寿":[ 107.08, 29.87],
                        "綦江":[106.65, 29.03],
                        "潼南":[105.83, 30.18],
                        "铜梁":[106.05, 29.85],
                        "大足":[105.72, 29.7],
                        "荣昌":[105.58, 29.4],
                        "璧山":[106.22, 29.6],
                        "梁平":[107.8, 30.68],
                        "城口":[108.67, 31.95],
                        "丰都":[107.73, 29.87],
                        "垫江":[107.35, 30.33],
                        "武隆":[107.75, 29.33],
                        "忠":[108.02, 30.3],
                        "开":[108.42, 31.18],
                        "云阳":[108.67, 30.95], 
                        "奉节":[109.47, 31.02],
                        "巫山":[109.88, 31.08],
                        "巫溪":[109.63, 31.4],
                        "石柱土家族自治":[108.12, 30.0],
                        "秀山土家族苗族自治":[108.98, 28.45], 
                        "酉阳土家族苗族自治":[108.77, 28.85],
                        "彭水苗族土家族自治":[108.17, 29.3],
                    }
                    var convertData = function(data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var geoCoord = geoCoordMap[data[i].name];
                            if (geoCoord) {
                                res.push({
                                    name: data[i].name,
                                    value: geoCoord.concat(data[i].value)
                                });
                            }
                        }
                        return res;
                    };
                    console.log(JSON.stringify(convertData(data.data.resultList)))
                    //loading隐藏
                    $(".loading").hide();
                    $('.sum_1').text(data.data.parkNum);
                    //返回json数据
                    var returnjson = data.data.resultList;
                    //循环
                    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
                    // 路径配置
                    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
                    myChartContainer0();
                    var myChart2 = echarts.init(document.getElementById('con_m_top'));
                    //图表清空
                    myChart2.clear();
                    //图表释放
                    // myChart2.dispose();
                    myChart2.setOption({
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
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#3B5077',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7',
                                }
                            }
                        },
                        series: [
                            {
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
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#F62157', //标志颜色
                                    }
                                },
                                zlevel: 6,
                                data: convertData(returnjson),
                            },
                            //全国车场数据
                            {
                                name: '重庆',
                                type: 'map',
                                map: '重庆',
                                roam: false, //是否开启滚轮缩放
                                hoverable: false,
                                // mapLocation:{x:'center',y:'bottom'},    //设置地图位置
                                selectedMode: 'single',
                                zoom: 0.9,
                                top: 0,
                                left: 0,
                                bottom: 0,
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
                                left: 0,
                                top: 0,
                                right: 0,
                                // nameMap: {
                                //     '巫山县': '巫山',
                                //     '巫溪县': '巫溪',
                                //     '云阳县': '云阳',
                                //     '奉节县': '奉节',
                                //     '万州区': '万州',
                                //     '城口县': '城口',
                                //     '梁平县': '梁平',
                                //     '垫江县': '垫江',
                                //     '石柱土家族自治县': '石柱',
                                //     '丰都县': '丰都',
                                //     '长寿区': '长寿',
                                //     '涪陵区': '涪陵',
                                //     '黔江区': '黔江',
                                //     '彭水苗族土家族自治县': '彭水',
                                //     '武隆县': '武隆',
                                //     '酉阳土家族苗族自治县': '酉阳',
                                //     '秀山土家族苗族自治县': '秀山',
                                //     '綦江区': '綦江',
                                //     '南川区': '南川',
                                //     '九龙坡区': '九龙坡',
                                //     '大渡口区': '大渡口',
                                //     '南岸区': '南岸',
                                //     '沙坪坝区': '沙坪坝',
                                //     '北碚区': '北碚',
                                //     '江北区': '江北',
                                //     '巴南区': '巴南',
                                //     '渝中区': '渝中',
                                //     '渝北区': '渝北',
                                //     '荣昌区': '荣昌',
                                //     '大足区': '大足',
                                //     '潼南区': '潼南',
                                //     '合川区': '合川',
                                //     '永川区': '永川',
                                //     '江津区': '江津',
                                //     '铜梁区': '铜梁',
                                //     '璧山区': '璧山',
                                //     '北新': '北新'
                                // },
                                data: returnjson,
                                //通过绝对经纬度,指定地区的名称文本位置
                                //地图上的标注点
                            },
                            //运动轨迹
                        ]
                    });

                    //浏览器大小改变时重置大小
                    window.onresize = function () {
                        //获取对象宽高
                        myChartContainer0();
                        myChart2.resize();
                    };

                    //如果没有数据
                } else {
                    $(".loading").hide();
                    layer.msg('暂无数据', {
                        shade: 0.0,
                        icon: 2,
                        time: 5000,
                        area: '160px'
                    });
                }
            },

            //请求完成后回调函数
            complete: function (XHR, TS) {
                XHR = null
            },

            // //失败
            error: function (data) {
                $(".loading").hide();
                //layer.msg('系统异常',{shade:0.0,icon:2,time:5000,area:'160px'});
            }
        });
    });
})