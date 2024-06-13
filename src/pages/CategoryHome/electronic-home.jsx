import React from "react";
import { NavLink } from "react-router-dom";
import VivoBanner from "../../assets/Images/vivo.jpg";
import ProductSlider from "../../components/productSlider";
import { ProductBox } from "../../components/productComp";
import { useProductContext } from "../../state/context/AppContext";
import { ElecCategoryImages, ElecBrandImage } from "../../assets/Image JS File/imaage";

//....ELECTRONIC CATEGORY COMPONENT....//

const HomeImg = ({ homeClass, homeCat, homeImg, homeText }) => {
  
  return (
    <div class={homeClass}>
      <NavLink to={homeCat === "#" ? "#" : `/category/${homeCat}`}>
        <img src={homeImg} alt="" value="" />
        <p>{homeText}</p>
      </NavLink>
    </div>
  );
  
};

//....ELECTRONIC HOME PAGE COMPONENT....//

const ElecronicHome = () => {

  const { products, GoToPage } = useProductContext();

  return (

    //....ELECTRONIC STORE MAIN CONTAINER START HERE....//

    <div className="elcStoreCont">

      {/*.....TOP CATEGORY SECTION START HERE.....*/}

      <section className="topCatCont">

        <ProductSlider
          slideContent={
            <>
              <HomeImg
                homeClass="homeImgSec"
                homeCat="mobile-phone"
                homeImg={ElecCategoryImages.cat1}
                homeText="Mobile"
              />

              <HomeImg
                homeClass="homeImgSec"
                homeCat="electronics"
                homeImg={ElecCategoryImages.cat2}
                homeText="Electronics"
              />

              <HomeImg
                homeClass="homeImgSec"
                homeCat="accessories"
                homeImg={ElecCategoryImages.cat3}
                homeText="Accessories"
              />

              <HomeImg
                homeClass="homeImgSec"
                homeCat="men's clothing"
                homeImg={ElecCategoryImages.cat1}
                homeText="Men's Clothing"
              />

              <HomeImg
                homeClass="homeImgSec"
                homeCat="women's clothing"
                homeImg={ElecCategoryImages.cat1}
                homeText="Women's Clothing"
              />

              <HomeImg
                homeClass="homeImgSec"
                homeCat="jewelery"
                homeImg={ElecCategoryImages.cat1}
                homeText="Jewelery"
              />

              <HomeImg
                homeClass="homeImgSec dummy"
                homeCat="#"
                homeImg={ElecCategoryImages.cat1}
                homeText="Dummy Category"
              />

              <HomeImg
                homeClass="homeImgSec dummy"
                homeCat="#"
                homeImg={ElecCategoryImages.cat1}
                homeText="Dummy Category"
              />

              <HomeImg
                homeClass="homeImgSec dummy"
                homeCat="#"
                homeImg={ElecCategoryImages.cat1}
                homeText="Dummy Category"
              />

              <HomeImg
                homeClass="homeImgSec dummy"
                homeCat="#"
                homeImg={ElecCategoryImages.cat1}
                homeText="Dummy Category"
              />
            </>
          }
        />
      </section>

      {/*.....TOP CATEGORY SECTION END HERE.....*/}


      {/*.....HIGHLIGHT CATEGORY SECTION START HERE.....*/}

      <section className="elecMainCatCont">

        <div className="homeHead text-center">
          <h2>Shop by Categories</h2>
          <hr />
        </div>

        <div className="elecFeaCatBox flex-center wrap">
          <HomeImg
            homeClass="homeImgSec"
            homeCat="mobile-phone"
            homeImg={ElecCategoryImages.cat1}
            homeText="Mobile"
          />

          <HomeImg
            homeClass="homeImgSec"
            homeCat="electronics"
            homeImg={ElecCategoryImages.cat2}
            homeText="Electronics"
          />

          <HomeImg
            homeClass="homeImgSec"
            homeCat="accessories"
            homeImg={ElecCategoryImages.cat3}
            homeText="Accessories"
          />

          <HomeImg
            homeClass="homeImgSec"
            homeCat="men's clothing"
            homeImg={ElecCategoryImages.cat1}
            homeText="Men's Clothing"
          />

          <HomeImg
            homeClass="homeImgSec"
            homeCat="women's clothing"
            homeImg={ElecCategoryImages.cat1}
            homeText="Women's Clothing"
          />

          <HomeImg
            homeClass="homeImgSec"
            homeCat="jewelery"
            homeImg={ElecCategoryImages.cat1}
            homeText="Jewelery"
          />

          <HomeImg
            homeClass="homeImgSec dummy"
            homeCat="#"
            homeImg={ElecCategoryImages.cat1}
            homeText="Dummy Category"
          />

          <HomeImg
            homeClass="homeImgSec dummy"
            homeCat="#"
            homeImg={ElecCategoryImages.cat1}
            homeText="Dummy Category"
          />
        </div>

      </section>

      {/*.....HIGHLIGHT CATEGORY SECTION START HERE.....*/}
      

      {/*.....BANNER SECTION START HERE.....*/}

      <section className="elecBannerSec mg-auto flow-hidden pointer">

        <img src={VivoBanner} alt="Mobile" onClick={() => GoToPage(36)}/>

      </section>

      {/*.....BANNER SECTION END HERE.....*/}


      {/*.....POPULAR PRODUCTS SECTION START HERE.....*/}

      <section className="elecPopuProSec">

        <div className="homeHead text-center">
          <h3>Popular Products</h3>
          <hr />
        </div>

        <div className="slideWrapper proSlider">

          <ProductSlider
            slideContent={products
              .filter((curElem) => {
                return curElem.category === "mobile-phone";
              })
              .map((curElem) => {
                return (
                  <ProductBox
                    onClick={() => GoToPage(curElem.id)}
                    proImgLink={curElem.image}
                    proName={curElem.title}
                    proSalePrice={curElem.price}
                    proPrice={curElem.price + 500}
                    proSellName="Seller Name"
                  />
                );
              })}
          />
        </div>

      </section>

      {/*.....POPULAR PRODUCTS SECTION END HERE.....*/}


      {/*.....TOP BRAND SECTION START HERE.....*/}

      <section className="elecTopBrandSec">

        <div className="homeHead text-center">
          <h3>Search By Top Brands</h3>
          <hr />
        </div>

        <div className="elecTopBrandBox flow-hidden">

          <div className="TopBrandLogoTrack flex-evenly">

            <NavLink to="#">
              <img src={ElecBrandImage.brand1} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand2} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand3} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand4} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand5} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand6} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand7} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand8} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand9} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand10} alt="Mobile" value="" />
            </NavLink>

            {/* SAME IMAGE FOR REPETATION IN SLIDE SHOW */}

            <NavLink to="#">
              <img src={ElecBrandImage.brand1} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand2} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand3} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand4} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand5} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand6} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand7} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand8} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand9} alt="Mobile" value="" />
            </NavLink>
            <NavLink to="#">
              <img src={ElecBrandImage.brand10} alt="Mobile" value="" />
            </NavLink>

          </div>

        </div>

      </section>

      {/*.....TOP BRAND SECTION END HERE.....*/}

    </div>

    //....ELECTRONIC STORE MAIN CONTAINER START HERE....//
  );
};

export default ElecronicHome;
