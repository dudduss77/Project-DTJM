

const parseDateTimeToString = d => [
    d.getDate()>9 ? d.getDate() : "0"+d.getDate(),
    d.getMonth()>8 ? d.getMonth()+1 : "0"+(d.getMonth()+1),
    d.getFullYear()].join('.')+' '+
   [d.getHours()>9 ? d.getHours() : "0"+d.getHours(),
   d.getMinutes()>9 ? d.getMinutes() : "0"+d.getMinutes(),
   d.getSeconds()>9 ? d.getSeconds() : "0" + d.getSeconds()].join(':');


    export {parseDateTimeToString};