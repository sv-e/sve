import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import WorkList from "./WorkList";
import { useFetchWorksMutation } from "../../redux/services/worksApi";
import Loader from "../../components/Loader";

export default function Works(){
  const [works, setWorks] = useState([]);
  const [fetchWorks, { isLoading: isFetchingWorks }] = useFetchWorksMutation();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchWorks();

      if(error) {
        console.log(error);
      } else {
        setWorks(data);
      }
    };

    fetchData();
  }, []);

  const isFetching = isFetchingWorks;

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

        <p className="m-0">
          tag list
        </p>
      </div>
		</>
	);
}