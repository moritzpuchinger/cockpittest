<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="css/app.css" />
    </head>
    <body>
        <div class="off-canvas-wrapper">
            <div class="off-canvas position-left" id="offCanvas" data-off-canvas>
                <div id="logo">

                </div>
                <ul class="vertical menu accordion-menu" id="menu" data-accordion-menu>

                </ul>
                <button class="close-button" aria-label="Close Menu" type="button" data-close>
                    
                </button>
            </div>
            <div class="off-canvas-content" data-off-canvas-content>
                <button type="button" class="button" id="open_button" data-toggle="offCanvas">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
                <div class="page_main_content">
                    <h1></h1>
                    <div class="created">Gepostet am 25.05.2018 um 10:00 Uhr</div>
                    <div class="orbit" role="region" aria-label="Pictures" data-orbit data-auto-play="false" data-options="animInFromLeft:slide-in-left; animInFromRight:slide-in-right; animOutToLeft:fade-out; animOutToRight:fade-out">
                        <div class="orbit-wrapper">
                            <div class="orbit-controls">
                                <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>◀</button>
                                <button class="orbit-next"><span class="show-for-sr">Next Slide</span>▶</button>
                            </div>
                            <ul class="orbit-container">
                                
                            </ul>
                        </div>
                    </div>
                    <div class="text">

                    </div>
                </div>
            </div>
        </div>
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/what-input/dist/what-input.min.js"></script>
        <script src="node_modules/foundation-sites/dist/js/foundation.min.js"></script>
        <script src="node_modules/motion-ui/dist/motion-ui.min.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>