import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import moment from "moment";
import PropTypes from 'prop-types'
import {githubCommitImage, interest, introduction, job, learnMore} from "./HomeUtils";

function PhotoComponent({src, alt_text}){

  return (
<figure>
  <img src={src} alt={alt_text ?? ""}  />
      <figcaption aria-hidden="true"> <em>{alt_text ?? ""}</em></figcaption>
      </figure>

) 
}

export default function HomeView(props) {
    return (
        <article>
                <p>Hello, I am Josh. I live <a href="https://en.wikipedia.org/wiki/Chicago" target="_blank">Chicago, IL</a> with my dog (buddy).</p>

                <PhotoComponent 
                  src={props.picture}
                />

                      <PhotoComponent 
                        src="https://lh3.googleusercontent.com/aiyHCwx2SPEEMUVAC29ABPr0zmfAe_jE52HjGHmFJ7iILQCH-esjbgqIxPINXXRYKSiYsVgepHCqnm-LnWdrM3A2lh-iJdw3YVoSaQbjkYGxAsTZmGaqXqcHHf06n2gnFMMsm9hsFvAvSbpw7-RZ_2F5t01W8B33nGg5PMovQOhOrO2j69rnY_Poa4QIQ_sVG3LYXrVET077h-CXx2jTolpyIa52ktxfeZJsBvzTN0ZiZuMkWK_k8Of8M4eG_iEOsWaxRDUwWQOn8-ZQAdKAPm1izl5KbvmebU6B_-ZThazK8cJClikKVWc1vVqMPl5W-vSWywBvFyyim32q27YBIqLZJ83NGNlTWEWqWOPeD1izVqFUdpkFwQDVtHG8YkDSEcSTYhh9siwrAilkHvCSLNwU97Bx2fY3rAcDsJ3nuisULyGdgx9Si6f_ECnXgtZYu_E-U7OfMT6xGr2bJDbpng-K71DxtISGzccNaLh_2qFa2ov343qXWul73zgnugBRZJLvV9JEbLIvWZ2fdIZDRT89Ggw0P4zekQRNk56UIm7_eFb77O5uLvT3FkyR_25JlbqNYF5gN8ZXHGUi4uFX7C5DL6-uup712ltS7i_5GtFGKDwvKbHyJahNcS2ezlY_NfcNhMnjzXVbah5siwLqHl0g2PqhaGA7iid56yzo7YG8epXiRGX4UB-8rnVsBA=w1596-h2128-no?authuser=0"

                      alt_text="Buddy, the sweetest miniature schnauzer ever "
                      />

                    <p>  I started working as a a Software Engineer about {moment("201910", "YYYYMM").fromNow()}. I graduated (December 2019) with a degree in Computer Engineering (minors in Math and Computer Science) from Purdue University. </p>

                        <PhotoComponent 
                            src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/65035660_10211314595339157_6142903475052216320_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=rKLefa5jsSkAX9lm26n&_nc_ht=scontent-ort2-1.xx&oh=4674055779bf2622318b2bcb7aa01ae5&oe=602C3FF2"
                        />

                                  <p>I also enjoy break dancing when I have the time and space.</p>

                  <PhotoComponent 
                      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11870946_10203324409349501_1904570110902045720_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=2TCIkmgOGU8AX-8vbji&_nc_ht=scontent-ort2-1.xx&oh=090f23e44b11db4a0cd8e7862e094f3e&oe=602DA0E1"
                    alt_text='Dancing at the "Flint Town Get Down" in Flint, Michigan'
                  />

                        <p>I am mestizo (a mixed person), most people think just white but I am also half Filipino. I have a lot of pride for being Filipino. A lot of great in my life have came from me being apart of this ethic group</p>


                  <PhotoComponent
                      src="https://lh3.googleusercontent.com/5aA_PJrwjQyItpeWknnRZaSKvWQI1EorE02EZkgLhG5Jcx3CW51iYV6fmuYZiwv4zTyd_IFV-gXC3IVe8qWGzfTbfY0uWEDYoULLRJkVRNzzUbhJVIsuP2FJmfkNHuUSG837Sucr5k58glrThKYu2gKbKH-ZNw4f2iFqgz1JIkCJRaAik_m1TDccngiPXhiwRWfY8pi1QzyYSnKNulWJN8q8rnzR8J6XLhIXBhFfObCk0y2jpz8LIieJtrzcSAOjCveqqNFXioUKNxtjGszppu2FgYtOXbESXb0fx9BUVksxX9il8G7TqgGgFN_pHornvrFFTcWJRK2ONdS80fdI4ktre6MOge6FDS8_m9PDhAoVey-Y4lX6QlT1iNv5N7W-TFoBpH-_YVTfT202M6xP19V9koBev2w1eqR6ZK79Fbtyyt5vaex42kXmiYCtrYxJW4hlr-JOyEyQZ83k1tNtCb6GFYd57sPlRe_Ti1W-TOwYNTh9UpSY1XUmrmwQFA1vl1eyNpvYDmIne4ycnTdordtFZBmFYqfoB4JdgpGrqfxtilW8cDCxGVDkOTlsXTUlp2bMq0oCEEiGWVPCN1ntc_-vAYW4XGAHKE7X7BzH9gz8_zQ-rwC1zlSoSiS9TbjedijzYGjBqXuLdD3_eUely5e8ryGondFtgfdvfXuXhZUgiP-2Fw5UbDbmMahOgw=w2838-h2128-no?authuser=0"
                   alt_text="In San Pablo City, Laguna, Philippines with my cousins" 
                  />

                  <PhotoComponent 
                      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121013164_10214309203322485_6069129684038383402_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=wqxQtqQ6yt4AX96JmMg&_nc_ht=scontent-ort2-1.xx&oh=242be2e082fadf4c975724f4b58e58da&oe=602E0D85"
                      alt_text="Jose Rizal Monument in Chicago"
                  />

                  <br/>

                  <p>I like cycling, car, anything with speed or a motor </p>


                  <PhotoComponent 
                      src="https://lh3.googleusercontent.com/--qHa1b09JRYwKJoHlPiiXnR2H_tlzT6XRlOGR9v6DSenLkoRZ387GVjnN9S6ZNctsquip0YHYWrKeAKjwbqOhYwJ7D4OaZtpB36bTzMI5_t7_eAaPZQCL9HWH0ZcLSuv7o-5hqSxP-uG-GrfPq30H2nHfcesnrDVXUgwQguVeS1R1IW5Rb33CMUPBNpuKc9i0JbIvxnvp8QrUQGRupWWVG30OqQTWBY_78Hik4J7D15sTSP_v4ySxxNOmfMii1XfJvj-Mu2DfWgkBngA940SrmpXju_u4Ut3igIhxjKIjOg3z_L5zgH_KYI6TEBZUPrUOO4xOc1GoIRfqp2qYyIlZ4kPbamzTIOGHl0_ClrlyJc7BrEERrK7leWRhqyBBHBfdeMNKTvSQtd9ArMGE2G9OL6RgNlLNek8PsXtUOvWWSuGh_m_8cjC_inpEz_TvYleol1h3it2FIX3xSVLUxVZxy4snH_sCUrjiZl8rJoVHZ5kwbWhb7FCX2bTP2UGWfmkvZFTVMBJ8_a8IRPBr-q3d1RK62MlpyFvmg-P8BstEslvK0xkKl-YPpSM0W6wM819mP9mGFMyjWMgXV5B8c64VP0vqPbYVGtFpPNfEoGQ4G85rrsKhP-4Wq-H39DyiVXtcseX-byl_CeVbflhaDuOpi1-VLFXRagNzMKASWYo02DpWMJbltIFb_u-Eb78w=w2838-h2128-no?authuser=0"
                    alt_text="biking Monon trail in Indaianpolis, IN"
                    
                  />

                  <PhotoComponent 
                      src="https://lh3.googleusercontent.com/8t_YJWxMdwEB65F6ze9xNN-SOp89evXHWzs3cFNey719ad2wLqg8aDuk7Wa8GRgji6c_UbWC7e-5gluaB-VKC4THQVD-XM-IN5sCH995JalREgcTtn3XRIc575qHxnDsBWr8-3FbA0As9ryT-Yg2pro23EwMHVZH3Kzv5Fs09ARehhYeISGAHyy41j7bu0VBmXoTM4UCKJ2hkWAR3ErgSy4Oj4Ma4l_PZRoPAhyD5ecTnwCYeQ8NQhkHtyNZdXQKiDSOzHMjgE72V0FW1cGAvhoQi7OpYLCh9KYO6GaMCZVTInS62C4wySWmpgK5rFv6HyWFnsbFoOxgZ4ZBi6uk2fBG8GpQL53da3UqWgsx6Svlviyg9oeUyLKa8MB3LyUUA5sas5PJrjn5pUIh9XB8iWiSmVdXNl_pXIJzU1F-xjYza6M5Qh_HZfjzRFUBh59FTsH5Xh3L1O6Vq_27c78LxuK0JJxTJxrdLzJttR52zLBkDod_iuyKSR225CGnAr4_bqCVlM4gD1eTedG6kyOj73PNErEj7M9uvlA3gjg7LdZKmG79QWMgqB-LtJl5qSw4wghQPLspqfLtx8FckD6mfA1soUAwIrDf40yfCVrKaNNALFyEg6aW4yR5Kl8Nlaf-OgQvUOc9EUFRFpy_Wu6FGp4mAzKbEF21h_6xZhDc6y5uvsFR67S-4_9hkc_O7A=w828-h1472-no?authuser=0"
                  />
                                


                              <PhotoComponent 
                                  src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/100574259_10213525338766361_6046404227155099648_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=tdQGuHPuDUgAX-43CVg&_nc_ht=scontent-ort2-1.xx&oh=be7e96d7026e54f97e4740f87b43cba0&oe=602B9495"
                              />

</article>
                                      );
                                      }


