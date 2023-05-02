import { FormattedMessage } from "react-intl";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import WorkList from "./WorkList";
import TagsList from "./TagsList";
import { useFetchWorksMutation, useFetchTagsMutation } from "../../redux/services/worksApi";
import Loader from "../../components/Loader";

import { gsap } from "gsap";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);
  const [fetchWorks, { isLoading: isFetchingWorks }] = useFetchWorksMutation();
  const [fetchTags, { isLoading: isFetchingTags }] = useFetchTagsMutation();

  const root = useRef();

  const h1 = useRef(null);
  const metaRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1.current, 2, {
        delay: 0.25,
        opacity: 0,
        y: 30,
        ease: "power1.easeInOut"
      });      

      gsap.from(metaRef.current, 2, {
        delay: 0.5,
        opacity: 0,
        y: 30,
        ease: "power1.easeInOut"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const promiseData = await Promise.all([fetchWorks(), fetchTags()]);

      setWorks(promiseData[0].data);
      setTags(promiseData[1].data);    
    };

    fetchData();
  }, []);

  const isFetching = isFetchingWorks || isFetchingTags;

  // console.log(isFetching);

  if (isFetching) {
    return (
      <Loader />
    );
  }

  return (
    <div
      ref={root}
      className="
        flex
        flex-col
        items-center
        justify-start
        flex-auto
      ">
      <h1
        ref={h1}
        className="        
          uppercase
          font-bold
          text-sev-dark
          dark:text-white
          my-4
          text-3xl
          lg:text-[5vh]
          leading-tight
          will-change-transform
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <FormattedMessage id="work" />
      </h1>

      <div
        ref={metaRef}
        className="
          text-xs
          sm:text-sm
          lg:text-[calc(0.75rem+0.25vh)]
          leading-normal
          lg:leading-[calc(0.75rem+1vh)]
          text-sev-gray-300
          dark:text-sev-gray-100
          select-none
          max-w-2xl
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <p className="mb-5">
          <FormattedMessage id="workDesc" />
        </p>
        
        <div
          className="
            max-lg:!transform-none
            max-lg:!opacity-100
          ">
          <TagsList tags={tags} />          
        </div>
      </div>

      {isFetching ? <Loader /> : <WorkList works={works} />}      
    </div>
  );
};

export default Works;
