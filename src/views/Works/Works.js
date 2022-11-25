import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import WorkList from "./WorkList";
import TagsList from "./TagsList";
import { useFetchWorksMutation, useFetchTagsMutation } from "../../redux/services/worksApi";
import Loader from "../../components/Loader";

export default function Works(){
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);
  const [fetchWorks, { isLoading: isFetchingWorks }] = useFetchWorksMutation();
  const [fetchTags, { isLoading: isFetchingTags }] = useFetchTagsMutation();  

  useEffect(() => {
    const fetchData = async () => {
      const promiseData = await Promise.all([fetchWorks(), fetchTags()]);

      setWorks(promiseData[0].data);
      setTags(promiseData[1].data);    
    };

    fetchData();
  }, []);

  const isFetching = isFetchingWorks || isFetchingTags;

  if (isFetching) {
    return (
      <Loader />
    );
  }

	return (
		<>
      <h1 className="        
        uppercase
        font-bold
        text-sev-dark
        dark:text-white
        my-4
        text-3xl
        lg:text-[5vh]
        leading-tight
      ">
        <FormattedMessage id="work" />
      </h1>

      <div className="
        text-xs
        sm:text-sm
        lg:text-[calc(0.75rem+0.25vh)]
        leading-normal
        lg:leading-[calc(0.75rem+1vh)]
        text-sev-gray-300
        dark:text-sev-gray-100
        select-none
        max-w-2xl
      ">
        <p className="mb-5">
          <FormattedMessage id="workDesc" />
        </p>

        <TagsList
          tags={tags} />
      </div>

      <WorkList
        works={works} />
		</>
	);
}