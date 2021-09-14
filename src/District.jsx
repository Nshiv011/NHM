import React from 'react';
import Map from "./Image/map.png";
import $ from 'jquery'; 
const District=()=>{
    $(document).ready(function(){
        $(".hide").hide();
        
        
        $(".uttarkashi").hover(function(){
          $(".hide").hide();
          $(".uttarkashi-txt").toggle();
        });
        
          $(".dehradun").hover(function(){
             $(".hide").hide();
          $(".dehradun-txt").toggle();
        });
        
          $(".chamoli").hover(function(){
             $(".hide").hide();
          $(".Chamoli-txt").toggle();
        });
        
          $(".champawat").hover(function(){
             $(".hide").hide();
          $(".Champawat-txt").toggle();
        });
      
      });

    return(
        <>
        <div className="container-fluid">
        <div className="row">
                <div className="col-sm-5"><h1 className="dist">District Wise Status</h1></div>
                <div className="col-sm-7">
                        <div className="district">
                        <div class="uttarkashi-txt hide">
  <h1>Uttarkashi</h1>
  <p> 30.73°N,  78.45°E</p>
</div>

<div class="dehradun-txt hide">
  <h1>Dehradun</h1>
  <p>30.3165° N, 78.0322° E</p>
</div>

<div class="Chamoli-txt hide">
  <h1>Chamoli</h1>
  <p>30.2937° N, 79.5603° E</p>
</div>

<div class="Champawat-txt hide">
  <h1>Champawat</h1>
  <p>29.3209° N, 80.0088° E</p>
</div>

                               <img src={Map} usemap="#planetmap"/>
                               <map id="planetmap" name="planetmap" >
<area shape="rect" className="uttarkashi"  coords="119,112,222,191" alt="uttarkashi" href="/uttarkashi"/>
<area shape="rect" className="chamoli" coords="319,183,394,294" alt="chamoli" href="/chamoli"/>
<area shape="rect" className="dehradun" coords="62,219,98,295" alt="dehradun" href="/dehradun"/>
<area shape="rect" className="champawat" coords="421,460,458,519" alt="champawat" href="/champawat"/>
<area shape="rect" coords="186,239,238,299" alt="tehri" href="/tehri"/>
<area shape="rect" coords="118,331,252,398" alt="garhwal" href="/garhwal"/>
<area shape="rect" coords="66,352,112,416" alt="Haridwar" href="/haridwar"/>
<area shape="rect" coords="383,314,423,383" alt="Bageshwar" href="/bageshwar"/>
<area shape="rect" coords="419,250,510,357" alt="Pithoragarh" href="/pithoragarh"/>
<area shape="rect" coords="292,372,338,436" alt="Almora" href="/almora"/>
<area shape="rect" coords="286,455,358,522" alt="Nainital" href="/nainital"/>
<area shape="rect" coords="392,545,421,607" alt="usnagar" href="/usnagar"/>
<area shape="rect" coords="259,182,311,240" alt="rudraprayag" href="rudra"/>

</map>

                               
                        </div>
                </div>

        </div>
        </div>


        </>
    );
};

export default District;