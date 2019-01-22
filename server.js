const express = require('express');
const url = require('url');
const cookieParser = require('cookie-parser');
const path = require('path');

// 生成一个 express 的实例
const app = express();


// 处理 中间件函数，json urlencoded
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cookieParser());

// 设置 静态文件托管
app.use(express.static('public'));

// 设置 模板文件的存放路径
// 设置 使用的是什么模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');

// 设置不同的url地址，让其有不同的一个处理函数，处理业务逻辑
// http://localhost:3000/
app.get('/', function(req, res) {
  // console.log(url.parse(req.url, true).query.name);
  console.log(req.query);

  // 这块的 req， res 与原生 http 模块的提供的一样，只是 express 对这两个对象有一个二次封装。加多了一些属性与方法
  // res.write('hello  express');
  // res.end();


  res.render('index', {
    name: '张三',
    age: 94,
    abc: '<h1>我是个h1</h1>',
    list: [
      {
        name: '吃饭',
      },
      {
        name: '拉屎'
      },
      {
        name: '睡觉'
      }
    ]
  });
})

// http://localhost:3000/login  get 方式请球
app.get('/login', function(req, res) {
  res.write('hello 登录');
  res.end();
})

// http://localhost:3000/post
app.post('/post', function(req, res) {

  // 获取 post 的参数
  console.log(req.body);

  console.log('我是一个post请求的回调函数');
  res.write('hello');
  res.end();
})


// 设置cookie http://localhost:3000/setCookie
app.get('/setCookie', function(req, res) {
  res.cookie('name', '张三', {
    // 过期时间 （毫秒）
    maxAge: 60 * 1000 * 10
  });

  res.write('set ok');
  res.end();
})

//  取得 cookie http://localhost:3000/getCookie
// 需要使用  cookie-parser 中间件函数（第三方）
app.get('/getCookie', function(req, res) {
  console.log(req.cookies);
  res.write('ok');
  res.end();
})

// http://localhost:3000/getUserInfo/zhangsan/1
// http://localhost:3000/getUserInfo/lisi/2
// http://localhost:3000/getUserInfo/123123/3
app.get('/getUserInfo/:a/:b', function(req, res) {
  console.log(req.params); // { a: 'zhangsan', b: '1' }
  res.write('ok');
  res.end();
})

// 根据 请求头中的 user-angent 的不同，渲染不同的页面。
app.get('/abc', function(req, res) {
  // res.set('Content-Type', 'text/html; charset=utf-8');

  if (req.get('User-Agent').indexOf('Mobile') > -1) {
    // 是手机端
    // res.write('手机');
    // res.send('手机')
    // 重定向到 百度页面
    res.redirect('http://www.baidu.com');
  } else {
    // 是pc段
    // res.write('电脑');
    res.send('电脑')
  }

  // res.end();
})

app.get('/xiazai', function(req, res) {
  res.download('./README.md');
})

// // style.css 请求
// // http://localhost:3000/public/style.css
// app.get('/public/style.css', function(req, res) {
//   console.log('能不能进来');
//   res.sendFile(path.resolve(__dirname, './public/style.css'));
// })

// app.get('/public/index.js', function(req, res) {
//   res.sendFile(path.resolve(__dirname, './public/index.js'));
// })

// 监听端口号
app.listen(3000);

console.log('服务启动成功');