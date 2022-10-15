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
        {work.description ? work.description : null}
      </div>

      <div
        className="
          flex
          items-center
        ">
        {work?.links?.map(link => (
          <>
            {link?.name === "web" ? (
              <div className="mx-2">
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
              </div>
            ) : link?.name === "codepen" ? (
              <div className="mx-2">
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
                      icon="codepen"
                      className="
                       w-4
                       h-4
                       mr-4
                      " />
                    <span>
                      <FormattedMessage id="codepen" />
                    </span>
                  </span>
                </button>
              </div>
            ) : link?.name === "figma" ? (
              <div className="mx-2">
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
                      icon="figma"
                      className="
                       w-4
                       h-4
                       mr-4
                      " />
                    <span>
                      <FormattedMessage id="design" />
                    </span>
                  </span>
                </button>
              </div>
            ) : (
              null
            )}
          </>
        ))}
      </div>

      <p>
        {work?.images?.map(img => (
          <>
            {img.src} <br />
          </>
        ))}
      </p>

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
        {work?.tags?.map(tag => (
          <span
            key={tag.id}
            className="mx-2">
            #{tag.name}
          </span>
        ))}
      </div>
		</>
	);
}