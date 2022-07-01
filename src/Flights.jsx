import { useEffect, useState } from "react";
export default function Flights() {

    const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&limit=5&date_from=${dateFrom}&partner=data4youcbp202106`;


    const [flights, setFlights] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)


    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setFlights(data);
        setDataLoaded(true);
        console.log(data)
    };

    useEffect(() => {
        fetchData();
    }, []);
}