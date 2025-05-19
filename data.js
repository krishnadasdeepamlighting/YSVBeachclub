var APP_DATA = {
  "scenes": [
    {
      "id": "0-vraycam001",
      "name": "VRayCam001",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.14472734349359762,
        "pitch": 0.1273068008067284,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.3161083632010282,
          "pitch": 0.09855350136198915,
          "rotation": 0,
          "target": "1-vraycam003"
        },
        {
          "yaw": -0.5023075550941591,
          "pitch": 0.07672308328762334,
          "rotation": 0,
          "target": "2-vraycam008"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vraycam003",
      "name": "VRayCam003",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0012807552149,
          "pitch": 0.07406490517871767,
          "rotation": 0,
          "target": "0-vraycam001"
        },
        {
          "yaw": -1.1522715178466747,
          "pitch": 0.20077700396369735,
          "rotation": 0,
          "target": "2-vraycam008"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vraycam008",
      "name": "VRayCam008",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8231369688400152,
          "pitch": 0.30716265706745105,
          "rotation": 0,
          "target": "1-vraycam003"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
