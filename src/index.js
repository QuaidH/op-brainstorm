import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from './box'
import './styles.css'




class Index extends Component {
    render () {
        return (
                <Box/>
        );
    }
}
// const Box1 = () => <Box className="index" />;

const rootElement = document.getElementById('root');
ReactDOM.render(<Index/>, rootElement);
export default Index