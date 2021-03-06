var models_library = models_library || {};
models_library.solar_heating_gable_roof = {
  "model": {
    "timestep": 50.0,
    "measurement_interval": 100,
    "viewupdate_interval": 20,
    "sunny": true,
    "sun_angle": 1.5707964,
    "solar_power_density": 20000.0,
    "solar_ray_count": 24,
    "solar_ray_speed": 0.0010,
    "photon_emission_interval": 5,
    "convective": false,
    "background_conductivity": 0.1,
    "thermal_buoyancy": 2.5E-4,
    "buoyancy_approximation": 1,
    "boundary": {
      "temperature_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": 0.0
      }
    },
    "structure": {
      "part": [
        {
          "polygon": {
            "count": 4,
            "vertices": "8.0, 8.0, 8.5, 8.0, 8.5, 7.0, 8.0, 7.0"
          },
          "thermal_conductivity": 0.08,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 1.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "color": 0x22ccff
        },
        {
          "rectangle": {
            "x": 1.0,
            "y": 7.0,
            "width": 0.5,
            "height": 1.0
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false
        },
        {
          "rectangle": {
            "x": 1.0,
            "y": 4.0,
            "width": 0.5,
            "height": 1.0
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false
        },
        {
          "polygon": {
            "count": 6,
            "vertices": "0.5, 3.5, 5.0, 1.0, 9.5, 3.5, 8.5, 3.5, 5.0, 1.6499996, 1.5, 3.5"
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false
        },
        {
          "rectangle": {
            "x": -0.099999905,
            "y": 8.0,
            "width": 10.2,
            "height": 2.0
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "color": 0x333333,
          "label": "Ground"
        },
        {
          "rectangle": {
            "x": 8.5,
            "y": 4.0,
            "width": 0.5,
            "height": 4.0
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "label": "Wall"
        },
        {
          "rectangle": {
            "x": 1.15,
            "y": 5.0,
            "width": 0.2,
            "height": 2.0
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 1.0,
          "reflection": 0.0,
          "absorption": 0.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "color": 0xffffff
        },
        {
          "rectangle": {
            "x": 0.5,
            "y": 3.5,
            "width": 9.0,
            "height": 0.5
          },
          "thermal_conductivity": 0.0010,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "label": "Ceiling"
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "label": "T1",
        "x": 0.75,
        "y": 6.0
      },
      {
        "label": "T2",
        "x": 1.75,
        "y": 6.0
      },
      {
        "label": "T3",
        "x": 8.0,
        "y": 6.0
      }
    ]
  },
  "view": {
    "grid_size": 10,
    "ruler": true,
    "isotherm": true,
    "rainbow_x": 0.0,
    "rainbow_y": 0.0,
    "rainbow_w": 0.0,
    "rainbow_h": 0.0,
    "minimum_temperature": 0.0,
    "maximum_temperature": 40.0,
    "text": [
      {
        "string": "Gable roof",
        "name": "Arial",
        "size": 12,
        "style": 0,
        "color": 0xffffff,
        "x": 1.0,
        "y": 1.0
      },
      {
        "string": "Press 'Q' or 'W' to change the sun angle",
        "name": "Arial",
        "size": 14,
        "style": 0,
        "color": 0xffffff,
        "x": 0.5,
        "y": 9.5
      }
    ]
  }
};