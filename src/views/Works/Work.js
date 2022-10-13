import { FormattedMessage } from "react-intl";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchWorkMutation } from "../../redux/services/worksApi";
import Loader from "../../components/Loader";

import Icon from "../../components/Icon";

export default function Work(){
  const navigate = useNavigate();
  const { id } = useParams();

  const [work, setWork] = useState([]);
  const [fetchWork, { isLoading: isFetchingWork }] = useFetchWorkMutation();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchWork(id);

      if(error) {
        console.log(error);
      } else {
        setWork(data);
      }
    };

    fetchData();
  }, []);

  const isFetching = isFetchingWork;

  if (isFetching) {
    return (
      <Loader />
    );
  }

  console.log(work);
	return (
		<>
      <button
        onClick={() => navigate(-1)}>Back</button>
      <h1 className="
        text-3xl
        uppercase
        font-semibold
        text-sev-dark
        dark:text-white
      ">
        {work.name}
      </h1>
      <div className="flex items-center">
        <button
          className="
            text-xs
            leading-none
            font-medium
            inline-flex
            items-center
            justify-center
            px-6
            mt-8
            h-12.7
            rounded-full
            grow-0
            shrink-0
            group
            transition
            duration-2000
            ease-linear
            relative
            before:absolute
            before:left-0
            before:top-0
            before:w-full
            before:h-full
            btn
            btn-berry
            disabled:opacity-50
          "
          type="submit">
          <span
            className="
              inline-flex
              items-center
              justify-center
              transition
              duration-2000
              ease-linear
            ">
            <Icon
              icon="eye"
              className="
               w-4
               h-4
               mr-4
              " />
            <span>
              <FormattedMessage id="preview" />
            </span>
          </span>
        </button>

        <button
          className="
            text-xs
            leading-none
            font-medium
            inline-flex
            items-center
            justify-center
            px-6
            mt-8
            h-12.7
            rounded-full
            grow-0
            shrink-0
            group
            transition
            duration-2000
            ease-linear
            relative
            before:absolute
            before:left-0
            before:top-0
            before:w-full
            before:h-full
            btn
            btn-dark
            disabled:opacity-50
            ml-4
          "
          type="submit">
          <span
            className="
              inline-flex
              items-center
              justify-center
              transition
              duration-2000
              ease-linear
            ">
            <Icon
              icon="github"
              className="
               w-4
               h-4
               mr-4
              " />
            <span>
              <FormattedMessage id="github" />
            </span>
          </span>
        </button> 
      </div>     
		</>
	);
}