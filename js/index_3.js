        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('index_3'),e_macarons);
        var option = {
    title : {
        text: '2010年~2014年，温州空气质量指数变化',
        subtext: '来源：中国环保部数据中心(2013年度数据暂缺)',
    },
    tooltip : {
        trigger: 'axis',
        formatter: function(params) {
            return params[0].name + '<br/>'
                   + params[0].seriesName + ' : ' + params[0].value
        }
    },
    toolbox: {
        show : true,
        orient:'vertical',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true},
        y : 'center'
        }
    },
    grid : {
        x:'10%',
        x2:'10%',
        y:'20%'
    },
    dataZoom : {
        show : true,
        realtime : false,
        start : 0,
        end : 25
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: false},
            data : [
                '2010/1/1',' 2010/1/2',' 2010/1/3',' 2010/1/4',' 2010/1/5',' 2010/1/6',' 2010/1/7',' 2010/1/8',' 2010/1/9',' 2010/1/10',' 2010/1/11',' 2010/1/12',' 2010/1/13',' 2010/1/14',' 2010/1/15',' 2010/1/16',' 2010/1/17',' 2010/1/18',' 2010/1/19',' 2010/1/20',' 2010/1/21',' 2010/1/22',' 2010/1/23',' 2010/1/24',' 2010/1/25',' 2010/1/26',' 2010/1/27',' 2010/1/28',' 2010/1/29',' 2010/1/30',' 2010/1/31',' 2010/2/1',' 2010/2/2',' 2010/2/3',' 2010/2/4',' 2010/2/5',' 2010/2/6',' 2010/2/7',' 2010/2/8',' 2010/2/9',' 2010/2/10',' 2010/2/11',' 2010/2/12',' 2010/2/13',' 2010/2/14',' 2010/2/15',' 2010/2/16',' 2010/2/17',' 2010/2/18',' 2010/2/19',' 2010/2/20',' 2010/2/21',' 2010/2/22',' 2010/2/23',' 2010/2/24',' 2010/2/25',' 2010/2/26',' 2010/2/27',' 2010/2/28',' 2010/3/1',' 2010/3/2',' 2010/3/3',' 2010/3/4',' 2010/3/5',' 2010/3/6',' 2010/3/7',' 2010/3/8',' 2010/3/9',' 2010/3/10',' 2010/3/11',' 2010/3/12',' 2010/3/13',' 2010/3/14',' 2010/3/16',' 2010/3/17',' 2010/3/18',' 2010/3/19',' 2010/3/20',' 2010/3/21',' 2010/3/22',' 2010/3/23',' 2010/3/24',' 2010/3/25',' 2010/3/26',' 2010/3/27',' 2010/3/28',' 2010/3/29',' 2010/3/30',' 2010/3/31',' 2010/4/1',' 2010/4/2',' 2010/4/3',' 2010/4/4',' 2010/4/5',' 2010/4/6',' 2010/4/7',' 2010/4/8',' 2010/4/9',' 2010/4/10',' 2010/4/11',' 2010/4/12',' 2010/4/13',' 2010/4/14',' 2010/4/15',' 2010/4/16',' 2010/4/17',' 2010/4/18',' 2010/4/19',' 2010/4/20',' 2010/4/21',' 2010/4/22',' 2010/4/23',' 2010/4/24',' 2010/4/25',' 2010/4/26',' 2010/4/27',' 2010/4/28',' 2010/4/29',' 2010/4/30',' 2010/5/1',' 2010/5/2',' 2010/5/3',' 2010/5/4',' 2010/5/5',' 2010/5/6',' 2010/5/7',' 2010/5/8',' 2010/5/9',' 2010/5/10',' 2010/5/11',' 2010/5/12',' 2010/5/13',' 2010/5/14',' 2010/5/15',' 2010/5/16',' 2010/5/17',' 2010/5/18',' 2010/5/19',' 2010/5/20',' 2010/5/22',' 2010/5/23',' 2010/5/24',' 2010/5/25',' 2010/5/26',' 2010/5/27',' 2010/5/28',' 2010/5/29',' 2010/5/30',' 2010/5/31',' 2010/6/1',' 2010/6/2',' 2010/6/3',' 2010/6/4',' 2010/6/5',' 2010/6/6',' 2010/6/7',' 2010/6/8',' 2010/6/9',' 2010/6/10',' 2010/6/11',' 2010/6/12',' 2010/6/13',' 2010/6/14',' 2010/6/15',' 2010/6/16',' 2010/6/17',' 2010/6/18',' 2010/6/19',' 2010/6/20',' 2010/6/21',' 2010/6/22',' 2010/6/23',' 2010/6/24',' 2010/6/25',' 2010/6/26',' 2010/6/27',' 2010/6/28',' 2010/6/29',' 2010/6/30',' 2010/7/1',' 2010/7/2',' 2010/7/3',' 2010/7/4',' 2010/7/5',' 2010/7/6',' 2010/7/7',' 2010/7/8',' 2010/7/9',' 2010/7/10',' 2010/7/11',' 2010/7/12',' 2010/7/13',' 2010/7/14',' 2010/7/15',' 2010/7/16',' 2010/7/17',' 2010/7/18',' 2010/7/19',' 2010/7/20',' 2010/7/21',' 2010/7/22',' 2010/7/23',' 2010/7/24',' 2010/7/25',' 2010/7/26',' 2010/7/27',' 2010/7/28',' 2010/7/29',' 2010/7/30',' 2010/7/31',' 2010/8/1',' 2010/8/2',' 2010/8/3',' 2010/8/4',' 2010/8/5',' 2010/8/6',' 2010/8/7',' 2010/8/8',' 2010/8/9',' 2010/8/10',' 2010/8/11',' 2010/8/12',' 2010/8/13',' 2010/8/13',' 2010/8/14',' 2010/8/15',' 2010/8/16',' 2010/8/17',' 2010/8/18',' 2010/8/19',' 2010/8/20',' 2010/8/21',' 2010/8/22',' 2010/8/23',' 2010/8/24',' 2010/8/25',' 2010/8/26',' 2010/8/27',' 2010/8/28',' 2010/8/29',' 2010/8/30',' 2010/8/31',' 2010/9/1',' 2010/9/2',' 2010/9/3',' 2010/9/4',' 2010/9/5',' 2010/9/6',' 2010/9/7',' 2010/9/8',' 2010/9/9',' 2010/9/10',' 2010/9/11',' 2010/9/12',' 2010/9/13',' 2010/9/14',' 2010/9/15',' 2010/9/16',' 2010/9/17',' 2010/9/18',' 2010/9/19',' 2010/9/20',' 2010/9/21',' 2010/9/22',' 2010/9/23',' 2010/9/24',' 2010/9/25',' 2010/9/26',' 2010/9/27',' 2010/9/28',' 2010/9/29',' 2010/9/30',' 2010/10/1',' 2010/10/2',' 2010/10/3',' 2010/10/4',' 2010/10/5',' 2010/10/6',' 2010/10/7',' 2010/10/8',' 2010/10/9',' 2010/10/10',' 2010/10/11',' 2010/10/12',' 2010/10/13',' 2010/10/14',' 2010/10/15',' 2010/10/16',' 2010/10/17',' 2010/10/18',' 2010/10/19',' 2010/10/20',' 2010/10/21',' 2010/10/22',' 2010/10/23',' 2010/10/24',' 2010/10/25',' 2010/10/26',' 2010/10/27',' 2010/10/28',' 2010/10/29',' 2010/10/30',' 2010/10/31',' 2010/11/1',' 2010/11/2',' 2010/11/3',' 2010/11/4',' 2010/11/5',' 2010/11/6',' 2010/11/7',' 2010/11/8',' 2010/11/9',' 2010/11/10',' 2010/11/11',' 2010/11/12',' 2010/11/13',' 2010/11/14',' 2010/11/15',' 2010/11/16',' 2010/11/17',' 2010/11/18',' 2010/11/19',' 2010/11/20',' 2010/11/21',' 2010/11/22',' 2010/11/23',' 2010/11/24',' 2010/11/25',' 2010/11/26',' 2010/11/27',' 2010/11/28',' 2010/11/29',' 2010/11/30',' 2010/12/1',' 2010/12/2',' 2010/12/3',' 2010/12/4',' 2010/12/5',' 2010/12/6',' 2010/12/7',' 2010/12/8',' 2010/12/9',' 2010/12/10',' 2010/12/11',' 2010/12/12',' 2010/12/13',' 2010/12/14',' 2010/12/15',' 2010/12/16',' 2010/12/17',' 2010/12/18',' 2010/12/19',' 2010/12/20',' 2010/12/21',' 2010/12/22',' 2010/12/23',' 2010/12/24',' 2010/12/25',' 2010/12/26',' 2010/12/27',' 2010/12/28',' 2010/12/29',' 2010/12/30',' 2010/12/31',' 2011/1/1',' 2011/1/2',' 2011/1/3',' 2011/1/4',' 2011/1/5',' 2011/1/6',' 2011/1/7',' 2011/1/8',' 2011/1/9',' 2011/1/10',' 2011/1/11',' 2011/1/12',' 2011/1/13',' 2011/1/14',' 2011/1/15',' 2011/1/16',' 2011/1/17',' 2011/1/18',' 2011/1/19',' 2011/1/20',' 2011/1/21',' 2011/1/22',' 2011/1/23',' 2011/1/24',' 2011/1/25',' 2011/1/26',' 2011/1/27',' 2011/1/28',' 2011/1/29',' 2011/1/30',' 2011/1/31',' 2011/2/1',' 2011/2/2',' 2011/2/3',' 2011/2/4',' 2011/2/5',' 2011/2/6',' 2011/2/7',' 2011/2/8',' 2011/2/9',' 2011/2/10',' 2011/2/11',' 2011/2/12',' 2011/2/13',' 2011/2/14',' 2011/2/15',' 2011/2/16',' 2011/2/17',' 2011/2/18',' 2011/2/19',' 2011/2/20',' 2011/2/21',' 2011/2/22',' 2011/2/23',' 2011/2/24',' 2011/2/25',' 2011/2/26',' 2011/2/27',' 2011/2/28',' 2011/3/1',' 2011/3/2',' 2011/3/3',' 2011/3/4',' 2011/3/5',' 2011/3/6',' 2011/3/7',' 2011/3/8',' 2011/3/9',' 2011/3/10',' 2011/3/11',' 2011/3/12',' 2011/3/13',' 2011/3/14',' 2011/3/15',' 2011/3/16',' 2011/3/17',' 2011/3/18',' 2011/3/19',' 2011/3/20',' 2011/3/21',' 2011/3/22',' 2011/3/23',' 2011/3/24',' 2011/3/25',' 2011/3/26',' 2011/3/27',' 2011/3/28',' 2011/3/29',' 2011/3/30',' 2011/3/31',' 2011/4/1',' 2011/4/2',' 2011/4/3',' 2011/4/4',' 2011/4/5',' 2011/4/6',' 2011/4/7',' 2011/4/8',' 2011/4/9',' 2011/4/10',' 2011/4/11',' 2011/4/12',' 2011/4/13',' 2011/4/14',' 2011/4/15',' 2011/4/16',' 2011/4/17',' 2011/4/18',' 2011/4/19',' 2011/4/20',' 2011/4/21',' 2011/4/22',' 2011/4/23',' 2011/4/24',' 2011/4/25',' 2011/4/26',' 2011/4/27',' 2011/4/28',' 2011/4/29',' 2011/4/30',' 2011/5/1',' 2011/5/2',' 2011/5/3',' 2011/5/4',' 2011/5/5',' 2011/5/6',' 2011/5/7',' 2011/5/8',' 2011/5/9',' 2011/5/10',' 2011/5/11',' 2011/5/12',' 2011/5/13',' 2011/5/14',' 2011/5/15',' 2011/5/16',' 2011/5/17',' 2011/5/18',' 2011/5/19',' 2011/5/20',' 2011/5/21',' 2011/5/22',' 2011/5/23',' 2011/5/24',' 2011/5/25',' 2011/5/26',' 2011/5/27',' 2011/5/28',' 2011/5/29',' 2011/5/30',' 2011/5/31',' 2011/6/1',' 2011/6/2',' 2011/6/3',' 2011/6/4',' 2011/6/5',' 2011/6/6',' 2011/6/7',' 2011/6/8',' 2011/6/9',' 2011/6/10',' 2011/6/11',' 2011/6/12',' 2011/6/13',' 2011/6/14',' 2011/6/15',' 2011/6/16',' 2011/6/17',' 2011/6/18',' 2011/6/19',' 2011/6/20',' 2011/6/21',' 2011/6/22',' 2011/6/23',' 2011/6/24',' 2011/6/25',' 2011/6/26',' 2011/6/27',' 2011/6/28',' 2011/6/29',' 2011/6/30',' 2011/7/1',' 2011/7/2',' 2011/7/3',' 2011/7/4',' 2011/7/5',' 2011/7/6',' 2011/7/7',' 2011/7/8',' 2011/7/9',' 2011/7/10',' 2011/7/11',' 2011/7/12',' 2011/7/13',' 2011/7/14',' 2011/7/15',' 2011/7/16',' 2011/7/17',' 2011/7/18',' 2011/7/19',' 2011/7/20',' 2011/7/21',' 2011/7/22',' 2011/7/23',' 2011/7/24',' 2011/7/25',' 2011/7/26',' 2011/7/27',' 2011/7/28',' 2011/7/29',' 2011/7/30',' 2011/7/31',' 2011/8/1',' 2011/8/2',' 2011/8/3',' 2011/8/4',' 2011/8/5',' 2011/8/6',' 2011/8/7',' 2011/8/8',' 2011/8/9',' 2011/8/10',' 2011/8/11',' 2011/8/12',' 2011/8/13',' 2011/8/14',' 2011/8/15',' 2011/8/16',' 2011/8/17',' 2011/8/18',' 2011/8/19',' 2011/8/20',' 2011/8/21',' 2011/8/22',' 2011/8/23',' 2011/8/24',' 2011/8/25',' 2011/8/26',' 2011/8/27',' 2011/8/28',' 2011/8/29',' 2011/8/30',' 2011/8/31',' 2011/9/1',' 2011/9/2',' 2011/9/3',' 2011/9/4',' 2011/9/5',' 2011/9/6',' 2011/9/7',' 2011/9/8',' 2011/9/9',' 2011/9/10',' 2011/9/11',' 2011/9/12',' 2011/9/13',' 2011/9/14',' 2011/9/15',' 2011/9/16',' 2011/9/17',' 2011/9/18',' 2011/9/19',' 2011/9/20',' 2011/9/21',' 2011/9/22',' 2011/9/23',' 2011/9/24',' 2011/9/25',' 2011/9/26',' 2011/9/27',' 2011/9/28',' 2011/9/29',' 2011/9/30',' 2011/10/1',' 2011/10/2',' 2011/10/3',' 2011/10/4',' 2011/10/5',' 2011/10/6',' 2011/10/7',' 2011/10/8',' 2011/10/9',' 2011/10/10',' 2011/10/11',' 2011/10/12',' 2011/10/13',' 2011/10/14',' 2011/10/15',' 2011/10/16',' 2011/10/17',' 2011/10/18',' 2011/10/19',' 2011/10/20',' 2011/10/21',' 2011/10/22',' 2011/10/23',' 2011/10/24',' 2011/10/25',' 2011/10/26',' 2011/10/27',' 2011/10/29',' 2011/10/30',' 2011/10/31',' 2011/11/1',' 2011/11/2',' 2011/11/3',' 2011/11/4',' 2011/11/5',' 2011/11/6',' 2011/11/7',' 2011/11/8',' 2011/11/9',' 2011/11/10',' 2011/11/11',' 2011/11/12',' 2011/11/13',' 2011/11/14',' 2011/11/15',' 2011/11/16',' 2011/11/17',' 2011/11/18',' 2011/11/19',' 2011/11/20',' 2011/11/21',' 2011/11/22',' 2011/11/23',' 2011/11/24',' 2011/11/25',' 2011/11/26',' 2011/11/27',' 2011/11/28',' 2011/11/29',' 2011/11/30',' 2011/12/1',' 2011/12/2',' 2011/12/3',' 2011/12/4',' 2011/12/5',' 2011/12/6',' 2011/12/7',' 2011/12/8',' 2011/12/9',' 2011/12/10',' 2011/12/11',' 2011/12/12',' 2011/12/13',' 2011/12/14',' 2011/12/15',' 2011/12/16',' 2011/12/17',' 2011/12/18',' 2011/12/19',' 2011/12/20',' 2011/12/21',' 2011/12/22',' 2011/12/23',' 2011/12/24',' 2011/12/25',' 2011/12/26',' 2011/12/27',' 2011/12/28',' 2011/12/29',' 2011/12/30',' 2011/12/31',' 2012/1/1',' 2012/1/2',' 2012/1/3',' 2012/1/4',' 2012/1/5',' 2012/1/6',' 2012/1/7',' 2012/1/8',' 2012/1/9',' 2012/1/10',' 2012/1/11',' 2012/1/12',' 2012/1/13',' 2012/1/14',' 2012/1/15',' 2012/1/16',' 2012/1/17',' 2012/1/18',' 2012/1/19',' 2012/1/20',' 2012/1/21',' 2012/1/22',' 2012/1/23',' 2012/1/24',' 2012/1/25',' 2012/1/26',' 2012/1/27',' 2012/1/28',' 2012/1/29',' 2012/1/30',' 2012/1/31',' 2012/2/1',' 2012/2/2',' 2012/2/3',' 2012/2/4',' 2012/2/5',' 2012/2/6',' 2012/2/7',' 2012/2/8',' 2012/2/9',' 2012/2/10',' 2012/2/11',' 2012/2/12',' 2012/2/13',' 2012/2/14',' 2012/2/15',' 2012/2/16',' 2012/2/17',' 2012/2/18',' 2012/2/19',' 2012/2/20',' 2012/2/21',' 2012/2/22',' 2012/2/23',' 2012/2/24',' 2012/2/25',' 2012/2/26',' 2012/2/27',' 2012/2/28',' 2012/2/29',' 2012/3/1',' 2012/3/2',' 2012/3/3',' 2012/3/4',' 2012/3/5',' 2012/3/6',' 2012/3/7',' 2012/3/8',' 2012/3/9',' 2012/3/10',' 2012/3/11',' 2012/3/12',' 2012/3/13',' 2012/3/14',' 2012/3/15',' 2012/3/16',' 2012/3/17',' 2012/3/18',' 2012/3/19',' 2012/3/20',' 2012/3/21',' 2012/3/22',' 2012/3/23',' 2012/3/24',' 2012/3/25',' 2012/3/26',' 2012/3/27',' 2012/3/28',' 2012/3/29',' 2012/3/30',' 2012/3/31',' 2012/4/1',' 2012/4/2',' 2012/4/3',' 2012/4/4',' 2012/4/5',' 2012/4/6',' 2012/4/7',' 2012/4/8',' 2012/4/9',' 2012/4/10',' 2012/4/11',' 2012/4/12',' 2012/4/13',' 2012/4/14',' 2012/4/15',' 2012/4/16',' 2012/4/17',' 2012/4/18',' 2012/4/19',' 2012/4/20',' 2012/4/21',' 2012/4/22',' 2012/4/23',' 2012/4/24',' 2012/4/25',' 2012/4/26',' 2012/4/27',' 2012/4/28',' 2012/4/29',' 2012/4/30',' 2012/5/1',' 2012/5/2',' 2012/5/3',' 2012/5/4',' 2012/5/5',' 2012/5/6',' 2012/5/7',' 2012/5/8',' 2012/5/9',' 2012/5/10',' 2012/5/11',' 2012/5/12',' 2012/5/13',' 2012/5/14',' 2012/5/15',' 2012/5/16',' 2012/5/17',' 2012/5/18',' 2012/5/19',' 2012/5/20',' 2012/5/21',' 2012/5/22',' 2012/5/23',' 2012/5/24',' 2012/5/25',' 2012/5/26',' 2012/5/27',' 2012/5/28',' 2012/5/29',' 2012/5/30',' 2012/5/31',' 2012/6/1',' 2012/6/2',' 2012/6/3',' 2012/6/4',' 2012/6/5',' 2012/6/6',' 2012/6/7',' 2012/6/8',' 2012/6/9',' 2012/6/10',' 2012/6/11',' 2012/6/12',' 2012/6/13',' 2012/6/14',' 2012/6/15',' 2012/6/16',' 2012/6/17',' 2012/6/18',' 2012/6/19',' 2012/6/20',' 2012/6/21',' 2012/6/22',' 2012/6/23',' 2012/6/24',' 2012/6/25',' 2012/6/26',' 2012/6/27',' 2012/6/28',' 2012/6/29',' 2012/6/30',' 2012/7/1',' 2012/7/2',' 2012/7/3',' 2012/7/4',' 2012/7/5',' 2012/7/6',' 2012/7/7',' 2012/7/8',' 2012/7/9',' 2012/7/10',' 2012/7/11',' 2012/7/12',' 2012/7/13',' 2012/7/14',' 2012/7/15',' 2012/7/16',' 2012/7/17',' 2012/7/18',' 2012/7/19',' 2012/7/20',' 2012/7/21',' 2012/7/22',' 2012/7/23',' 2012/7/24',' 2012/7/25',' 2012/7/26',' 2012/7/26',' 2012/7/27',' 2012/7/28',' 2012/7/29',' 2012/7/30',' 2012/7/31',' 2012/8/1',' 2012/8/2',' 2012/8/3',' 2012/8/4',' 2012/8/5',' 2012/8/6',' 2012/8/7',' 2012/8/8',' 2012/8/9',' 2012/8/10',' 2012/8/11',' 2012/8/12',' 2012/8/13',' 2012/8/14',' 2012/8/15',' 2012/8/16',' 2012/8/17',' 2012/8/18',' 2012/8/19',' 2012/8/20',' 2012/8/21',' 2012/8/22',' 2012/8/23',' 2012/8/24',' 2012/8/25',' 2012/8/26',' 2012/8/27',' 2012/8/28',' 2012/8/29',' 2012/8/30',' 2012/8/31',' 2012/9/1',' 2012/9/2',' 2012/9/3',' 2012/9/4',' 2012/9/5',' 2012/9/6',' 2012/9/7',' 2012/9/8',' 2012/9/9',' 2012/9/10',' 2012/9/11',' 2012/9/12',' 2012/9/13',' 2012/9/14',' 2012/9/15',' 2012/9/16',' 2012/9/17',' 2012/9/18',' 2012/9/19',' 2012/9/20',' 2012/9/21',' 2012/9/22',' 2012/9/23',' 2012/9/24',' 2012/9/25',' 2012/9/26',' 2012/9/27',' 2012/9/28',' 2012/9/29',' 2012/9/30',' 2012/10/1',' 2012/10/2',' 2012/10/3',' 2012/10/4',' 2012/10/5',' 2012/10/6',' 2012/10/7',' 2012/10/8',' 2012/10/9',' 2012/10/10',' 2012/10/11',' 2012/10/12',' 2012/10/13',' 2012/10/14',' 2012/10/15',' 2012/10/16',' 2012/10/17',' 2012/10/18',' 2012/10/19',' 2012/10/20',' 2012/10/21',' 2012/10/22',' 2012/10/23',' 2012/10/24',' 2012/10/25',' 2012/10/26',' 2012/10/27',' 2012/10/28',' 2012/10/29',' 2012/10/30',' 2012/10/31',' 2012/11/1',' 2012/11/2',' 2012/11/3',' 2012/11/4',' 2012/11/5',' 2012/11/6',' 2012/11/7',' 2012/11/8',' 2012/11/9',' 2012/11/10',' 2012/11/11',' 2012/11/12',' 2012/11/13',' 2012/11/14',' 2012/11/15',' 2012/11/16',' 2012/11/17',' 2012/11/18',' 2012/11/19',' 2012/11/20',' 2012/11/21',' 2012/11/22',' 2012/11/23',' 2012/11/24',' 2012/11/25',' 2012/11/26',' 2012/11/27',' 2012/11/28',' 2012/11/29',' 2012/12/1',' 2012/12/2',' 2012/12/3',' 2012/12/4',' 2012/12/5',' 2012/12/6',' 2012/12/7',' 2012/12/8',' 2012/12/9',' 2012/12/10',' 2012/12/11',' 2012/12/12',' 2012/12/13',' 2012/12/14',' 2012/12/15',' 2012/12/16',' 2012/12/17',' 2012/12/18',' 2012/12/19',' 2012/12/20',' 2012/12/21',' 2012/12/22',' 2012/12/23',' 2012/12/24',' 2012/12/25',' 2012/12/26',' 2012/12/28',' 2012/12/29',' 2012/12/30',' 2012/12/31',' 2014/1/1',' 2014/1/2',' 2014/1/3',' 2014/1/4',' 2014/1/5',' 2014/1/6',' 2014/1/7',' 2014/1/8',' 2014/1/9',' 2014/1/10',' 2014/1/11',' 2014/1/12',' 2014/1/13',' 2014/1/14',' 2014/1/15',' 2014/1/16',' 2014/1/17',' 2014/1/18',' 2014/1/19',' 2014/1/20',' 2014/1/21',' 2014/1/22',' 2014/1/24',' 2014/1/25',' 2014/1/26',' 2014/1/27',' 2014/1/28',' 2014/1/29',' 2014/1/30',' 2014/1/31',' 2014/2/1',' 2014/2/2',' 2014/2/3',' 2014/2/4',' 2014/2/5',' 2014/2/6',' 2014/2/7',' 2014/2/8',' 2014/2/9',' 2014/2/10',' 2014/2/11',' 2014/2/12',' 2014/2/13',' 2014/2/14',' 2014/2/15',' 2014/2/16',' 2014/2/17',' 2014/2/18',' 2014/2/19',' 2014/2/20',' 2014/2/21',' 2014/2/22',' 2014/2/23',' 2014/2/24',' 2014/2/25',' 2014/2/26',' 2014/2/27',' 2014/2/28',' 2014/3/1',' 2014/3/2',' 2014/3/3',' 2014/3/4',' 2014/3/5',' 2014/3/5',' 2014/3/6',' 2014/3/7',' 2014/3/8',' 2014/3/9',' 2014/3/10',' 2014/3/11',' 2014/3/12',' 2014/3/13',' 2014/3/14',' 2014/3/15',' 2014/3/16',' 2014/3/17',' 2014/3/18',' 2014/3/19',' 2014/3/20',' 2014/3/21',' 2014/3/22',' 2014/3/23',' 2014/3/25',' 2014/3/26',' 2014/3/27',' 2014/3/28',' 2014/3/29',' 2014/3/30',' 2014/3/31',' 2014/4/1',' 2014/4/2',' 2014/4/3',' 2014/4/4',' 2014/4/5',' 2014/4/6',' 2014/4/7',' 2014/4/8',' 2014/4/9',' 2014/4/10',' 2014/4/11',' 2014/4/12',' 2014/4/13',' 2014/4/14',' 2014/4/15',' 2014/4/16',' 2014/4/17',' 2014/4/18',' 2014/4/19',' 2014/4/20',' 2014/4/21',' 2014/4/22',' 2014/4/23',' 2014/4/24',' 2014/4/25',' 2014/4/26',' 2014/4/27',' 2014/4/27',' 2014/4/28',' 2014/4/29',' 2014/4/30',' 2014/5/1',' 2014/5/2',' 2014/5/3',' 2014/5/4',' 2014/5/5',' 2014/5/6',' 2014/5/7',' 2014/5/8',' 2014/5/9',' 2014/5/10',' 2014/5/11',' 2014/5/12',' 2014/5/13',' 2014/5/14',' 2014/5/15',' 2014/5/16',' 2014/5/16',' 2014/5/17',' 2014/5/18',' 2014/5/19',' 2014/5/20',' 2014/5/21',' 2014/5/22',' 2014/5/23',' 2014/5/24',' 2014/5/25',' 2014/5/26',' 2014/5/27',' 2014/5/28',' 2014/5/29',' 2014/5/30',' 2014/5/31',' 2014/5/31',' 2014/6/1',' 2014/6/2',' 2014/6/3',' 2014/6/4',' 2014/6/5',' 2014/6/6',' 2014/6/7',' 2014/6/8',' 2014/6/9',' 2014/6/10',' 2014/6/11',' 2014/6/12',' 2014/6/13',' 2014/6/14',' 2014/6/15',' 2014/6/16',' 2014/6/17',' 2014/6/18',' 2014/6/19',' 2014/6/20',' 2014/6/21',' 2014/6/22',' 2014/6/23',' 2014/6/24',' 2014/6/24',' 2014/6/25',' 2014/6/26',' 2014/6/27',' 2014/6/28',' 2014/6/29',' 2014/6/30',' 2014/7/1',' 2014/7/2',' 2014/7/3',' 2014/7/4',' 2014/7/5',' 2014/7/6',' 2014/7/7',' 2014/7/8',' 2014/7/9',' 2014/7/10',' 2014/7/11',' 2014/7/12',' 2014/7/13',' 2014/7/14',' 2014/7/15',' 2014/7/16',' 2014/7/17',' 2014/7/18',' 2014/7/19',' 2014/7/20',' 2014/7/21',' 2014/7/22',' 2014/7/22',' 2014/7/23',' 2014/7/24',' 2014/7/25',' 2014/7/26',' 2014/7/27',' 2014/7/28',' 2014/7/29',' 2014/7/30',' 2014/7/31',' 2014/8/1',' 2014/8/2',' 2014/8/3',' 2014/8/4',' 2014/8/5',' 2014/8/6',' 2014/8/7',' 2014/8/9',' 2014/8/10',' 2014/8/11',' 2014/8/12',' 2014/8/13',' 2014/8/14',' 2014/8/15',' 2014/8/16',' 2014/8/17',' 2014/8/18',' 2014/8/19',' 2014/8/20',' 2014/8/21',' 2014/8/23',' 2014/8/24',' 2014/8/25',' 2014/8/26',' 2014/8/27',' 2014/8/28',' 2014/8/29',' 2014/8/30',' 2014/8/31',' 2014/9/1',' 2014/9/2',' 2014/9/3',' 2014/9/4',' 2014/9/5',' 2014/9/6',' 2014/9/7',' 2014/9/8',' 2014/9/9',' 2014/9/10',' 2014/9/11',' 2014/9/12',' 2014/9/13',' 2014/9/14',' 2014/9/15',' 2014/9/16',' 2014/9/17',' 2014/9/18',' 2014/9/19',' 2014/9/20',' 2014/9/21',' 2014/9/22',' 2014/9/23',' 2014/9/24',' 2014/9/25',' 2014/9/26',' 2014/9/27',' 2014/9/28',' 2014/9/29',' 2014/9/30',' 2014/10/1',' 2014/10/2',' 2014/10/3',' 2014/10/4',' 2014/10/5',' 2014/10/6',' 2014/10/7',' 2014/10/8',' 2014/10/9',' 2014/10/10',' 2014/10/11',' 2014/10/12',' 2014/10/13',' 2014/10/14',' 2014/10/15',' 2014/10/16',' 2014/10/17',' 2014/10/18',' 2014/10/19',' 2014/10/20',' 2014/10/21',' 2014/10/22',' 2014/10/23',' 2014/10/24',' 2014/10/25',' 2014/10/26',' 2014/10/27',' 2014/10/28',' 2014/10/29',' 2014/10/30',' 2014/10/31',' 2014/11/1',' 2014/11/2',' 2014/11/3',' 2014/11/4',' 2014/11/5',' 2014/11/6',' 2014/11/7',' 2014/11/8',' 2014/11/9',' 2014/11/10',' 2014/11/11',' 2014/11/12',' 2014/11/13',' 2014/11/14',' 2014/11/15',' 2014/11/16',' 2014/11/17',' 2014/11/18',' 2014/11/19',' 2014/11/20',' 2014/11/21',' 2014/11/22',' 2014/11/23',' 2014/11/24',' 2014/11/25',' 2014/11/26',' 2014/11/27',' 2014/11/28',' 2014/11/29',' 2014/11/30',' 2014/11/30'
            ]
        }
    ],
    yAxis : [
        {
            name : 'AQI指数',
            type : 'value',
            max : 500,
        },
    ],
    series : [
        {
            name:'AQI指数',
            type:'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[90,103,105,114,89,61,51,77,80,95,56,42,70,91,101,88,78,69,70,134,103,38,55,61,85,76,68,72,104,104,115,87,62,50,26,39,41,41,63,63,55,55,22,39,62,22,24,41,44,70,63,65,65,68,66,59,68,60,75,112,55,46,68,59,56,28,38,30,39,62,75,85,128,58,87,95,96,101,239,500,364,97,30,72,56,67,59,57,64,104,58,65,54,86,92,64,52,51,57,86,87,72,49,25,33,61,58,86,111,119,84,42,76,58,66,81,97,96,104,91,77,80,72,65,83,82,71,52,81,74,95,75,42,47,48,66,76,69,79,72,65,63,68,98,70,64,58,62,74,64,51,57,61,27,44,60,55,51,59,65,77,68,77,72,73,61,56,64,65,71,67,66,82,70,55,46,68,63,90,75,74,71,73,74,61,67,54,61,77,71,71,62,51,62,77,45,49,48,53,59,28,39,21,14,15,37,56,58,58,71,78,68,73,70,58,37,30,42,43,53,65,85,62,62,72,63,65,52,52,38,49,39,50,41,36,43,39,38,46,48,55,51,29,30,30,35,44,56,60,56,31,28,45,46,52,48,57,53,52,48,50,45,56,53,29,25,50,56,53,69,51,43,40,55,66,64,64,70,74,67,61,69,77,97,94,55,30,64,87,69,68,62,51,58,45,36,47,30,30,42,64,66,64,88,92,98,69,61,75,65,77,93,77,94,85,90,98,70,36,48,40,59,60,85,78,91,77,68,89,79,86,78,46,48,79,63,102,76,84,60,59,73,101,110,81,56,51,22,27,58,67,97,96,107,95,115,107,30,35,66,87,82,118,84,68,52,58,52,81,83,79,64,76,80,77,93,99,120,57,67,65,59,60,35,30,60,80,71,105,74,49,43,32,58,89,72,56,135,83,82,87,80,98,102,79,50,53,62,51,64,54,51,58,66,88,86,95,78,107,104,88,97,86,75,55,81,84,98,89,68,88,86,99,71,88,95,107,83,66,87,83,83,112,82,44,58,77,101,62,61,87,80,82,74,78,84,76,43,63,65,85,79,99,157,152,87,66,105,128,107,85,108,91,84,68,86,92,99,88,93,126,88,78,94,69,116,67,77,77,84,119,110,90,58,73,86,79,109,101,96,98,89,68,66,76,75,81,43,53,83,103,82,59,77,77,79,107,77,94,123,136,104,79,104,84,75,64,73,55,102,83,79,86,75,63,73,63,39,51,39,39,54,54,43,57,63,67,82,80,84,78,73,74,77,43,36,38,37,47,43,39,44,44,40,43,60,60,72,57,49,72,52,45,42,47,61,63,54,50,52,52,39,40,59,67,45,46,57,55,57,72,72,71,65,58,64,65,56,63,59,51,50,55,34,40,31,35,42,63,73,82,89,78,76,85,76,79,66,53,43,52,46,56,62,71,54,56,53,62,66,63,58,47,57,51,46,40,34,50,42,32,45,61,85,87,77,70,63,62,88,67,65,79,85,82,52,53,63,74,71,74,54,43,51,56,68,57,66,63,51,55,70,61,63,51,29,27,57,78,94,87,125,67,72,73,51,57,72,55,69,72,86,65,73,62,72,72,38,47,46,73,81,88,54,34,36,51,51,63,81,91,87,75,59,62,55,60,75,59,76,63,75,78,73,65,80,52,57,67,89,72,71,55,55,45,63,63,62,66,92,83,64,34,30,26,51,54,49,66,38,57,68,52,63,58,43,30,28,40,44,52,54,67,56,48,65,56,59,59,45,55,68,71,80,45,39,79,73,72,77,108,114,57,66,42,51,37,46,58,77,61,58,74,72,55,46,33,58,84,91,59,70,74,80,88,111,78,60,56,69,89,72,77,83,83,82,78,83,78,80,96,91,73,67,82,69,73,59,88,76,72,68,73,82,71,91,84,91,101,113,64,73,72,77,55,86,74,62,62,73,63,79,71,75,89,98,79,104,56,63,68,60,89,67,71,69,83,80,52,41,62,56,70,90,59,62,79,59,42,34,41,44,48,51,53,56,58,70,64,67,51,56,81,71,58,56,54,58,44,59,57,55,37,72,59,82,76,68,42,61,67,64,72,67,53,60,65,68,63,70,72,77,76,77,79,56,58,65,55,62,40,37,32,34,38,44,44,51,33,43,38,41,38,38,32,50,42,45,47,32,59,63,62,57,54,58,47,34,52,53,53,49,44,43,47,43,52,47,39,51,50,58,56,35,35,50,40,33,64,49,59,51,52,48,65,40,33,57,48,62,80,96,105,93,85,57,67,74,59,69,56,57,68,74,73,86,73,68,54,97,57,68,58,115,52,60,53,68,89,80,64,96,90,76,85,58,98,91,78,81,91,161,65,32,89,98,97,88,79,99,106,141,113,70,67,77,83,82,79,81,55,77,100,113,150,99,78,50,81,81,69,100,64,47,38,47,76,91,85,105,129,140,111,74,75,87,104,123,86,55,56,57,83,85,50,51,90,131,113,36,67,63,58,106,104,117,169,227,168,90,74,49,61,67,47,86,118,80,67,77,144,195,133,98,65,50,52,138,43,48,65,89,256,73,75,71,40,47,38,30,30,46,33,58,59,36,49,56,40,37,21,25,47,63,82,74,97,71,80,85,65,51,34,55,53,66,66,36,37,39,52,90,128,87,66,98,90,95,113,149,139,61,67,65,63,76,100,114,113,71,100,60,35,59,99,77,80,64,73,121,101,87,71,77,85,61,80,71,92,100,70,52,62,45,64,66,43,48,69,69,62,81,88,78,68,78,84,47,61,73,93,94,52,66,53,63,75,81,95,95,105,89,64,69,102,62,45,36,76,99,133,107,116,80,44,44,45,57,68,73,83,74,56,60,50,41,54,68,98,81,58,63,56,54,49,60,64,37,25,39,39,55,82,76,42,48,47,57,58,52,72,50,56,65,57,51,72,82,71,62,48,56,45,33,29,35,41,38,33,33,28,47,52,49,52,47,42,43,41,29,29,61,58,52,47,56,53,62,58,45,48,39,38,37,50,58,31,24,44,59,70,69,52,54,44,50,56,54,67,54,50,71,91,64,56,59,58,56,41,56,60,45,49,45,52,50,41,26,27,27,30,53,47,71,83,64,75,44,45,61,69,65,60,81,76,55,54,48,50,55,76,72,100,134,119,78,65,77,82,48,71,62,69,84,103,61,60,73,78,69,44,68,63,67,82,94,46,29,51,92,76,108,71,71,53,88,109,61,65,81,66,65,73,58,40,51,72,74,51,51,
            ]
        },
        {
            name:'优秀',
            type:'line',
            data:[NaN],
            markLine : {
                color : '#CCC',
                data : [
                    [
                        {name: '空气质量：优秀', value: 50, xAxis:0, yAxis: 50},
                        {name: '空气质量：优秀',xAxis:2010/1/1, yAxis: 50}
                    ],
                    ],
                },
        },
        {
            name:'良好',
            type:'line',
            data:[NaN],
            markLine : {
                color : '#CCC',
                data : [
                    [
                        {name: '空气质量：良好', value: 100, xAxis:0, yAxis: 100},
                        {name: '空气质量：良好',value: 100,xAxis:2010/1/1, yAxis: 100}
                    ],
                    ],
                },
        },

        {
            name:'轻度污染',
            type:'line',
            data:[NaN],
            markLine : {
                color : '#CCC',
                data : [
                    [
                        {name: '空气质量：轻度污染', value: 150, xAxis:0, yAxis: 150},
                        {name: '空气质量：轻度污染',value: 150,xAxis:2010/1/1, yAxis: 150}
                    ],
                    ],
                },
        },
        {
            name:'中度污染',
            type:'line',
            data:[NaN],
            markLine : {
                color : '#CCC',
                data : [
                    [
                        {name: '空气质量：中度污染', value: 200, xAxis:0, yAxis: 200},
                        {name: '空气质量：中度污染',value: 200,xAxis:2010/1/1, yAxis: 200}
                    ],
                    ],
                },
        },
        {
            name:'重度污染',
            type:'line',
            data:[NaN],
            markLine : {
                color : '#CCC',
                data : [
                    [
                        {name: '空气质量：重度污染', value: 300, xAxis:0, yAxis: 300},
                        {name: '空气质量：重度污染',value: 300,xAxis:2010/1/1, yAxis: 300}
                    ],
                    ],
                },
        },
    ]
};
                    
                    
                    //option
        
        // 为echarts对象加载数据 
        myChart.setOption(option); 