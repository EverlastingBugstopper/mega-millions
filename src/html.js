let getResponse = lotto => {
  const responseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="Mega Million Number Generator"/>
    <meta name="author" content="Avery Harnish"/>
    <title>Mega Millions</title>
    
    <!-- Bootstrap Core CSS -->
    <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAABbd/QAt0dgAJtHpExPg/U0W3f2OFt39rRXe/q0V3v6OFd7+TRbd/RIW3f0AFt39AAAAAAAAAAAAAAAAABbd/QAW3f0CEuH/RTu4zro5uM7yFt7+/hnb+/8e1vT/HNn4/hra+fIV3v65K8bgRRvW9AIW3f0AAAAAABbd/QAW3f0CFt39XxXe/+cpyuT/cW5n/0+ao/9Zj5T/QKy9/yjM6P9WlZ7/R6e1/0udqecT4P9fGNv7Ahbd/QAW3f0AFt39Rhbd/ecV3v7/G9n4/2h1cP+KQST/iEkw/z6xw/8X3v7/Z3x6/4tEKP9fgoL/HNj35xXe/kYW3f0AFt39FBbd/bsV3v7/ItPx/1mOlP+ETDX/ikAg/4lCI/9odnH/ObrR/3FuZ/+KQSP/elxM/0Gxxf8W3v+7Ft39FBbd/VQW3f3zFd7+/yPR7v88sML/P6m4/3JlWP93X0//QqSu/ze4zf87tMj/Y359/zytu/8wxuH/INPw8xTf/1QW3f2UFt39/xvY9/8syOP/JOL+/zTn//9grbj/XJif/xfh//8U3///E+D//yvH4f9Onqz/Z3x7/zS6z/8W3v+UFt39sxXd/v8g1vT/an59/3ejp/+K2OX/iqSn/33I1v9F5f//G979/xbd/f8W3v//U5eh/4tCJf9jgoL/JdHurxbd/bMU3v7/LOL//3mJhP+NRir/kFlE/5tqWP+55+//h+3//zji/v8W3f3/Fd///0eltP94ZVv/RK2//xXf/64X3f2YJc7r/16dpP+IWET/iUAg/4c9Hf+TUzv/xMbF/67z//9Z5v7/GN///xvX9f9No7P/L8jj/ybR7v8V3v+XJNTzWUeoufVyiIf/k391/4xKL/+XWED/tot//7aYkf+pytD/ZOf9/y/M6P9KoKz/e15Q/1SXov8c2Pf1Fd7+WRjb+xgW3PzCPuP//5Lm9f+XcmP/wqqj/+7////M1dX/kWpZ/3qIhv9Xmqf/cG9p/4xBJf9LoKz/Ft//whXd/hgW3f0AFN39UCPf/e1j5/3/lcDH/7vk6//D5Ov/p5qS/4tFJ/+ESzL/M77V/1GWn/9ghIb/Mr7U7BHj/04W3f0AFt39ABPd/QQW3f1tKeD+7VPm/v904/f/e6mw/3lnWf+HRyz/eWNV/0iouP8vx+L/Gtn47Rnc+20R4P8EFt39AAAAAAAU3f0AE939BBXd/VAb3v3EI9799yLf/v9Ds8X/ZIKE/yfO6/8g1PP3Fd7+xBXe/lAQ4f0EEuD+AAAAAAAAAAAAAAAAABDb+wAe4P8AE939GBTd/V0T3v+dMMfivjPD3b4T4P+dFN7+XRbd/RgW3f0AFt39AAAAAAAAAAAA8A8AAMADAACAAQAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIABAADAAwAA8A8AAA==&#10;" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>

    <!-- Custom CSS -->
    <style>
        body {
            padding-top: 50px;
        }
        .starter-template {
            padding: 40px 15px;
            text-align: center;
        }
        .mega-million {
          padding: 10px 6px;
          display: inline-block;
        }
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Avery Harnish</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="https://averyharnish.com">Home</a></li>
<li><a href="https://sloths.averyharnish.com">Sloth</a></li> 
<li class="active"><a href="https://megamillions.averyharnish.com">Mega Millions</a></li>                <li><a href="https://github.averyharnish.com">Github</a></li>
                <!-- <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li> -->
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
    <!-- /.container -->
</nav>

<!-- Page Content -->
<div class="container">
    <div class="row">
        <div class="starter-template">
        <h3><img src="data:image/png;base64,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"></h3>
            <h1>${getDivs(lotto)}</h1>
            <h4>Don't like those numbers? Don't worry, get <a href="https://megamillions.averyharnish.com">new ones</a>.</h4>
            <h5>If you're into making robots buy your lotto tickets, there's <a href="/v1/api">an API</a>.
            <h6>View <a href="https://github.com/EverlastingBugstopper/mega-millions">source code</a></h6>
        </div> 
    </div>
    <!-- /.row -->
</div>
<!-- /.container -->
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
</body>
</html>`;
  return new Response(responseHtml, {
    headers: { "Content-Type": "text/html;charset=utf-8" }
  });
};

let getDivs = nums => {
  let divs = "";
  nums.forEach(num => {
    divs += `<div class="mega-million">${num}</div>`;
  });
  return divs;
};

export { getDivs, getResponse };
