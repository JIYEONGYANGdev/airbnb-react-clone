import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 Stays ∙ 26 august to 30 august ∙ 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility
                    </Button>
                <Button variant="outlined">Type of place
                    </Button>
                <Button variant="outlined">Price
                    </Button>
                <Button variant="outlined">Rooms and  beds
                    </Button>
                <Button variant="outlined">More filters
                    </Button>
            </div>
            {/* 실제 데이터를 가지고 한다면 forEach Mapping 하겠지 */}
            <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free Parking ∙ Washing Machine"
                star={4.73}
                price="£30 / night"
                total = "£117 total"
            />
            <SearchResult img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
            location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest ∙ 3 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen"
                star={4.3}
                price="£40 / night"
                total = "£157 total"
            />
            <SearchResult img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
            location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free Parking ∙ Washing Machine"
                star={4.1}
                price="£55 / night"
                total = "£320 total"
            />
            <SearchResult img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
            location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free Parking ∙ Washing Machine"
                star={3.85}
                price="£90 / night"
                total = "£650 / total"
            />
            <SearchResult img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
            location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest ∙ 4 bedroom ∙ 4 bed ∙ 2 bathrooms ∙ Free Parking ∙ Washing Machine"
                star={3.8}
                price="£35 / night"
                total = "£207/ total"
            />
        </div>
    )
}

export default SearchPage
