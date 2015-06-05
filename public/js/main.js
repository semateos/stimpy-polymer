
    // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
    // which will try to choose the best renderer for the environment you are in.
    var renderer = new PIXI.WebGLRenderer(800, 600);

    // The renderer will create a canvas element for you that you can then insert into the DOM.
    document.body.appendChild(renderer.view);

    // You need to create a root container that will hold the scene you want to draw.
    var stage = new PIXI.Container();

    // This creates a texture from a 'bunny.png' image.
    var bunnyTexture = PIXI.Texture.fromImage('/images/bunny.png');
    var bunny = new PIXI.Sprite(bunnyTexture);

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    
    // Setup the position and scale of the bunny
    bunny.position.x = 400;
    bunny.position.y = 300;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // Add the bunny to the scene we are building.
    stage.addChild(bunny);

    // kick off the animation loop (defined below)
    animate();

    function animate() {
        // start the timer for the next animation loop
        requestAnimationFrame(animate);

        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;

        // this is the main render call that makes pixi draw your container and its children.
        renderer.render(stage);
    }
