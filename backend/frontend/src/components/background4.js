import React, { Component } from 'react'
import { motion } from 'framer-motion'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const s = random(1, 30);

var speed1 = 0;
var speed2 = 0;
var speed3 = 0;
var speed4 = 0;


if (s >= 0) {
    var speed1 = 4;
    var speed2 = 8;
    var speed3 = 6;
    var speed4 = 2;
}

if (s >= 10) {
    var speed1 = 6;
    var speed2 = 2;
    var speed3 = 4;
    var speed4 = 7;
}
if (s >= 20) {
    var speed1 = 9;
    var speed2 = 5;
    var speed3 = 2;
    var speed4 = 4;
}

const blockEffect = {
    init: {
        x: '-30vw'
    },
    move: {
        x: '100vw',
        transition: {
            delay: .5,
            duration: speed1,
            repeat: Infinity
        }
    },
}

const blockEffect2 = {
    init: {
        x: '-30vw',
        y: '7vh'
    },
    move: {
        x: '100vw',
        transition: {
            delay: .5,
            duration: speed2,
            repeat: Infinity
        }
    },
}

const blockEffect3 = {
    init: {
        x: '-30vw',
        y: '10vh'
    },
    move: {
        x: '100vw',
        transition: {
            delay: .5,
            duration: speed3,
            repeat: Infinity
        }
    },
}

const blockEffect4 = {
    init: {
        x: '-30vw',
        y: '16vh'
    },
    move: {
        x: '100vw',
        transition: {
            delay: .5,
            duration: speed4,
            repeat: Infinity
        }
    },

}

class background4 extends Component {

    render() {
        return <div className="background" id="b4">
            <motion.div className="b4block"
                variants={blockEffect}
                initial="init"
                animate="move"
                transition="trans"
            ></motion.div>
            <motion.div className="b4block"
                variants={blockEffect2}
                initial="init"
                animate="move"
                transition="trans"
            ></motion.div>
            <motion.div className="b4block"
                variants={blockEffect3}
                initial="init"
                animate="move"
                transition="trans"
            ></motion.div>
            <motion.div className="b4block"
                variants={blockEffect4}
                initial="init"
                animate="move"
            ></motion.div>
        </div>
    }
}

export default background4;

