import Widget from "../components/widget"
import ContactCard from "../components/contact-card"

export default function Footer() {
  return (
    <footer className="w-full bg-blue mt-48" id="footer">

      <div className="go-top-wrapper w-full relative">
        <a href="#header" className="go-top flex items-center justify-center flex-col bg-white w-16 h-16 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-black drop-shadow-lg duration-500 hover:scale-110" >
          <svg viewBox="0 0 24 24" className="fill-blue w-5 h-5">
            <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"></path>
          </svg>
          <span className="uppercase text-blue">top</span>
        </a>
      </div>

      <section className="widgets container pt-14 mx-auto w-5/6 max-w-6xl flex flex-col items-start justify-start sm:flex-row sm:justify-between sm:gap-10">
        <Widget title="Contact">

          <address className="not-italic">
            <ContactCard
              svgPath={<path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />}
              link="tel:+529982391978"
              text="+52 (998) 239 1978"
            />

            <ContactCard
              svgPath={<path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />}
              link="mailto:info@rivieramayaairporttransfers.com"
              text="info@rivieramayaairporttransfers.com"
            />

            <ContactCard
              svgPath={<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />}
              text="Cancún Quintana Roo, México."
            />

            <ContactCard
              svgPath={<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />}
              link="https://www.facebook.com/cancunconciergemx"
              text="Facebook"
            />

            <ContactCard
              svgPath={<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
              link="https://www.instagram.com/cancunconcierge/"
              text="Instagram"
            />
          </address>
        </Widget>

        <Widget title="ABOUT US" extraClassName="about us max-w-lg sm:order-first">
          <p className="text-white text-md">
          Experience the beauty of the Mexican Caribbean with our premium transportation services. Our modern fleet of vehicles will take you to your destination in style and comfort. With our convenient online booking system, planning your transportation has never been easier. Trust us to get you to your destination safely and on time. Don't miss out on the adventure - book your transportation with us today!
          </p>
        </Widget>
      </section>

      <small className="text-white text-xsm text-center w-full block pt-10 pb-5">
        2023 - All Rights Reserved Cancun Concierge &nbsp; | &nbsp; Powered by <a className="hover:text-gold" href="https://api.whatsapp.com/send?phone=5214493402622" target="_blank">Dari Developer</a>
      </small>
    </footer>
  )
}