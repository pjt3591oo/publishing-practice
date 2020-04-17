const converted = {
  "*, html, body": { padding: "0", margin: "0" },
  "html": { backgroundColor: "#F5F5F5" },
  "li": { listStyle: "none", borderRadius: "5px" },
  "img.badge": {
    display: "inline-block",
    width: "20px",
    height: "20px",
    marginLeft: "12px"
  },
  ".mung-list-view": { width: "825px", margin: "auto" },
  ".mung-list-view ul": { width: "100%" },
  ".mung-list-view ul li": {
    border: "1px solid rgba(85, 85, 85, 0)",
    backgroundColor: "white",
    marginBottom: "11px",
    padding: "20px"
  },
  ".mung-list-view ul li:hover": {
    border: "2px solid rgb(80, 152, 184)",
    padding: "18px"
  },
  ".clear": { clear: "both" },
  ".mung-list-view ul li .title": { display: "table" },
  ".mung-list-view ul li .title h4": {
    color: "rgb(32, 153, 187)",
    fontSize: "18px",
    display: "table-cell",
    verticalAlign: "middle"
  },
  ".mung-list-view ul li .sub-desc": { marginTop: "10px" },
  ".mung-list-view ul li .sub-desc > span": { fontSize: "14px", color: "#666" },
  ".mung-list-view ul li .sub-desc > span.date": {
    fontSize: "12px",
    color: "#ccc"
  },
  ".mung-list-view ul li .body-desc": { marginTop: "10px" },
  ".mung-list-view ul li .body-desc > p": {
    width: "580px",
    color: "#999",
    fontSize: "13px",
    cssFloat: "left"
  },
  ".mung-list-view ul li .outer-info": {
    cssFloat: "right",
    width: "calc(100% - (580px + 35px))",
    fontSize: "13px",
    lineHeight: "13px",
    color: "rgb(85, 85, 85)"
  },
  ".mung-list-view ul li .outer-info .outer-info-data:not(:first-child)": {
    marginTop: "11px"
  },
  ".mung-list-view ul li .outer-info hr": {
    marginTop: "6px",
    border: "1px solid #dedede"
  },
  ".mung-list-view ul li .footer": { marginTop: "15px", color: "#999" },
  ".mung-list-view ul li .footer .tech": {
    width: "580px",
    cssFloat: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "break-word",
    fontSize: "14px"
  },
  ".mung-list-view ul li .footer .tags": { marginLeft: "10px" },
  ".mung-list-view ul li .footer .tags" : {
    display: "inline-block"
  },
  ".mung-list-view ul li .footer .cate": {
    display: "inline-block"
  },
  ".mung-list-view ul li .footer .tags .tag": {
    backgroundColor: "#e5e7e8",
    color: "#555",
    borderRadius: "5px",
    padding: "1px 7px",
    marginLeft: "7px",
    marginBottom: "-1px"
  },
  ".mung-list-view ul li .footer .relative": {
    cssFloat: "right",
    width: "calc(100% - (580px + 35px))",
    height: "13px",
    fontSize: "13px",
    lineHeight: "1"
  },
  ".mung-list-view ul li .footer .relative > span:not(:first-child)": {},
  ".mung-list-view ul li .footer .relative > img": {
    width: "14px",
    height: "14px",
    verticalAlign: "middle"
  },
  ".mung-list-view ul li .footer .relative > img:not(:first-child)": {
    marginLeft: "11px",
    verticalAlign: "middle"
  }
};

class Style {
  constructor (el) {
    Object.keys(converted).map(selector => {
      let doms = document.querySelectorAll(selector)
      let style = converted[selector]
      for (let dom of doms) {
        Object.keys(style).forEach(s => {
          dom.style[s] = style[s]
        })

      }

    }) 
  }
};

export default Style;