import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import nss_chairperson from "../assets/nss_chairperson.png";
import deputyPo from "../assets/deputy-po-1.png"
import satyam from "../assets/council-satyam.png"
import ved from "../assets/jnr-council-ved.png"

const testimonial_cards = [
    {
      name: "Mr. Ved Vora",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: ved,
      position: "Junior Council",
    },
    {
      name: "Ms. Jyoti Vanave",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: deputyPo,
      position: "Deputy Programme Officer",
    },
    {
      name: "Dr. B.K. Mishra",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: nss_chairperson,
      position: "Chairperson",
    },
    {
      name: "Mr. Satyam Rudra",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: satyam,
      position: "Council",
    },
    {
      name: "Dr. B.K. Mishra",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: nss_chairperson,
      position: "Chairperson",
    },
  ];

export default function TestimonialCard() {
    const [indexCard, setIndexCard] = useState(2);
    const displayPrev = () => {
      setIndexCard((prev) => {
        if (prev === 0) return testimonial_cards.length - 1;
        return prev - 1;
      });
    };
    const displayNext = () => {
    //   clearInterval(newInter)
      setIndexCard((prev) => {
        if (prev === testimonial_cards.length - 1) return 0;
        return prev + 1;
      });
    };
    useEffect(() => {
      const interval = setInterval(() => {
        if(indexCard === testimonial_cards.length - 1) setIndexCard(0)
        else setIndexCard(indexCard + 1)
        // })
      }, 2500)
      return () => clearInterval(interval)
    })
    // const newInter = setInterval(displayNext, 5000)
  return (
    <>
    <div className="testimonial-card-container">
        <div
          className="testimonial-card sub-active"
        >
          <img src={testimonial_cards[indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1].image} />
          <p>{testimonial_cards[indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1].testament}</p>
          <div>
            <h3>{testimonial_cards[indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1].name}</h3>
            <h5>{testimonial_cards[indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1].position}</h5>
          </div>
        </div>
        <div
          className="testimonial-card active-card"
        >
          <img src={testimonial_cards[indexCard].image} />
          <p>{testimonial_cards[indexCard].testament}</p>
          <div>
            <h3>{testimonial_cards[indexCard].name}</h3>
            <h5>{testimonial_cards[indexCard].position}</h5>
          </div>
        </div>
        <div
          className="testimonial-card sub-active"
        >
          <img src={testimonial_cards[indexCard === testimonial_cards.length - 1? 0 : indexCard + 1].image} />
          <p>{testimonial_cards[indexCard === testimonial_cards.length - 1? 0 : indexCard + 1].testament}</p>
          <div>
            <h3>{testimonial_cards[indexCard === testimonial_cards.length - 1? 0 : indexCard + 1].name}</h3>
            <h5>{testimonial_cards[indexCard === testimonial_cards.length - 1? 0 : indexCard + 1].position}</h5>
          </div>
        </div>
        ;
      </div>
      <div className="testimonial-scroller">
        <FontAwesomeIcon icon={faArrowLeft} onClick={displayPrev} />
        {testimonial_cards.map((test, idx) => 
          <div key={idx} className={idx === indexCard ? "selected" : ""} onClick={() => setIndexCard(idx)}></div>)
        }
        <FontAwesomeIcon icon={faArrowRight} onClick={displayNext} />
      </div></>
  )
}
