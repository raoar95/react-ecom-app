import React, { useRef } from "react";
import { Link } from "react-router-dom";


const Sidepanel = ({panelContent, panelClass, openBtn, openLink }) => {

  // OPEN AND CLOSE NAV SIDEBAR JS & BACKGROUND DISABLE JS

  const myPanel = useRef(null);

  const sidePanelModal = useRef(null);

  function openNav() {
    myPanel.current.style.width = "340px";
    document.body.style.overflow = "hidden";
    sidePanelModal.current.classList.add("myModalActive");
    sidePanelModal.current.style.display = "block"
    

    // EVENT FOR OUTSIDE CLICK OTHER THAN MODAL

  window.addEventListener("click", (event) => {
      if (event.target === sidePanelModal.current) {
        closeNav();
      }
    });
  }

  function closeNav() {
    myPanel.current.style.width = "0";
    document.body.style.overflow = "";
    sidePanelModal.current.classList.remove("myModalActive");
    sidePanelModal.current.style.display = "none"
}

  return (
    <>
      <div className="sidePanelModal" ref={sidePanelModal}></div>
      <div id="mySidepanel" className={panelClass} ref={myPanel}>
        <Link to="#" className="closebtn" onClick={closeNav}>
          ×
        </Link>
        {panelContent}
      </div>
      {openBtn ? ( <button className="openbtn pointer" onClick={openNav}>☰</button>) : null}
      {openLink ? ( <Link to="#" onClick={openNav} className="promoText flex-center">Have a Promocode?</Link>) : null}
      
      
    </>
  );
};

export default Sidepanel;
