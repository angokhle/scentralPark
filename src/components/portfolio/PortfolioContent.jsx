import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext";

const PortfolioContent = () => {
  const {activeTab,setActiveTab,filteredItemList} = useContext(DevolinContext)
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="section-title title-center">
              Take a look on <span>my past</span>
            </h2>
          </div>
        </div>
        <div className="filter-nav">
          <button 
          className={`filter-btn ${activeTab === "all" ? "active" : ""}`} 
          data-filter="all"
          onClick={() => setActiveTab("all")}
          >
            Show All
          </button>
          <button 
          className={`filter-btn ${activeTab === "Web Design" ? "active" : ""}`}
          data-filter="Web Design"
          onClick={() => setActiveTab("Web Design")}

          >
            Web Design
          </button>
          <button 
          className={`filter-btn ${activeTab === "UI Design" ? "active" : ""}`}
          data-filter="UI Design"
          onClick={() => setActiveTab("UI Design")}
          >
            UI Design
          </button>
          <button 
          className={`filter-btn ${activeTab === "Photography" ? "active" : ""}`}
          data-filter="Photography"
          onClick={() => setActiveTab("Photography")}
          >
            Photography
          </button>
          <button 
          className={`filter-btn ${activeTab === "marketing" ? "active" : ""}`}
          data-filter="marketing"
          onClick={() => setActiveTab("marketing")}
          >
            Marketing
          </button>
        </div>
        <div className="portfolio-row">
          {filteredItemList.length === 0 ? (
            <h3 className="empty-msg d-block">
            Nothing to show in this category &#128549;
            </h3>
          ):(
            filteredItemList.map((item) => (
              <div className="custom-col web" key={item.id}>
             <div className="single-portfolio-box">
               <div className="part-img">
                 <img src={item.imgSrc} alt={item.category} />
               </div>
               <div className="part-txt">
                 <span className="category">{item.category}</span>
                 <h3>{item.title}</h3>
                 <ul className="info">
                   <li>
                     <span>Start:</span> {item.startDate}
                   </li>
                   <li>
                     <span>End:</span> {item.endDate}
                   </li>
                 </ul>
                 <div className="bottom">
                   <div className="star">
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp"></i>
                   </div>
                   <a href="#">
                     Visit Site{" "}
                     <span>
                       <i className="fa-regular fa-arrow-right"></i>
                     </span>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           ))
          )}
         
          
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
