import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await axios.get(`http://url:5000/property/${propertyId}`);
                setProperty(response.data);
            } catch (error) {
                console.error("Error fetching property details:", error);
            }
        };

        fetchPropertyDetails();
    }, [propertyId]);

    if (!property) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{property.prop_name}</h1>
            <p>{property.description}</p>
            <p>Location: {`${property.address}, ${property.city}, ${property.state}, ${property.country}`}</p>
            <p>Price per Night: ${property.price_nightly}</p>
            <Link to={`/book/${property.id}`}>Book Now</Link>
        </div>
    );
};

export default PropertyDetails;
