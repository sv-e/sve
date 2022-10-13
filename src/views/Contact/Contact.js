import { FormattedMessage } from "react-intl";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function Contact(){
	return (
		<>
      <h1 className="
        text-3xl
        uppercase
        font-semibold
        text-sev-dark
        dark:text-white
      ">
        <FormattedMessage id="contact" />
      </h1>

      <div
        className="
          bg-white/[.35]
          dark:bg-sev-neo-10
          rounded-3xl
          p-[7%]
          w-full
          h-[fit-content]
          backdrop-blur-md
          relative
          after:rounded-3xl
          after:w-4/5
          after:h-4/5
          after:absolute
          after:-left-[7%]
          after:-bottom-[7%]
          after:bg-sev-neo-27
          dark:after:bg-sev-neo-10
          after:blur-2xl
          after:z-[-1]
          m-[2%]
          max-w-xl
        ">
          <ContactForm />
      </div>
      
      <ContactList />
		</>
	);
}