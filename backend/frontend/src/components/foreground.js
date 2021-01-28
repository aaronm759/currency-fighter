import React, { Component } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';

import usDollar from './pics/usdedit.png';
import audollar from './pics/audedit.png';
import ukpound from './pics/ukedit.png';
import candollar from './pics/cadedit.png';
import eudollar from './pics/euredit.png';
import jpyen from './pics/yenedit.png';
import nzdollar from './pics/nzdedit.png';
import swfranc from './pics/chfedit.png';


import audFlag from './pics/Australian-Flag.png';
import canFlag from './pics/canadian-flag.jpg';
import euFlag from './pics/euro-flag.jpg';
import jpFlag from './pics/japan-flag.jpg';
import nzFlag from './pics/nz-flag.jpg';
import swFlag from './pics/swiss-flag.jpg';
import ukFlag from './pics/uk-flag.jpg';





class foreground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: usDollar,
            price: 1
        }
    }



    aud() {
        this.setState({
            note: audollar
        })
        axios.get('/xChange').then((res) => {
            let xdata = res.data.pairs.xaud
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }
    cad() {
        this.setState({
            note: candollar
        })
        axios.get('/xChange').then((res) => {
            let xdata = res.data.pairs.xcad
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    eur() {
        this.setState({
            note: eudollar
        })
        axios.get('/xChange').then((res) => {
            let xdata = res.data.pairs.xeur
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    jpy() {
        this.setState({
            note: jpyen
        })
        axios.get('/xChange').then((res) => {
            let xdata = res.data.pairs.xjpy
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    nzd() {
        this.setState({
            note: nzdollar
        })
        axios.get('/xChange').then((res) => {
            let xdata = res.data.pairs.xnzd
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    chf() {
        this.setState({
            note: swfranc
        })
        axios.get('/xChange').then((res) => {
            const xdata = res.data.pairs.xchf
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    gbp() {
        this.setState({
            note: ukpound
        })
        axios.get('/xChange').then((res) => {
            const xdata = res.data.pairs.xgbp
            this.setState({
                price: xdata
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        return <div className='foreground'>
            <div className='forebox1'>
                <div className='currencybox1'>
                    <img className='currency' src={usDollar} alt='currency'></img>
                </div>
                <div className='currencybox2'>
                    <h1 className='versus'>VS</h1>
                    <h1 className='price'>1 = {this.state.price}</h1>
                </div>
                <div className='currencybox1' id='cb3'>
                    <div className='overlay1'>
                        <img className='currency2' src={this.state.note} alt='currency'></img>
                    </div>
                </div>
            </div>
            <div className='forebox2'>
                <motion.div className='flagbox' id='au' onClick={() => this.aud()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={audFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='ca' onClick={() => this.cad()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={canFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='eu' onClick={() => this.eur()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={euFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='jp' onClick={() => this.jpy()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={jpFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='nz' onClick={() => this.nzd()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={nzFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='sw' onClick={() => this.chf()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={swFlag} alt="flag"></img>
                </motion.div>
                <motion.div className='flagbox' id='uk' onClick={() => this.gbp()}
                    whileHover={{ scale: 1.1 }}>
                    <div className='overlay2'></div>
                    <img src={ukFlag} alt="flag"></img>
                </motion.div>
            </div>
        </div>

    }
}


export default foreground;