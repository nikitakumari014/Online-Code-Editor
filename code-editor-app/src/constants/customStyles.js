export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "10rem",
    minWidth: "7rem",
    borderRadius: "3px",
    color: "#000",
    fontSize: "0.8rem",
    lineHeight: "1.5rem",
    backgroundColor: "#42A5F5", //color of the styles dropdown button
    cursor: "pointer",
    border: "1px solid #FFFFF",
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      width: "100%",
      background: "#fff", //color of the options that comes when you click on dropdown
      ":hover": {
        backgroundColor: "#808080",
        color: "#000",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#fff",
      maxWidth: "12rem",
      border: "2px #FFFFFF",
      borderRadius: "2px",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
    };
  },
};
