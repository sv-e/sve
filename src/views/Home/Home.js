import { FormattedMessage } from "react-intl";

import Button from "../../components/Button";

export default function Home(){
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
        landscape:bg-red
      ">
        <FormattedMessage id="wellcome" />
      </h1>

      <div
        className="
          my-4
          sm:my-5
          md:my-5
          lg:m-auto
        ">
        <Button />
      </div>

      <div className="
        text-[calc(0.75rem+0.25vh)]
        leading-[calc(1rem+1vh)]
        text-sev-gray-300
        dark:text-sev-gray-100
      ">
        <p className="mb-5">
          <FormattedMessage id="wellcomeDesc" values={{ tag: <br /> }}/>
        </p>

        <p className="m-0">
          <FormattedMessage id="wellcomeGo" />
        </p>
      </div>
		</>
	);
}