import React, { useEffect, useState } from 'react';
import './Css/coronaTracking.css';
import bgImg from './images/bg2.png';

const TrackCases = () =>
{   
const [count,getCount] = useState();
const [cname,newCname] = useState(null);

    useEffect(()=>
    {   const url = 'https://api.covid19api.com/summary';
        const showData = async () =>
        {   
            const myData = await fetch(url);
            const jsonData = await myData.json();
            newCname(jsonData);
            console.log(jsonData);
        }
        showData();
    },[count]);

    const getData = (e) =>
    {
        getCount(e.target.value);
    }

    return(
        <>  
            <div className='main_div' style={{backgroundImage : `url(${bgImg})`, height: `calc(100vh - 60px)`}}>
            <div className="heading">
            <h1 className="display-3 container-fluid text-warning text-center">Track Corona and Spread Awareness,</h1>
            </div>
            <div className="container text-light main_display">
            <h3 className="text-white container">Select The Country You Want To Check</h3>

            <select className='container' id="country" value={count} onChange={getData} name="country">    
        <option>Search Here</option>
        <option value="0">Afghanistan</option>
        <option value="1">Albania</option>
        <option value="2">Algeria</option>
        <option value="3">Andorra</option>
        <option value="4">Angola</option>
        <option value="5">Antigua & Barbuda</option>
        <option value="6">Argentina</option>
        <option value="7">Armenia</option>
        <option value="8">Australia</option>
        <option value="9">Austria</option>
        <option value="10">Azerbaijan</option>
        <option value="11">Bahamas</option>
        <option value="12">Bahrain</option>
        <option value="13">Bangladesh</option>
        <option value="14">Barbados</option>
        <option value="15">Belarus</option>
        <option value="16">Belgium</option>
        <option value="17">Belize</option>
        <option value="18">Benin</option>
        <option value="19">Bhutan</option>
        <option value="20">Bolivia</option>
        <option value="21">Bosnia & Herzegovina</option>
        <option value="22">Botswana</option>
        <option value="23">Brazil</option>
        <option value="24">Brunei</option>
        <option value="25">Bulgaria</option>
        <option value="26">Burkina Faso</option>
        <option value="27">Burundi</option>
        <option value="28">Cambodia</option>
        <option value="29">Cameroon</option>
        <option value="30">Canada</option>
        <option value="31">Cape Verde</option>
        <option value="32">Chad</option>
        <option value="33">Channel Islands</option>
        <option value="34">Chile</option>
        <option value="35">China</option>
        <option value="36">Colombia</option>
        <option value="37">Comoros</option>
        <option value="38">Congo</option>
        <option value="39">Cook Islands</option>
        <option value="40">Costa Rica</option>
        <option value="41">Croatia</option>
        <option value="42">Cuba</option>
        <option value="43">Cyprus</option>
        <option value="44">Czech Republic</option>
        <option value="45">Cote d'Ivoire</option>
        <option value="46">Denmark</option>
        <option value="47">Djibouti</option>
        <option value="48">Dominica</option>
        <option value="49">Dominican Republic</option>
        <option value="50">Ecuador</option>
        <option value="51">Egypt</option>
        <option value="52">El Salvador</option>
        <option value="53">Equatorial Guinea</option>
        <option value="54">Eritrea</option>
        <option value="55">Estonia</option>
        <option value="56">Ethiopia</option>
        <option value="57">Fiji</option>
        <option value="58">Finland</option>
        <option value="59">France</option>
        <option value="60">Gabon</option>
        <option value="61">Gambia</option>
        <option value="62">Georgia</option>
        <option value="63">Germany</option>
        <option value="64">Ghana</option>
        <option value="65">Greece</option>
        <option value="66">Grenada</option>
        <option value="67">Guatemala</option>
        <option value="68">Guinea</option>
        <option value="69">Guinea-Bissau</option>
        <option value="70">Guyana</option>
        <option value="71">Haiti</option>
        <option value="72">Holi See</option>
        <option value="73">Honduras</option>
        <option value="74">Hungary</option>
        <option value="75">Icelan</option>
        <option value="76">India</option>
        <option value="77">Indonesia</option>
        <option value="78">Iran</option>
        <option value="79">Iraq</option>
        <option value="80">Ireland</option>
        <option value="81">Israel</option>
        <option value="82">Italy</option>
        <option value="83">Jamaica</option>
        <option value="84">Japan</option>
        <option value="85">Jordan</option>
        <option value="86">Kazakhstan</option>
        <option value="87">Kenya</option>
        <option value="88">Korea South</option>
        <option value="89">Kuwait</option>
        <option value="90">Kyrgyzstan</option>
        <option value="91">Laos</option>
        <option value="92">Latvia</option>
        <option value="93">Lebanon</option>
        <option value="94">Lesotho</option>
        <option value="95">Liberia</option>
        <option value="96">Libya</option>
        <option value="97">Liechtenstein</option>
        <option value="98">Lithuania</option>
        <option value="99">Luxembourg</option>
        {/* <!-- <option value="Macau">Macau-100</option> --> */}
        <option value="100">Macedonia</option>
        <option value="101">Madagascar</option>
        <option value="102">Malawi</option>
        <option value="103">Malaysia</option>
        <option value="104">Maldives</option>
        <option value="105">Mali</option>
        <option value="106">Malta</option>
        <option value="107">Marshall Islands</option>
        <option value="108">Mauritania</option>
        <option value="109">Mauritius</option>
        <option value="110">Mexico</option>
        <option value="111">Micronesia</option>
        <option value="112">Moldova</option>
        <option value="113">Monaco</option>
        <option value="114">Mongolia</option>
        <option value="115">Montenegro</option>
        <option value="116">Morocco</option>
        <option value="117">Mozambique</option>
        <option value="118">Myanmar</option>
        <option value="119">Nambia</option>
        <option value="120">Nepal</option>
        <option value="121">Netherlands (Holland, Europe)</option>
        <option value="122">New Zealand</option>
        <option value="123">Nicaragua</option>
        <option value="124">Niger</option>
        <option value="125">Nigeria</option>
        <option value="126">Norway</option>
        <option value="127">Oman</option>
        <option value="128">Pakistan</option>
        <option value="129">Palestinian Territory</option>
        <option value="130">Panama</option>
        <option value="131">Papua New Guinea</option>
        <option value="132">Paraguay</option>
        <option value="133">Peru</option>
        <option value="134">Philippines</option>
        <option value="135">Poland</option>
        <option value="136">Portugal</option>
        <option value="137">Qatar</option>
        <option value="138">Republic of Kosovo</option>
        <option value="139">Romania</option>
        <option value="140">Russia</option>
        <option value="141">Rwanda</option>
        {/* <!-- <option value="Reunion">Reunion</option> --> */}
        <option value="142">St Kitts-Nevis</option>
        <option value="143">St Lucia</option>
        <option value="144">St Vincent & Grenadines</option>
        {/* <!-- <option value="Saipan">Saipan</option> --> */}
        <option value="145">Samoa</option>
        <option value="146">San Marino</option>
        <option value="147">Sao Tome & Principe</option>
        <option value="148">Saudi Arabia</option>
        <option value="149">Senegal</option>
        <option value="150">Serbia</option>
        <option value="151">Seychelles</option>
        <option value="152">Sierra Leone</option>
        <option value="153">Singapore</option>
        <option value="154">Slovakia</option>
        <option value="155">Slovenia</option>
        <option value="156">Solomon Islands</option>
        <option value="157">Somalia</option>
        <option value="158">South Africa</option>
        <option value="159">South Sudan</option>
        <option value="160">Spain</option>
        <option value="161">Sri Lanka</option>
        <option value="162">Sudan</option>
        <option value="163">Suriname</option>
        <option value="164">Swaziland</option>
        <option value="165">Sweden</option>
        <option value="166">Switzerland</option>
        <option value="167">Syria</option>
        <option value="168">Taiwan</option>
        <option value="169">Tajikistan</option>
        <option value="170">Tanzania</option>
        <option value="171">Thailand</option>
        <option value="172">Timor_Leste</option>
        <option value="173">Togo</option>
        <option value="174">Trinidad & Tobago</option>
        <option value="175">Tunisia</option>
        <option value="176">Turkey</option>
        <option value="177">Uganda</option>
        <option value="178">Ukraine</option>
        <option value="179">United Arab Emirates</option>
        <option value="180">United Kingdom</option>
        <option value="181">United States of America</option>
        <option value="182">Uruguay</option>
        <option value="183">Uzbekistan</option>
        <option value="184">Vanuatu</option>
        <option value="185">Venezuela</option>
        <option value="186">Vietnam</option>
        {/* <!-- <option value="Western Sahara">Western Sahara</option> --> */}
        <option value="187">Yemen</option>
        <option value="188">Zambia</option>
        <option value="189">Zimbabwe</option>
        </select>
            </div>
            {!count ? 
            <h3 className='text-center text-light display-2'>Good To See You</h3> : 
            <>  
                <div className='container'>
                <p className="text-warning" id="welcome">Hii there,Hope you doing good and Healthy</p>
                <h4 className="hehe text-light container">{cname.Countries[`${count}`].Country}</h4>
                <div className="container row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <h4 className="text-info" id="hehe1">{`New Confirmed: ${cname.Countries[`${count}`].NewConfirmed}`}</h4>
                <h4 className="text-success" id="hehe2">{`New Recovered: ${cname.Countries[`${count}`].NewRecovered}`}</h4>
                <h4 className="text-danger" id="hehe3">{`New Deaths: ${cname.Countries[`${count}`].NewDeaths}`}</h4>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <h4 className="text-info" id="hehe4">{`Globally Confirmed: ${cname.Global.TotalConfirmed}`}</h4>
                <h4 className="text-success" id="hehe5">{`Globally Recovered: ${cname.Global.TotalRecovered}`}</h4>
                <h4 className="text-danger" id="hehe6">{`Globally deaths: ${cname.Global.TotalDeaths}`}</h4>
                </div>
                </div>
                </div>
    </>}
    </div>
        </>
    )
}

export default TrackCases;