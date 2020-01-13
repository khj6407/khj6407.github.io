data = {
  datasets: [
    {
      backgroundColor: [
        "#ffa751",
        "#6FB1FC",
        "#c471ed",
        "#00F260",
        "#0575E6",
        "#f05053"
      ],
      data: [15, 18, 18, 18, 15, 16]
    }
  ],
  // 라벨의 이름이 툴팁처럼 마우스가 근처에 오면 나타남 l
  abels: ["red", "yellow", "blue"]
};

// 도넛형 차트
var ctx2 = document.getElementById("myChart2");
var myDoughnutChart = new Chart(ctx2, {
  type: "doughnut",
  data: data,
  options: {}
});
