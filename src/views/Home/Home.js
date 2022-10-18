import { FormattedMessage } from "react-intl";

import Button from "../../components/Button";

export default function Home(){
	return (
		<>
      <h1 className="
        text-3xl
        uppercase
        font-bold
        text-sev-dark
        dark:text-white
        my-4
        sm:font-semibold
        lg:text-5xl
        hlg:text-3xl
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
          <FormattedMessage id="wellcomeDesc" values={{ tag: <br /> }}/>
        </p>

        <p className="m-0">
          <FormattedMessage id="wellcomeGo" />
        </p>
      </div>
		</>
	);
}