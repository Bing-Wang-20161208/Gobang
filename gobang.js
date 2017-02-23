//初始化变量
var gobang = document.querySelector('#gobang'),//canvas
    text = document.querySelector('.text'),//显示文字
    ctx = null,//canvas getContext()
    x = 0,//横坐标
    y = 0,//纵坐标
    row = 0,//行
    col = 0,//列
    isBlack = true;//是否当黑子
var black = new Image(),//画黑棋
    white = new Image();//画白棋
black.src = "img/black.png";
white.src = "img/white.png";
//定义一个二维数组，用于存放行、列
var maps = new Array(15);
for (var i = 0; i < 15; i++) {
  maps[i] = new Array(15);
  for (var j = 0; j < 15; j++) {
    maps[i][j] = 0;
  }
}
/*画棋盘*/
function draw() {
  ctx = gobang.getContext('2d');
  ctx.strokeStyle = '#FFF';//一定在这个位置,画矩形之前
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      ctx.strokeRect(j * 40, i * 40, 40, 40);
    }
  }
}
/*控制棋子*/
function play(e) {
  //获取横纵坐标
  x = e.clientX - (parseFloat(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 18 - 598) / 2;//需要出去18px的导航条
  y = e.clientY - 30;
  //设置行列
  row = parseInt((y - 20) / 40) + 1;//行对应纵坐标
  col = parseInt((x - 20) / 40) + 1;//列对应横坐标
  //放黑白棋
  if (isBlack) {
    ctx.drawImage(black, col * 40 - 20, row * 40 - 20);
    isBlack = false;
    maps[row][col] = 2;//2为黑棋
    isWin(2, row, col);
  } else {
    ctx.drawImage(white, col * 40 - 20, row * 40 - 20);
    isBlack = true;
    maps[row][col] = 1;//1为白棋
    isWin(1, row, col);
  }
  //分方向，定输赢
  function isWin(n, row, col) {
    var orgrow = row,//换方向时回归初始状态
        orgcol = col,//换方向时回归初始状态
        total = 1;//计数，定输赢
    //水平方向
    while (col - 1 > 0 && maps[row][col - 1] == n) {
      total++;
      col--;
    }
    row = orgrow;
    col = orgcol;
    while (col + 1 < 15 && maps[row][col + 1] == n) {
      total++;
      col++;
    }
    if (total >= 5) {
      if (n == 1) {
        text.innerHTML = '白子赢';
      } else {
        text.innerHTML = '黑子赢';
      }
      ctx.clearRect(0, 0, 600, 600);
      draw();
    }
    //垂直方向
    row = orgrow;
    col = orgcol;
    total = 1;//每一次换方向都需要重新计数
    while (row - 1 > 0 && maps[row - 1][col] == n) {
      total++;
      row--;
    }
    row = orgrow;
    col = orgcol;
    while (row + 1 < 15 && maps[row + 1][col] == n) {
      total++;
      row++;
    }
    if (total >= 5) {
      if (n == 1) {
        text.innerHTML = '白子赢';
      } else {
        text.innerHTML = '黑子赢';
      }
      ctx.clearRect(0, 0, 600, 600);
      draw();
    }
    //左上右下方向
    row = orgrow;
    col = orgcol;
    total = 1;//每一次换方向都需要重新计数
    while (col - 1 > 0 && row - 1 > 0 && maps[row - 1][col - 1] == n) {
      total++;
      col--;
      row--;
    }
    row = orgrow;
    col = orgcol;
    while (col + 1 < 15 && row + 1 < 15 && maps[row + 1][col + 1] == n) {
      total++;
      col++;
      row++;
    }
    if (total >= 5) {
      if (n == 1) {
        text.innerHTML = '白子赢';
      } else {
        text.innerHTML = '黑子赢';
      }
      ctx.clearRect(0, 0, 600, 600);
      draw();
    }
    //左下右上方向
    row = orgrow;
    col = orgcol;
    total = 1;//每一次换方向都需要重新计数
    while (col - 1 > 0 && row + 1 < 15 && maps[row + 1][col - 1] == n) {
      total++;
      col--;
      row++;
    }
    row = orgrow;
    col = orgcol;
    while (col + 1 < 15 && row - 1 > 0 && maps[row - 1][col + 1] == n) {
      total++;
      col++;
      row--;
    }
    if (total >= 5) {
      if (n == 1) {
        text.innerHTML = '白子赢';
      } else {
        text.innerHTML = '黑子赢';
      }
      ctx.clearRect(0, 0, 600, 600);
      draw();
    }
  }
}

//执行
gobang.onclick = function(e) {
  play(e);
}
draw();
