import React from 'react';
import bgImg from './images/bg6.png';
import vac from './images/vac.png';
import coronaImg from './images/corona.png'
import './Css/index.css' 
import { CardColumns } from 'react-bootstrap';

const Home = () =>
{
    return(
        <>
        <div className='main_div' style={{backgroundImage : `url(${bgImg})` , height: `calc(100vh - 60px)`}}>
        <div className="logo">
            <img src={vac} alt='vaccine_logo'></img>
        </div>
            <div className="container-fluid row">
            <div className="lef col-6 col-lg-6 col-md-6-sm-12 col-12">
                <h3>The wish for healing has always been half of health.</h3>
                    <h1>So dont lose hope,Don't give up yet<br/>
                        when the sun goes down,the stars comes out</h1>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-sm-12 col-12 highh">
             <img src={coronaImg} height="200px" width="200px" className="rght"></img>
            </div>
        </div>
        </div> 
        </>
    )
}

export default Home;