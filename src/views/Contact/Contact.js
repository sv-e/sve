import { FormattedMessage } from "react-intl";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function Contact(){
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
        <FormattedMessage id="contact" />
      </h1>

      <div
        className="
          relative
          bg-white/[.35]
          dark:bg-white/[.15]
          rounded-3xl
          p-[7%]
          w-full
          h-[fit-content]
          after:hidden
          after:lg:block
          after:rounded-3xl
          after:w-4/5
          after:h-4/5
          after:absolute
          after:z-10
          after:-left-[7%]
          after:-bottom-[7%]
          after:bg-sev-dark-7
          dark:after:bg-sev-white-10
          after:blur-2xl
          after:z-[-1]
          m-[2%]
          max-w-xl
          glass
        ">
          <div className="
            relative
            z-20">
            <ContactForm />
          </div>
      </div>
      
      <ContactList />
		</>
	);
}