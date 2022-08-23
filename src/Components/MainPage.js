import '../Components/css/main.css'
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { db } from "./firebase"
import { Link} from "react-router-dom";
import NavBar from './NavBar';
import Contact from './Contact';


const MainPage = ({ MainMenu }) => {


    const hotels = [
        {

            Name: 'RIVER DAM HOTEL ',
            Location: 'Polokwane Central 14 Biccard Street ',
            Amount: ' R 5000.00',
            pic: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/42/57/1d/premier-splendid-inn.jpg?w=1200&h=-1&s=1  ",
            description: "The River Hotel is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The River Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The River Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: " https://az712897.vo.msecnd.net/images/full/ebe6cace-4d28-4c56-a516-8cc1d216531c.jpeg ",
            pix: "https://media.timeout.com/images/105859033/image.jpg ",



        }, {

            Name: 'MLab Hotel ',
            Location: 'Polokeane Central 20 Rabbe Street ',
            Amount: ' R 2000.00',
            pic: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/285646807.jpg?k=c27d5fe4dbd8ccaafcb77d06c309d03ed5144f73a487db3ed9afff72743c2f0d&o=&hp=1  ",
            description: " The Mlab Hotel is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The Mlab Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The Mlab Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: "http://averagesouthafrican.com/wp-content/uploads/2020/01/dc116d63-6142-4aea-9661-ea19a0ba70aa-1024x768.jpg  ",
            pix: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/285646971.jpg?k=86750d45db289b8c81ff0bc20300fa2420530233506a0d2301834614dc6b7136&o=&hp=1   ",

        },{

            Name: 'Itumeleng Hotel ',
            Location: 'Polokeane Central 39 Thabo Mbheki Street ',
            Amount: ' R 2000.00',
            pic: "https://hotelfurnitureconcept.com/wp-content/uploads/2021/04/luxury-hotel-guest-room-furniture.jpg",
            description: "Itumeleng Hotel is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The Itumeleng Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The Itumeleng Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pix: "https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=20&m=1066999762&s=612x612&w=0&h=BitPXyhBFZQHMfpC9ikX_DReVK6Rd28hH9pRoZW8YAs=",
            pik: " https://www.hotellobbies.net/wp-content/uploads/2019/03/luxury-hotel-interior-design-idear-for-bedroom.jpg",
        

        },
    
        {
            Name: 'Hotel Warren ',
            Location: 'Polokwane Central 16 Biccard Street',
            Amount: ' R 4500.00',
            pic: "https://www.bellhotelsandwich.co.uk/sites/default/files/bell_hotel_sandwich_3_-_rm_24_river_view_suite_bridal_suite.jpg  ",
            pix: "https://bstatic.com/xdata/images/xphoto/1182x887/63486785.jpg?k=5387e5ab510b75699400ce1a7e9fa4eac50e56507473e99295881dfbfe2f800b&o=?size=S ",
            description: " Hotel Warren  is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The River Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The River Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: " https://www.rushtonhall.com/content/uploads/resized/Four-Poster-Bedroom-1280x600-8511e0162f4646d5987149fc60e5c845.jpg",
            More_info: "",
        }
    ]
    const [data, setData] = useState([]);

    function getInfo(und) {
        console.log('i am clicked okay ', und);
        setData(hotels[und])
        
    }

    

    function bookings(){
            
    }
    //function to book
    function Book(){
         const name = "kenneth"
         const Amount = 200

         console.log(name, Amount)
    }
   
    console.log('from Data-1: ', data);
    console.log('From Hotel-1', hotels);
    console.log(MainMenu)
    

    let navigate = useNavigate();

    
    const nav = (()=>{
        navigate('../book');
        console.log('we on the booking page');
    })
    return (
        <>
        <NavBar/>
            {
                hotels.map((hotel, index) => (
                    <div className='backr' key={index}>

                        <div className='hot-name'>
                            <h4> HOTEL NAME : {hotel.Name}</h4>
                        </div>
                        <div className='loc'>
                            <h4> LOCATION : {hotel.Location}</h4>
                        </div>

                     
                        <div className='image-ig'>
                            <img className='sidepic' src={hotel.pic}></img>
                           
                        </div>

                        <h4 className="moreInfo" onClick={(e) => { getInfo(index) }}>More info. {hotels.Moreinfo}</h4>
           

                    </div>

                ))

            }


            <div className='heading'>
              
                <h1>HOTEL DESCRIPTION.</h1>

            
            </div>
            <Contact/>
    
            {data.length === 0 ? (<>
          
            </>) : (
                <div className='pre'>
                    <div className='name-3'><img style={{ width: 600, height: 600 }} src={data.pic} /></div>
                    <div className='name-4'><p>{data.description}</p>


                    <div className='hotel-rooms'> 
                    <img src={data.pic} />
                    <br>
                    </br>
                    <img src={data.pix} />
                    <br>
                    </br>
                    <img src={data.pik} />
                    <br></br>
                    <img src={data.pi} />

                    </div>
                    <br>
                    </br>
                    
                    <button className='log-sub' onClick={nav}>Click to book</button>
                    </div>
                    
                    <div className='maps'>  
                    <iframe src={data.locationUrl} 
                    className='map'width="180" height="120" > </iframe>
                    </div>
                </div>
            )}



        </>
    );


}
export default MainPage;












