import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
    const initialMarkers = [
        {
            position: {
                lat: 46.97488,
                lng: 28.86857,
            },
            label: { color: "white", text: 'B' },
            draggable: false
        },
    ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers] = useState(initialMarkers);

    const containerStyle = {
        width: "100%",
        height: "600px",
    }

    const center = {
        lat: 46.97488,
        lng: 28.86857,
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        console.log(marker, index) 
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyAukou_UTzNHtaYX58e1GYLEwhQanK9UMw'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)}
                        onClick={event => markerClicked(marker, index)} 
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;