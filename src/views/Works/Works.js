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
        text-3xl
        uppercase
        font-semibold
        text-sev-dark
        dark:text-white
      ">
        <FormattedMessage id="work" />
      </h1>

      <WorkList
        works={works} />

      <div className="
        text-xs
        leading-5
        sm:text-sm
        lg:leading-7
        text-sev-gray-300
        dark:text-sev-gray-100
        select-none
        hlg:text-xs
        hlg:leading-5
      ">
        <p className="mb-5">
          <FormattedMessage id="workDesc" />
        </p>

        <TagsList
          tags={tags} />
      </div>
		</>
	);
}