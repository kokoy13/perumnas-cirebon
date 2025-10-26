import siteplan from "../assets/img/siteplan.png"

const Siteplan = () =>{
    return(
        <div id="siteplan" className="hidden xl:block w-full h-[960px] bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${siteplan})`
             }}
        ></div>
    )
}

export default Siteplan