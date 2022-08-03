import '../Components/css/main.css'
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Link} from "react-router-dom";
import NavBar from './NavBar';


const MainPage = ({ MainMenu }) => {



    const hotel = [
        {

            Name: 'RIVER DAM HOTEL ',
            Location: 'Polokwane Central 14 Biccard Street ',
            Amount: ' R 5000.00',
            pic: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319064923.jpg?k=013b1855b63bf575274680f025f17c8161e6891d482e0a330e1b165392c2824e&o=&hp=1 ",
            description: "The River Hotel is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The River Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The River Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: "https://www.suninternational.com/content/dam/approved/table-bay/campaigns/table-bay-accommodation-bg.jpg.sunimage.800.400.jpg ",
            pix: "https://theluxmag.com/wp-content/uploads/2021/10/Most-Romantic-Hotels-edited.jpg ",



        }, {

            Name: 'MLab Hotel ',
            Location: 'Polokeane Central 20 Rabbe Street ',
            Amount: ' R 2000.00',
            pic: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80 ",
            description: " The Mlab Hotel is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The Mlab Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The Mlab Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: "https://media-magazine.trivago.com/wp-content/uploads/2017/07/07122428/sybaris-pool-suites-private-pool-slide.jpeg ",
            pix: "https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-and-picture-id1213885014?k=20&m=1213885014&s=612x612&w=0&h=8TV57yZ2jqldDOjR8sK7xADHLH_0cSMXY-KXNLoS1Jw= ",

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
            pic: "https://www.discoverlosangeles.com/sites/default/files/images/2019-01/hollywood-roosevelt-tropicana-pool.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp ",
            pix: "https://bstatic.com/xdata/images/xphoto/1182x887/63486785.jpg?k=5387e5ab510b75699400ce1a7e9fa4eac50e56507473e99295881dfbfe2f800b&o=?size=S ",
            description: " Hotel Warren  is a modern, elegant 4-star hotel overlooking the river, perfect for a romantic , charming vacation , in the enchanting setting of Polokwane and the limpopo river .The rooms at The River Hotel are new , well-lit and and inviting. our receptionstaff will be happy to help you during your stay in The River Hotel , suggesting itineraries , guided visits and some good restuarants in the center. While you enjoy a cocktail by the swimming pool on the rooftop  terrace, you will be stunned by the breakfast view of the Polokwane view. here, during your summer stays , our bar serves traditional dishies , snacks and salads. At the end of a stairway across from the hotel. At your disposal in your room, fast Wifi ideal for working .Sky TV  all the latest reeases from the big screen and sport. Innvation air condintion system with primary air exchange to prevent the spread of viruses such as covid-19.",
            locationUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.935269198646!2d29.4577354!3d-23.9167731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef213f659d800228!2smLab%20Limpopo!5e0!3m2!1sen!2sza!4v1659083446029!5m2!1sen!2sza",
            pik: " https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg ",
            More_info: "",
        }
    ]
    const [data, setData] = useState([]);

    function getInfo(und) {
        console.log('i am clicked okay ', und);
        setData(hotel[und])
        
    }

    function bookings(){
            
    }
   
    console.log('from Data-1: ', data);
    console.log('From Hotel-1', hotel);
    console.log(MainMenu)
    

    let navigate = useNavigate();
    const nav = (()=>{
        navigate('../book');
        console.log('im working');
    })
    return (
        <>
            {
                hotel.map((user, index) => (
                    <div className='backr' key={index}>

                        <div className='hot-name'>
                            <h4> HOTEL NAME : {user.Name}</h4>
                        </div>
                        <div className='loc'>
                            <h4> LOCATION : {user.Location}</h4>
                        </div>

                     
                        <div className='image-ig'>
                            <img className='sidepic' src={user.pic}></img>
                           
                        </div>

                        <h4 className="moreInfo" onClick={(e) => { getInfo(index) }}>Click me for More info. {user.Moreinfo}</h4>
                    

                    </div>

                ))

            }


            <div className='heading'>
              
                <h1>HOTEL DESCRIPTION.</h1>
            
            </div>
            {/* <p>click on Moreinfo to display hotel full info</p>  */}
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












