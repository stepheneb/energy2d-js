var models_library = models_library || {};
models_library.identical_heat_capacity = {
  "model": {
    "model_width": 1.0,
    "model_height": 1.0,
    "timestep": 0.05,
    "measurement_interval": 100,
    "viewupdate_interval": 10,
    "sun_angle": 1.5707964,
    "solar_power_density": 2000.0,
    "solar_ray_count": 24,
    "solar_ray_speed": 0.1,
    "photon_emission_interval": 20,
    "convective": false,
    "background_conductivity": 1.0E-9,
    "background_specific_heat": 1.0,
    "thermal_buoyancy": 2.5E-4,
    "buoyancy_approximation": 1,
    "boundary": {
      "flux_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": 0.0
      }
    },
    "structure": {
      "part": [
        {
          "rectangle": {
            "x": 0.19999999,
            "y": 0.3,
            "width": 0.3,
            "height": 0.4
          },
          "thermal_conductivity": 1.0,
          "specific_heat": 1000.0,
          "density": 1.204,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 40.0,
          "constant_temperature": false,
          "filled": false
        },
        {
          "rectangle": {
            "x": 0.49999997,
            "y": 0.3,
            "width": 0.3,
            "height": 0.4
          },
          "thermal_conductivity": 1.0,
          "specific_heat": 1000.0,
          "density": 1.204,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 10.0,
          "constant_temperature": false,
          "filled": false
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "label": "T2",
        "x": 0.65,
        "y": 0.5
      },
      {
        "label": "T1",
        "x": 0.35,
        "y": 0.5
      }
    ]
  },
  "view": {
    "grid": true,
    "grid_size": 10,
    "rainbow": true,
    "rainbow_x": 0.083333336,
    "rainbow_y": 0.033333335,
    "rainbow_w": 0.8333333,
    "rainbow_h": 0.033333335,
    "minimum_temperature": 0.0,
    "maximum_temperature": 60.0
  }
};