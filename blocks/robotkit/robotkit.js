'use strict';

goog.provide('Blockly.Blocks.robotkit');
goog.provide('Blockly.Constants.RobotKit');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([{
        "type": "motora",
        "message0": "MotorA %1 direction %2 %3 speed %4",
        "args0": [{
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "direction",
                "options": [
                    [
                        "clockwise",
                        "0"
                    ],
                    [
                        "counter-clockwise",
                        "1"
                    ],
                    [
                        "",
                        ""
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_number",
                "name": "speed",
                "value": 500,
                "min": 0,
                "max": 1023
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 224,
        "tooltip": "Block controls MotorA",
        "helpUrl": ""
    },
    {
        "type": "motorb",
        "message0": "MotorB %1 direction %2 %3 speed %4",
        "args0": [{
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "direction",
                "options": [
                    [
                        "clockwise",
                        "0"
                    ],
                    [
                        "counter-clockwise",
                        "1"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_number",
                "name": "speed",
                "value": 500,
                "min": 0,
                "max": 1023
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 224,
        "tooltip": "Block controls MotorB",
        "helpUrl": ""
    },
    {
        "type": "lineFollowingSensor",
        "message0": "if sensor left %1 and center %2 and right %3 then %4",
        "args0": [{
                "type": "field_dropdown",
                "name": "sensor_left",
                "options": [
                    [
                        "HIGH",
                        "1"
                    ],
                    [
                        "LOW",
                        "0"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "sensor_center",
                "options": [
                    [
                        "HIGH",
                        "1"
                    ],
                    [
                        "LOW",
                        "0"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "sensor_right",
                "options": [
                    [
                        "HIGH",
                        "1"
                    ],
                    [
                        "LOW",
                        "0"
                    ]
                ]
            },
            {
                "type": "input_dummy",
                "name": "if"
            }
        ],
        "colour": 135,
        "tooltip": "Read line following sensors",
        "helpUrl": ""
    }
]);