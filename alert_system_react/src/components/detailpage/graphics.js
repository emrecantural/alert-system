import React, { Component } from 'react';
import axios from 'axios';
import './graphics.css'
import { CanvasJSChart, CanvasJS} from '../../canvasjs.react';
import Header from '../Header/Header';
import AltHeader from '../Header/AltHeader';
import background from './arkaplan2.jpg';



class Graphics extends Component { 
    
    _isMouted = false;
    constructor() {
        super();
        this.state = {name: '',
                      situations: [],
                      mounted: true,
                      period: 0,
                      requestName: '',
                      url: ''
                    };
    }
    setSituation(){
        axios.get('http://localhost:8080/alerts/'+this.props.match.params.name)
        .then(response =>{
            if(this._isMouted){
                this.setState({name: response.data[0].name,
                               period: response.data[0].period,
                               requestName: response.data[0].requestName,
                               situations:[...response.data[0].situations],
                               url: response.data[0].url});
            }
        }).catch(err =>{
            console.log(err);
        });
    }
	componentDidMount() {
        this._isMouted=true;
        this.setSituation();
    }
    componentDidUpdate(){
        this.setSituation();
    }

    componentWillUnmount(){
        this._isMouted=false;
    }
	render() {
        let dps = this.state.situations.map((situation, index)=>{
            let date = new Date(situation.date);
            return {x: date, y: situation.downorup, toolTipContent: situation.response}
        });
        let last_25_dps =( (dps.length < 20) ? [...dps] : [...dps.slice(dps.length-20, dps.length)]);
        let options = {
			title :{
                text: this.state.name + ' isimli kullanıcıya ait grafik aşağıdaki gibidir.',
                fontColor: 'blacks',
                fontFamily: "helvetica",
                fontSize: 18,
                padding: 10,
                margin: 50,
                fontWeight: "bold"
            },
            
            axisX: {
                labelFormatter: function (e) {
                    return CanvasJS.formatDate( e.value, "YYYY-MM-DD HH:mm:ss");
                },
                labelAngle: -50
               
            },
        
            data: [{
                type: "line",
				showInLegend: true,
				name:  this.state.requestName + " işlemi için: " + this.state.url + " web adresi " + this.state.period + " saniyede kontrol edilmektedir.",
                dataPoints : last_25_dps,
                

			}]
		}
		return (
            <div style={{
                background: `url(${background})`,
                backgroundSize: 'stretch',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
              }} >
            <Header></Header>

            <div className = "graph" > 
                <div >
                    <CanvasJSChart options = {options}
                        onRef={ref => this.chart = ref}
                    />
                </div>
            </div>                        <AltHeader className='altheadercss'></AltHeader>
                
    </div>

		);
	}
}

export default Graphics;