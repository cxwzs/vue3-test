
import * as echarts from 'echarts';

function drawEcharts (domid: string, options: any) {
    console.log(domid,'domid')
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(domid) as any);
    // 绘制图表
    myChart.setOption(options)
}

export default drawEcharts