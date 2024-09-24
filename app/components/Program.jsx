import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { dataProgram } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function Program() {
  const [idContent, setIdContent] = useState(1);
  const [content, setContent] = useState(dataProgram[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isWantOpenNav, setIsWantOpenNav] = useState(false);

  const navRef = useRef();
  const coverRef = useRef();
  const iconRef = useRef();
  const programContentRef = useRef();

  useEffect(() => {
    const contentToShow = dataProgram.find((data) => data.id === idContent);
    setContent(contentToShow);
  }, [idContent]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (iconRef.current) {
      iconRef.current.style.display = isMobile ? "block" : "none";
    }
    if (navRef.current && coverRef.current) {
      if (isWantOpenNav) {
        navRef.current.style.transform = "translateX(10px)";
        coverRef.current.style.display = "block";
      } else {
        navRef.current.style.transform = isMobile
          ? "translateX(-100%)"
          : "translateX(10px)";
        coverRef.current.style.display = "none";
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isWantOpenNav]);

  // Animation variants for list items
  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Stagger children for item list
  const contentContainerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const handleClick = (id) => {
    setIdContent(id);
    setIsWantOpenNav(false);
  };

  return (
    <motion.div id="Program" initial="hidden" animate="visible" ref={programContentRef}>
      <div className="container">
        {isWantOpenNav ? (
          <FontAwesomeIcon
            ref={iconRef}
            icon={faAnglesRight}
            className="icon-display"
            onClick={() => setIsWantOpenNav(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAnglesLeft}
            ref={iconRef}
            className="icon-display"
            onClick={() => setIsWantOpenNav(true)}
          />
        )}

        <div ref={navRef} className="nav">
          <div className="main">
            <h5 className="title">Jour</h5>
            <p>Selectionner un jour </p>
            <ul className="body">
              {dataProgram.map((p, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleClick(p.id)}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  variants={listVariants}
                  className={idContent === p.id ? "active" : ""}
                >
                  {p.jour}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={coverRef} className="cover"></div>

        <motion.div
          className="content"
          key={content.id}
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <h5 className="title">PROGRAMME</h5>
          {content.program.map((p, index) => (
            <motion.div className="item" key={index} variants={listVariants}>
              <div className="row">
                <h5>{p.horaire}</h5>
                <h5>{p.activite}</h5>
              </div>
              <div className="row">
                <h6>{p.description}</h6>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Program;
