# project related to DOM


## Color Picker

## HTML Code: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Color Switchher</title>
   
</head>
<body>
    <h1>Color Scheme  Switcher</h1>
    <div class="boxes">
        <div class="box" id="gray"></div>
        <div class="box" id="red"></div>
        <div class="box" id="blue"></div>
        <div class="box" id="yellow"></div>
         
    </div>
    <h2>Try To Clicking On One Of The Colors Above To Change The Color Of The background</h2>
    <script src="script.js"></script>
</body>
</html>
```

## CSS Code: style.css
```css
        .box{
            height: 150px;
            width: 150px;
            border: 6px solid black;
            margin: 10px;
            border-radius: 20px;
        }
        .boxes{
            /* height: 500px; */
            display: flex;
            justify-content: center;
            /* align-items: center; */
        }
        h1{
            font-size: 50px;
            text-align: center;
        }
        h2{
            /* font-size: 50px; */
            text-align: center;
        }
        #gray{
            background-color: gray;
        }
        #yellow{
            background-color: yellow;
        }
        #blue{
            background-color: blue;
        }
        #red{
            background-color: red;
        }

```

## JAVASCRIPT Code: script.js
```javascript
        const body = document.querySelector('body')
        const boxes = document.querySelectorAll('.box')
        boxes.forEach(function (button){
            console.log(button)
            button.addEventListener("click",function (e){
                console.log(e.target.id)
                body.style.backgroundColor = e.target.id
            })
        });
```