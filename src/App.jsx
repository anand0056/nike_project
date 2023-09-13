import Nav from "./components/nav"
import Hero from "./sections/hero"
import PopularProduct from "./sections/popularProduct"
import SuperQuality from "./sections/superQuality"
import Services from "./sections/services"
import SpecialOffers from "./sections/specialOffers"
import CustomerReviews from "./sections/customerReviews"
import Subscribe from "./sections/subscribe"
import Footer from "./sections/footer"

const App = () => {

    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProduct />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>

    )
}

export default App
