import SectionWrapper  from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green';
import { testimonials } from '../constants/data'
import { styles } from '../styles'
import { ScrollReveal } from "reveal-on-scroll-react";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => {
  return (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.05)}
    className='p-12 rounded-3xl mb-2 max-h-[660px] h-[440px] mt-1 xs:w-[320px] w-full bg-grad drop-shad'
  >
    <p className='text-white font-black flex items-center justify-center text-[37.5px] whitespace-nowrap bg-transparent title-name-comp' style={{ width: '100%'}}>{name}</p>

    <div className='gap-2 mt-1 bg-transparent'>
      <p className='designation-comp text-[20px] mb-2 bg-transparent mt-3'>{designation} of {company}</p>
      <p className='text-testi tracking-wider text-[18px] bg-transparent mt-10' style={{textAlign: "center"}}>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1 bg-transparent'>
        <div className='flex-1 flex flex-col bg-transparent'>
   
        </div>
  
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-[50px] brightness-125 rotate h-[50px] mt-[370px] ml-[200px] rounded-full object-cover'
          style={{position: 'absolute', top: 0, }}
        />

      </div>
    </div>
  </motion.div>
  )
}

const Feedbacks = () => {
 

  const splideOptions = {
    type: 'slide',
    perPage: 5,
    perMove: 5,
    arrows: false,
    width:'206%',
    pagination: false,
    keyboard: 'global',
    padding: '2rem',
    // autoplay: true,
    pauseOnHover: true,
    breakpoints: {
      1200: { perPage: 3},
      991: { perPage: 2},
      768: { perPage: 2},
      500: { perPage: 3},
      425: { perPage: 1},
    },
  };

  return (
    <ScrollReveal.div delay={0.2} threshold={0.5} duration={0.9} animation="slide-in-left" className="mt-12 rounded-3xl h-10" style={{ width: '95%',}}>
      <p className={`${styles.sectionSubText} flex items-center justify-center`}>
        What we have heard
      </p>
      <h1 className={`${styles.sectionHeadText} flex items-center justify-center`}>
        Words from important people.
      </h1>
      <div className={`mt-20 flex items-center transition-all duration-500 justify-center pb-14 ${styles.paddingX} flex  gap-7`}>
        <Splide
          options={splideOptions}
        >
          {testimonials?.map((testimonial, index) => (
            <SplideSlide key={testimonial.name}>
              <FeedbackCard {...testimonial} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </ScrollReveal.div>
  );
};
export default SectionWrapper(Feedbacks, "feedbacks")