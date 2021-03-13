import React from 'react';
import './Css/precautions.css'
import bgimg from './images/bg3.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Precautions = () =>
{
    return (
    <>
    <div className='main_div container-fluid'>
    <div className="container">
      <div className="list1">
              <h1 className="heading1 text-muted"><b>precautions to be taken for COVID-19</b> </h1><br/>
      <ul className="text-light">
          <h2>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</h2>
          <h2>Maintain a safe distance from anyone who is coughing or sneezing.</h2>
          <h2>Wear a mask when physical distancing is not possible.</h2>
          <h2>Don’t touch your eyes, nose or mouth.</h2>
          <h2>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</h2>
          <h2>Stay home if you feel unwell.</h2>
          <h2>If you have a fever, cough and difficulty breathing, seek medical attention.</h2>
      </ul>
      <h1 className="heading2 text-muted"><b>importance of Masks</b></h1>
        <br/>
         <h2 className="text-light"> Masks can help prevent the spread of the virus from the person wearing the mask to others.</h2>
           <h2 className="text-light">Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene.</h2>
            <h2 className="text-light"> the advice provided by your local health authority.</h2>
      </div>
  
      <div className="testing">
             <h1 id="font1" className="text-muted"><b>The Vaccine Testing Process</b></h1>
             <h1 className="text-muted">PHASE 1 SAFETY TRIALS:</h1><br/>
                 <h2 className="text-light"> Scientists give the vaccine to a small number of people to test safety<br/>
                  and dosage as well as to confirm that it stimulates the immune system.</h2>
                  <h1 className="text-muted">PHASE 2 EXPANDED TRIALS:</h1><br/>
                  <h2 className="text-light"> Scientists give the vaccine to hundreds of people split into groups,<br/>
                      such as children and the elderly, to see if the vaccine acts differently in them.<br/>
                          These trials further test the vaccine’s safety and ability to stimulate the immune system.</h2>
                      <h1 className="text-muted">PHASE 3 EFFICACY TRIALS:</h1><br/>
                      <h2 className="text-light">Scientists give the vaccine to thousands of people and wait to see how many become infected,<br/>
                       compared with volunteers who received a placebo. These trials can determine if the vaccine protects<br/>
                        against the coronavirus. In June, the F.D.A. said that a coronavirus vaccine would have to protect at least<br/>
                         50% of vaccinated people to be considered effective. In addition, Phase 3 trials are large enough to reveal<br/>
                         evidence of relatively rare side effects that might be missed in earlier studies.</h2>
          </div>
      </div>
    <footer className="text-center">
        <div><b>Like What You See? Mail Us : tabishakhtar01@gmail.com</b></div>
      </footer>

      </div>
    </>
    )
}

export default Precautions;
