import React from 'react';
import '../styles/Home.css'

function Location({t}) {
    const locations = [
   
    {
        name:t("karvenagar_location"),
        day:t("tuesday"),
        address:"https://goo.gl/maps/5sETcJGzXWoXC5SG9",
        time:"3PM-9PM"
    },
    {
        name:t("Kondhwa BK"),
        day:t("tuesday"),
        address:"https://maps.app.goo.gl/c2mXLzmGgk3jfYEt5?g_st=iw",
        time:"3PM-9PM"
    },
    {
        name: t("sadesataranali_location"),
        day:t("wednesday"),
        address:"https://maps.app.goo.gl/bh7wNdiyVWcvy15p9?g_st=iw",
        time:"3PM-9PM"
    },

    {
        name: t("Undri"),
        day:t("wednesday"),
        address:"https://goo.gl/maps/GWympTKEp5Jqj8EB7",
        time:"3PM-9PM"
    },
    {
        name: t("Kharadi IT Park"),
        day:t("thursday"),
        address:"https://g.page/Forest-County-Kharadi?share",
        time:"3PM-9PM"
    },
    {
        name: t("bramhasun_city_location"),
        day:t("friday"),
        address:"https://goo.gl/maps/w3xSJVLDc9cgdmxU9",
        time:"3PM-9PM"
    },
    {
        name: t("Wagholi"),
        day:t("friday"),
        address:"https://g.page/Forest-County-Kharadi?share",
        time:"3PM-9PM"
    },
    {
        name: t("wanwadi_location"),
        day:t("saturday"),
        address:"https://maps.app.goo.gl/54qsT1zcGPEv6gMx7",
        time:"3PM-9PM"
    },
        {
        name: t("Bhavadi Road"),
        day:t("saturday"),
        address:"https://maps.app.goo.gl/9HjB62BsjYVF4Ehg6?g_st=iw",
        time:"3PM-9PM"
    },

    {
        name: t("magarpatta_location"),
        day:t("sunday"),
        address:"https://goo.gl/maps/vedWovkK1J3z5gkL6",
        time:"7AM-1PM"
    },
    {
        name: t("amanora_city_location"),
        day:t("sunday"),
        address:"https://goo.gl/maps/HHMD4DHv7RgUXGj8A",
        time:"3PM-9PM"
    },
    {
        name: t("Green City"),
        day:t("sunday"),
        address:"https://maps.app.goo.gl/c2mXLzmGgk3jfYEt5?g_st=iw",
        time:"3PM-9PM"
    },


]
  return <>
      {
          locations.map((e,i)=>{
            return(
                <div key={i} className="location_container">
                        <div className="location_component_main">
                            
                            <img alt="team" className="location_image_main" src="https://e7.pngegg.com/pngimages/938/419/png-clipart-allied-communications-inc-computer-icons-location-youtube-symbol-addres-logo-company-text-thumbnail.png"/>
                            
                            <div className="places_main_wrapper">
                            <a href={e.address} target="_blank">
                                <h2 className="location_markets">{e.name}</h2>
                            </a>

                                <p className="location_date">{e.day} at {e.time}</p>
                            </div>
                        </div>
                    </div>
            )
          })
      }

  </>;
}

export default Location;