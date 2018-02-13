$(function() {
    //console.log("init() successfully called.");
    
      stage = new PIXI.Container();
      //var sliderWidth = document.getElementById('slider').width;
      //var sliderHeight = document.getElementById('slider').height;
      
      var sliderWidth = 2880;
      var sliderHeight = 800;

      //renderer = PIXI.autoDetectRenderer(
      renderer = new PIXI.WebGLRenderer(
      //renderer = PIXI.WebGLRenderer(
        sliderWidth,
        sliderHeight,
        //{transparent: true},
        {view: document.getElementById("slider")}
      );
      //var farTexture = PIXI.Texture.fromImage("img/slider/bg-far.png");
      //var farTexture = PIXI.Texture.fromImage("img/slider/screenshots_1440.png");
      //var farTexture = PIXI.Texture.fromImage("img/slider/bg-far1440.png");
      //var farTexture = PIXI.Texture.fromImage("img/slider/screenshots_1440.png");
      var farTexture = PIXI.Texture.fromImage("img/slider/slider-3.png");
      //far = new PIXI.Sprite(farTexture);
      far = new PIXI.extras.TilingSprite(farTexture, sliderWidth, sliderHeight)
      far.position.x = 0;
      far.position.y = 0;
      far.tilePosition.x = 0;
      far.tilePosition.y = 0;
      stage.addChild(far);
      
      //renderer.render(stage);
      //renderer.backgroundColor = 0xFFFFFF;
      //renderer.transparent = true;
      renderer.resolution = 1;
      //renderer.autoResize = true;
      renderer.roundPixels = true;
    
      requestAnimationFrame(update);

      function update() {
        //far.position.x -= 0.128;
        far.tilePosition.x -= 1;
        //far.tilePosition.y -= 1;
        renderer.render(stage);
        //console.log(renderer);

        requestAnimationFrame(update);
      }





    /*
    stage = new PIXI.Container();
    var width = document.getElementById("slider").width;
    var height = document.getElementById("slider").height;
    renderer = PIXI.autoDetectRenderer(
      width,
      height,
      {
        view: document.getElementById("slider")
      }
    );
    
    var farTexture = PIXI.Texture.fromImage("../img/slider/screenshots.png");
    //far = new PIXI.Sprite(farTexture);
    //создание закленного спрайта
    //far = new PIXI.extras.TilingSprite(farTexture, 512, 256);
      //фльтернатива с размерами взятыми из файла
    far = new PIXI.extras.TilingSprite(farTexture, farTexture.baseTexture.width, farTexture.baseTexture.height);
      //фльтернатива с размерами взятыми из файла END
    //создание закленного спрайта END
    far.position.x = 0;
    far.position.y = 0;
    //far.tilePosition.x = - 100;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    stage.addChild(far);


    //renderer.render(stage);
    
    requestAnimationFrame(update);

    
    function update() {
      far.tilePosition.x -= 1;
      
      
      renderer.render(stage);
      requestAnimationFrame(update);
      
    }
  */
});
