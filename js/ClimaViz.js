/**
 * Created by Mukhil on 10/5/2016.
 */

//sets up the rendering canvas for WebGL
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.2, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
console.log("width: " + window.innerWidth);
document.body.appendChild( renderer.domElement );

//creates a point light source with white light
var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 30;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

var pointLight2 = new THREE.PointLight(0xFFFFFF);
pointLight2.position.x = -30;
pointLight2.position.y = 50;
pointLight2.position.z = -80;
scene.add(pointLight2);


var timePassed = 0; //incremented each frame of the animation


var glyphAustin = new THREE.Object3D();//object to hold each color bar for data metrics
var pivotAustin = new THREE.Object3D();//object to hold the glyph and change the rotation axis

var boxShape1 = new THREE.BoxGeometry(5, 1, 5);//creates the rectangular shape of a prism
var boxMesh1 = new THREE.MeshLambertMaterial({color: 0xff2255});//adds the texture illuminated by light
var temperatureAustin = new THREE.Mesh(boxShape1, boxMesh1);//creates the rendered object

var boxShape2 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh2 = new THREE.MeshLambertMaterial({color: 0xddee33});
var humidityAustin = new THREE.Mesh(boxShape2, boxMesh2);
humidityAustin.position.x = 5;

var boxShape3 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh3 = new THREE.MeshLambertMaterial({color: 0x00ccff});
var precipitationAustin = new THREE.Mesh(boxShape3, boxMesh3);
precipitationAustin.position.x = 2.5;
precipitationAustin.position.z = 5;

//adds all three bars to the glyph
glyphAustin.add(temperatureAustin);
glyphAustin.add(humidityAustin);
glyphAustin.add(precipitationAustin);

//moves the rotation axes to the center
pivotAustin.add(glyphAustin);
glyphAustin.position.x = -(5.0/2.0);
glyphAustin.position.z = -(5.0/2.0);
scene.add(pivotAustin);//adds the object to the scene to be rendered



var glyphSanfrancisco = new THREE.Object3D();
var pivotSanfrancisco = new THREE.Object3D();

var boxShape4 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh4 = new THREE.MeshLambertMaterial({color: 0xff2255});
var temperatureSanfrancisco = new THREE.Mesh(boxShape4, boxMesh4);

var boxShape5 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh5 = new THREE.MeshLambertMaterial({color: 0xddee33});
var humiditySanfrancisco = new THREE.Mesh(boxShape5, boxMesh5);
humiditySanfrancisco.position.x = 5;

var boxShape6 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh6 = new THREE.MeshLambertMaterial({color: 0x00ccff});
var precipitationSanfrancisco = new THREE.Mesh(boxShape6, boxMesh6);
precipitationSanfrancisco.position.x = 2.5;
precipitationSanfrancisco.position.z = 5;

glyphSanfrancisco.add(temperatureSanfrancisco);
glyphSanfrancisco.add(humiditySanfrancisco);
glyphSanfrancisco.add(precipitationSanfrancisco);

pivotSanfrancisco.add(glyphSanfrancisco);
glyphSanfrancisco.position.x = -(5.0/2.0);
glyphSanfrancisco.position.z = -(5.0/2.0);
scene.add(pivotSanfrancisco);



var glyphChicago = new THREE.Object3D();
var pivotChicago = new THREE.Object3D();

var boxShape7 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh7 = new THREE.MeshLambertMaterial({color: 0xff2255});
var temperatureChicago = new THREE.Mesh(boxShape7, boxMesh7);

var boxShape8 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh8 = new THREE.MeshLambertMaterial({color: 0xddee33});
var humidityChicago = new THREE.Mesh(boxShape8, boxMesh8);
humidityChicago.position.x = 5;

var boxShape9 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh9 = new THREE.MeshLambertMaterial({color: 0x00ccff});
var precipitationChicago = new THREE.Mesh(boxShape9, boxMesh9);
precipitationChicago.position.x = 2.5;
precipitationChicago.position.z = 5;

glyphChicago.add(temperatureChicago);
glyphChicago.add(humidityChicago);
glyphChicago.add(precipitationChicago);

pivotChicago.add(glyphChicago);
glyphChicago.position.x = -(5.0/2.0);
glyphChicago.position.z = -(5.0/2.0);
scene.add(pivotChicago);



var glyphDenver = new THREE.Object3D();
var pivotDenver = new THREE.Object3D();

var boxShape10 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh10 = new THREE.MeshLambertMaterial({color: 0xff2255});
var temperatureDenver = new THREE.Mesh(boxShape10, boxMesh10);

var boxShape11 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh11 = new THREE.MeshLambertMaterial({color: 0xddee33});
var humidityDenver = new THREE.Mesh(boxShape11, boxMesh11);
humidityDenver.position.x = 5;

var boxShape12 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh12 = new THREE.MeshLambertMaterial({color: 0x00ccff});
var precipitationDenver = new THREE.Mesh(boxShape12, boxMesh12);
precipitationDenver.position.x = 2.5;
precipitationDenver.position.z = 5;

glyphDenver.add(temperatureDenver);
glyphDenver.add(humidityDenver);
glyphDenver.add(precipitationDenver);

pivotDenver.add(glyphDenver);
glyphDenver.position.x = -(5.0/2.0);
glyphDenver.position.z = -(5.0/2.0);
scene.add(pivotDenver);



var glyphMiami = new THREE.Object3D();
var pivotMiami = new THREE.Object3D();

var boxShape13 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh13 = new THREE.MeshLambertMaterial({color: 0xff2255});
var temperatureMiami = new THREE.Mesh(boxShape13, boxMesh13);

var boxShape14 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh14 = new THREE.MeshLambertMaterial({color: 0xddee33});
var humidityMiami = new THREE.Mesh(boxShape14, boxMesh14);
humidityMiami.position.x = 5;

var boxShape15 = new THREE.BoxGeometry(5, 1, 5);
var boxMesh15 = new THREE.MeshLambertMaterial({color: 0x00ccff});
var precipitationMiami = new THREE.Mesh(boxShape15, boxMesh15);
precipitationMiami.position.x = 2.5;
precipitationMiami.position.z = 5;

glyphMiami.add(temperatureMiami);
glyphMiami.add(humidityMiami);
glyphMiami.add(precipitationMiami);

pivotMiami.add(glyphMiami);
glyphMiami.position.x = -(5.0/2.0);
glyphMiami.position.z = -(5.0/2.0);
scene.add(pivotMiami);



//sets the camera position
camera.position.z = 75;
camera.position.x = 10;
camera.position.y = 35;

//aligns the glyphs to the angle of the map
pivotAustin.rotation.x = .25;
pivotSanfrancisco.rotation.x = .25;
pivotChicago.rotation.x = .25;
pivotDenver.rotation.x = .25;
pivotMiami.rotation.x = .25;

//sets location of the glyphs
pivotAustin.position.x = -5;
pivotAustin.position.z = 18;
pivotAustin.position.y = -3;

pivotSanfrancisco.position.x = -85;
pivotSanfrancisco.position.z = 0;
pivotSanfrancisco.position.y = 1;

pivotChicago.position.x = 25;
pivotChicago.position.z = -7;
pivotChicago.position.y = 3;

pivotDenver.position.x = -35;
pivotDenver.position.z = -2;
pivotDenver.position.y = 2;

pivotMiami.position.x = 60;
pivotMiami.position.z = 25;
pivotMiami.position.y = -5;


//implementation of mouse controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);

//texture mapping function to create a plane geometry with a US map texture
var loader = new THREE.TextureLoader();
loader.load("usmap.png",//the image file used
    function (texture) {//creates the plane object that the map will be placed on
        var mapGeometry = new THREE.PlaneGeometry(200,70,200);
        var mapMaterial = new THREE.MeshBasicMaterial({map: texture});
        var usMap = new THREE.Mesh(mapGeometry, mapMaterial);
        usMap.rotation.x = -1.3;

        scene.add(usMap);
    });


//keeps the window full screen in the case it's resized
window.addEventListener('resize', onWindowResize, false);

//webGL rendering function containing animation implementation
function render() {
    requestAnimationFrame(render);

    //rotates each pivot slowly over time
    pivotAustin.rotation.y -= .001;
    pivotSanfrancisco.rotation.y -= .001;
    pivotChicago.rotation.y -= .001;
    pivotDenver.rotation.y -= .001;
    pivotMiami.rotation.y -= .001;

    controls.update(); //updates the viewing angle as determined by the mouse
    timePassed += .01;

    //call to animate each city
    animate_austin();
    animate_sanfrancisco();
    animate_chicago();
    animate_denver();
    animate_miami();

    renderer.render(scene, camera);

}

//updates the size of the screen if the window is resized
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//each function will separately animate each city with climate data
function animate_austin() {
    temperatureAustin.scale.y = 7.6*Math.pow(Math.sin(timePassed + .5), 2) + 17;
    temperatureAustin.position.y = .5*7.6*Math.pow(Math.sin(timePassed + .5), 2) + .5*16;
    humidityAustin.scale.y = 9.4*Math.pow(Math.sin(.5*timePassed), 2) + 2;
    humidityAustin.position.y = .5*9.4*Math.pow(Math.sin(.5*timePassed), 2) + .5;
    precipitationAustin.scale.y = 6.64*Math.pow(Math.sin(timePassed), 2)+5;
    precipitationAustin.position.y = .5*6.64*Math.pow(Math.sin(timePassed), 2) + .5*4;
}

function animate_sanfrancisco() {
    temperatureSanfrancisco.scale.y = 9.87*Math.pow(Math.sin(timePassed + .5), 2)+17;
    temperatureSanfrancisco.position.y = .5*9.87*Math.pow(Math.sin(timePassed + .5), 2) + .5*16;
    humiditySanfrancisco.scale.y = 6.7*Math.pow(Math.sin(.5*timePassed), 2);
    humiditySanfrancisco.position.y = .5*6.7*Math.pow(Math.sin(.5*timePassed), 2) - .5;
    precipitationSanfrancisco.scale.y = 3.42*Math.pow(Math.sin(timePassed), 2)+3;
    precipitationSanfrancisco.position.y = .5*3.42*Math.pow(Math.sin(timePassed), 2) + .5*2;

}

function animate_chicago() {
    temperatureChicago.scale.y = 14.76*Math.pow(Math.sin(timePassed + .5), 2) + 2.76;
    temperatureChicago.position.y = .5*14.76*Math.pow(Math.sin(timePassed + .5), 2) + .5*1.76;
    humidityChicago.scale.y = 6.24*Math.pow(Math.sin(.5*timePassed), 2);
    humidityChicago.position.y = .5*6.24*Math.pow(Math.sin(.5*timePassed), 2) - .5;
    precipitationChicago.scale.y = 5*Math.pow(Math.sin(timePassed), 2)+ 1.21;
    precipitationChicago.position.y = .5*5*Math.pow(Math.sin(timePassed), 2) + .5*.21;

}

function animate_denver() {
    temperatureDenver.scale.y = 8.76*Math.pow(Math.sin(timePassed + .5), 2)+9.76;
    temperatureDenver.position.y = .5*8.76*Math.pow(Math.sin(timePassed + .5), 2) + .5*8.76;
    humidityDenver.scale.y = 9.24*Math.pow(Math.sin(.5*timePassed), 2);
    humidityDenver.position.y = .5*9.24*Math.pow(Math.sin(.5*timePassed), 2) - .5;
    precipitationDenver.scale.y = 8*Math.pow(Math.sin(timePassed), 2)+3;
    precipitationDenver.position.y = .5*8*Math.pow(Math.sin(timePassed), 2) + .5*2;

}

function animate_miami() {
    temperatureMiami.scale.y = 8.76*Math.pow(Math.sin(timePassed + .5), 2)+9.76;
    temperatureMiami.position.y = .5*8.76*Math.pow(Math.sin(timePassed + .5), 2) + .5*8.76;
    humidityMiami.scale.y = 7.24*Math.pow(Math.sin(.5*timePassed), 2) + 6.51;
    humidityMiami.position.y = .5*7.24*Math.pow(Math.sin(.5*timePassed), 2) + .5*5.51;
    precipitationMiami.scale.y = 8*Math.pow(Math.sin(timePassed), 2)+3;
    precipitationMiami.position.y = .5*8*Math.pow(Math.sin(timePassed), 2) + .5*2;

}

//call to render the current frame in browser
render();

