import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Query } from 'appwrite';
import { useState, useEffect } from 'react';

export function Home( props) {
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState( false )
    document.title = "The best drinks in town"
    
    const database = props.db
    const storage = props.str

 // funtioon to get data   
    const getData = async () => {
        const result = await database.listDocuments(
            '6746c686003bf49a2b88' , // database id
            '6746c6e300388d1c774e' , // collection id
            [] // waiting for queries
        )
        setData( result.documents )
        setLoaded( true )

    }

    useEffect( () => { getData() }, [data] ) // updated data

    const ProductCollection = data.map( (p) => {
        // return each product as a Col
            // fet preview of image
        const imgURL = storage.getFileView(
            '6746d64e0035440f2779', // bucket ID
            p.image // file ID
        )
        return (
        <Col md={3}>
            <img className="img-fluid" src={ imgURL } />
            <h3>{ p.name }</h3>
            <h5>{ p.price }</h5>
            <p>{ p.description }</p>


        </Col>
        )
    } ) 

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>{ ProductCollection } </Row>
        </Container>
    )
}