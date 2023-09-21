import React from 'react'
import CountUp from 'react-countup'

const FunFactContent = () => {
  return (
    <div className="fun-fact">
        <div className="container">
        <div className="row g-0 gy-4">
            <div className="col-md-3 col-6">
            <div className="single-box single-box-2">
                <div className="part-icon">
                <span>
                    <i className="fa-thin fa-badge-check"></i>
                </span>
                </div>
                <h2>
                <span className="odometer" data-count="247">
                    <CountUp end={246}/>
                </span>
                +
                </h2>
                <p>Years Experience</p>
            </div>
            </div>
            <div className="col-md-3 col-6">
            <div className="single-box single-box-2">
                <div className="part-icon">
                <span>
                    <i className="fa-thin fa-list-check"></i>
                </span>
                </div>
                <h2>
                <span className="odometer" data-count="258">
                <CountUp end={258}/>
                </span>
                +
                </h2>
                <p>Project Completed</p>
            </div>
            </div>
            <div className="col-md-3 col-6">
            <div className="single-box single-box-2">
                <div className="part-icon">
                <span>
                    <i className="fa-thin fa-users"></i>
                </span>
                </div>
                <h2>
                <span className="odometer" data-count="369">
                <CountUp end={369}/>
                </span>
                +
                </h2>
                <p>Happy Clients</p>
            </div>
            </div>
            <div className="col-md-3 col-6">
            <div className="single-box">
                <div className="part-icon">
                <span>
                    <i className="fa-thin fa-mug-hot"></i>
                </span>
                </div>
                <h2>
                <span className="odometer" data-count="959">
                <CountUp end={959}/>
                </span>
                +
                </h2>
                <p>Cups Of Tea</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FunFactContent