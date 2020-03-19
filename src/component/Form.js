import React, { Component } from 'react'
import Card from './Card'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myNumber: '',
            myName: '',
            myDate: ''
        }
    }
    onChangeName = (e) => {
        let name = e.target.value
        let regex =  /^[a-zA-Z]+$/
        if (name.length <= 20 && (regex.test(name))) {
            this.setState({
                
                myName: name
              
            })
        }
        else{
            this.setState({
                
                myName: ""
              
            })
        }
        console.log(this.state.myName)
    }


    espaceBetween(number) {
        let t = String(number).split('')
        // console.log(t)
        for (let i = 4; i < t.length; i += 5) {
            t.splice(i, 0, ' ')
        }
        let x = t.join('')
        console.log(x)
        return x
    }
    onChangeNumber = (e) => {
        let regex = /^[0-9]*$/
        let number = e.target.value
        // let i=0
        if (number.length <= 16 && (number.match(regex))) {
            this.setState({
                myNumber:number
                // myNumber: number.replace(/[ ]/g, '')
            })

        }
    }
     renderValidThru = number => {
        if (isNaN(number)) {
          return;
        }
        number = number.toString();
        let test = number[0] + number[1];
        if (test > 12) return "error";
        let test2 = number[2] + number[3];
        if (number.length < 2) return number; // sans cette ligne "/" va etre affiché dés le début
        return number.slice(0, 2) + "/" + number.slice(2);
      }
    onChangeDate = (e) => {
        let regex = /^[0-9]/g
        
        let date = e.target.value

        if (date.length < 5 && (regex.test(date))) {
            this.setState({
                myDate: date
            })
        }else if(!(regex.test(date))){
            this.setState({
                myDate: ""
            })
        }
       
    }



    render() {
        return (
            <div>
                <form className="formulaire">
                    <Card
                        number={this.espaceBetween(this.state.myNumber)}
                        date={this.renderValidThru(this.state.myDate)}
                        name={this.state.myName.toUpperCase()} />
                    <div className="form">
                        <input placeholder="enter number"
                            onChange={this.onChangeNumber}
                            value={(this.state.myNumber)}
                        />
                        <input placeholder="enter name"
                            onChange={this.onChangeName}
                            value={(this.state.myName)}
                        />

                        <input placeholder="enter month/year"
                            onChange={this.onChangeDate}
                            value={this.state.myDate}
                        />
                    </div>
                </form>

            </div>
        )
    }
}
