import React, { useRef, useEffect } from "react";
import { InputNoLabel } from "./formComp";
import { IoMdCloseCircle } from "react-icons/io";

const PopupModal = (props) => {

// POPUP MODAL JS

  const myModal = useRef();

  const openPopupModal = () => {
    document.body.style.overflow = "hidden";
    myModal.current.style.display = "block";
  };

  const myModalClose = () => {
    document.body.style.overflow = "";
    myModal.current.style.display = "none";
  };

  const openSearchModal = () => {

      openPopupModal();

      setTimeout(() => {
        document.getElementById("modalSearch").focus();
      }, 0);
  }

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target === myModal.current) {
        myModalClose();
      }
    });
  }, []);


  return (
    <>
      <div class={props.modalClass} ref={myModal}>
        <div class={props.conBoxClass}>
          <div class={props.conBoxHeadClass}>
            {props.headContent}
            <h2>{props.head}</h2>
            {props.chngCloseBtn ? (
              <span class="modalClose pointer chngClose" onClick={myModalClose}>{props.chngCloseCont}</span>
            ) : (
              <span class="modalClose pointer" onClick={myModalClose}>
                <IoMdCloseCircle />
              </span>
            )}
          </div>
          {props.headDesReq ? <p class="DescText">{props.headDes}</p> : null}
          <div class={props.conBoxContClass}>{props.modalContent}{props.modalBtn ? <button className="myBtn modalClsBtn" onClick={myModalClose}>{props.modalClsBtnTxt}</button> : null}</div>
        </div>
      </div>
      

      {/* DEFINE EVERY MODAL TRIGGER WITH ONCLICK OPEN POPUP MODAL */}

      {props.navAddrBtn ? (
        <div className={props.navAddrClass} onClick={openPopupModal}>
          {props.navAddrCont}
        </div>
      ) : null}

      {props.RespBar ? (
        <p className={props.btnClass} onClick={openPopupModal}>
          {props.respBtnTxt}
        </p>
      ) : null}

      {props.modalSearch ? (
      <InputNoLabel
        type="search"
        class="ellipsis"
        name="search"
        placeholder="Search for Product, Categories, Seller &amp; more ..."
        autoComplete="off"
        clickFunc={openSearchModal}
      />
      ) : null}

    </>
  );
};

export default PopupModal;
