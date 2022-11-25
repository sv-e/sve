import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchWorkMutation } from "../../redux/services/worksApi";
import Icon from "../../components/Icon";
import Loader from "../../components/Loader";
import ScrollButton from "../../components/ScrollButton";
import BackButton from "../../components/BackButton";

export default function Work(){
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

	return (
		<>
      <ScrollButton />

      <BackButton />     

      <div
        className="
          bg-white/[.35]
          dark:bg-white/[.15]
          rounded-3xl
          p-[7%]
          w-full
          h-[fit-content]
          backdrop-blur-md
          relative
          after:rounded-3xl
          after:w-4/5
          after:h-4/5
          after:hidden
          after:lg:block
          after:absolute
          after:z-10
          after:-left-[7%]
          after:-bottom-[7%]
          after:bg-sev-dark-7
          dark:after:bg-sev-white-10
          after:blur-2xl
          after:z-[-1]
          m-[2%]
          glass
        ">
        <div
          className="
            relative
            z-20
          ">
          <h1 className="
            uppercase
            font-bold
            text-sev-dark
            dark:text-white
            mb-4
            text-3xl
            lg:text-[5vh]
            leading-tight
          ">
            {work.name}
          </h1>
          <div className="
            text-[calc(0.75rem+0.25vh)]
            leading-[calc(1rem+1vh)] 
            text-sev-gray-300
            dark:text-sev-gray-100
            select-none
            mb-4
          ">
            {work.description ? work.description : null}
          </div>

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

          <div
            className="
              flex
              items-center
              justify-center
              mb-10
            ">
            {work?.links?.map(link => (
              <>
                {link?.name === "web" ? (
                  <div className="mx-2">
                    <a
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        dark:text-white
                        disabled:opacity-50
                      ">
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
                    </a>
                  </div>
                ) : link?.name === "codepen" ? (
                  <div className="mx-2">
                    <a
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </div>
                ) : link?.name === "figma" ? (
                  <div className="mx-2">
                    <a
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </div>
                ) : (
                  null
                )}
              </>
            ))}
          </div>

          <div>
            {work?.images?.map(img => (
              <div
                key={img.id}
                className="mb-4">
                <img src={require("../../assets/images/works/" + work.id + "/" + img.src + ".webp")} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </div>      
		</>
	);
}