# Digital Clock

## source code :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        #clock{
            margin-top: 15px;
            height: 50px;
            width: 130px;
            background-color: rgb(218, 117, 71);
            border: 2px solid rgb(25, 24, 20);
            border-radius: 10px;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .center{
            margin-top: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #banner span{
            font-size: 23px;
            font-weight:600 ;
        }
        body{
            background-color: rgb(148, 146, 146);
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>digital Clock</title>
</head>
<body>
    <div class="center">
        <div id="banner"><span>Your Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script>
        const clock = document.querySelector('#clock')
        
        setInterval(function (){
            let date = new Date()
            // console.log(date.toLocaleTimeString())
            clock.innerHTML =`${date.toLocaleTimeString()}`

        },1000)
        
    </script>
</body>
</html>
```