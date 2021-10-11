import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {  Redirect } from 'react-router-dom';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
  
  const DefaultLocation = { lat: -33.83444522333735, lng: 151.1376792477385};

const ManuallySearch = () => {

    const [location, setLocation] = useState(DefaultLocation);
    const [zipcode,setZipcode] = useState("-1") ; // 2000 zip code for sydney
    

    function getZipCode(latlng){
      var baseURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng.lat},${latlng.lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`
        axios.get(baseURL).then((response) => {
            
            let results = response.data.results;
            let zc="2000" ;

            for (let j = 0; j < results[0].address_components.length; j++) {
              if (results[0].address_components[j].types[0] == 'postal_code')
              {
                  zc=results[0].address_components[j].short_name;
                  setZipcode(zc);
                  console.log(zc) ;
                  localStorage.setItem("postal_code",zc) ;
                  break;
              }
            }
        });
    }

    
    
    /*--- places autocomplete code ---- */
    const [address, setAddress] = React.useState("");
    const handleChange = (value) => {
        setAddress(value)
    }
    const handleSelect = (value) => {
        setAddress(value)
        //console.log(value)

        let url=`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${process.env.REACT_APP_GOOGLE_MAP_API}` ;
        axios.get(url).then((response) => {
          let loc = response.data.results[0].geometry.location ;// lat, lng
          setLocation(loc)
          getZipCode(loc)
       });
    }
    /*--------------*/ 
    if(zipcode!="-1"){
        window.location.href="/"
      }

    return (
          <div>

            <center>
                    <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    >
                    {({
                        getInputProps,suggestions,getSuggestionItemProps,loading,
                     }) => (
                        <div>
                        <input className="searchInput"
                            {...getInputProps({
                            placeholder: "Enter Address...",
                            
                            })}
                        />
                        <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                            const style = suggestion.active
                                ? { backgroundColor: "lightgray", cursor: "pointer" }
                                : { backgroundColor: "#ffffff", cursor: "pointer" };
            
                            return (
                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                {suggestion.description}
                                </div>
                            );
                            })}
                        </div>
                        </div>
                    )}
                    </PlacesAutocomplete>
                </center>
          </div>
        );
      
}
export default ManuallySearch;

