var Supported=true;var OrientationFunction=null;function InitializeOrientation(OrientationEventHandler){if(OrientationEventHandler !=null){OrientationFunction=OrientationEventHandler;}if(window.DeviceOrientationEvent){window.addEventListener('deviceorientation',function(eventData){var tiltLR=eventData.gamma;var tiltFB=eventData.beta;var dir=eventData.alphavar motUD=null;Orientation(tiltLR,tiltFB,dir,motUD);},false);}else if(window.OrientationEvent){window.addEventListener('MozOrientation',function(eventData){var tiltLR=eventData.x * 90;var tiltFB=eventData.y * -90;var dir=null;var motUD=eventData.z;Orientation(tiltLR,tiltFB,dir,motUD);},false);}else{Supported=false;}}function Orientation(tiltLR,tiltFB,dir,motUD){this.tiltLR=tiltLR;this.tiltFB=tiltFB;this.dir=dir;this.motionUD=motUD;this.supported=Supported;OrientationFunction();}